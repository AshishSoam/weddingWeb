
const User = require('../models/userModel')
const commonQuery = require('../services/userServices')
const constant = require('../helpers/constants');
const Response = require('../helpers/commonResponseHaldler');
const responseMessage = require('../helpers/httpResponseMessage');
const responseCode = require('../helpers/httpResponseCode');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
module.exports = {

    //.................................UserList..............// 
    "userList": async (req, res) => {
        var query = { status: { $ne: "DELETE" }, "userType": { $ne: "ADMIN" } }, options

        if (req.body.userType) {
            query.userType = req.body.userType
        }


        if (req.body.status) {
            query.status = req.body.status
        }

        if (req.body.userId) {
            query._id = req.body.userId

        }

        // if (req.body.search && req.body.userType == "DEVELOPER") {
        //     query.$or = [
        //         { email: new RegExp('^' + req.body.search, "i") },
        //         { fullName: new RegExp('^' + req.body.search, "i") },
        //         { mobileNumber: new RegExp('^' + req.body.search, "i") }]

        //     // query.fullName = new RegExp('^' + req.body.search, "i")

        // }

        if (req.body.search) {
            query.$or = [
                { email: new RegExp('^' + req.body.search, "i") },
                { fullName: new RegExp('^' + req.body.search, "i") },
                { mobileNumber: new RegExp('^' + req.body.search, "i") }]


        }



        if (req.body.fromDate && req.body.toDate) {
            query.$and = [{ createdAt: { $gte: req.body.fromDate } }, { createdAt: { $lte: req.body.toDate } }]

        }


        if (req.body.fromDate && !req.body.toDate) {
            query.createdAt = { $gte: req.body.fromDate }

        }

        if (!req.body.fromDate && req.body.toDate) {
            query.createdAt = { $lte: req.body.toDate }

        }



        console.log("I am query for >>>>>", JSON.stringify(query))

        options = {
            page: req.body.pageNumber || 1,
            limit: req.body.limit || 5,
            sort: { createdAt: -1 }
        }

        User.paginate(query, options, (err, result) => {
            if (err) {
                Response.sendResponseWithData(res, responseCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR)

            }
            else if (result.docs.length == false) {
                Response.sendResponseWithData(res, responseCode.NOT_FOUND, responseMessage.NOT_FOUND, [])
            }
            else {
                let paginationData = {
                    "total": result.total,
                    "limit": result.limit,
                    "page": result.page,
                    "pages": result.pages
                }
                Response.sendResponseWithPagination(res, responseCode.EVERYTHING_IS_OK, responseMessage.SUCCESSFULLY_DONE, result.docs, paginationData)
            }

        })

    },

    /**
     * Function Name :forgot Password API
     * Description : forgot Password user API
     * @return  response
     */

    forgotPassword: (req, res) => {
        var currentTime = new Date().getTime();
        var otp1 = commonQuery.getOTP();
        var uniqueString = commonQuery.getCode()
        console.log("unique String---->", uniqueString, req.body)
        try {


            User.findOne({ $and: [{ status: "ACTIVE" }, { $or: [{ email: req.body.email }, { mobileNumber: req.body.email }] }] }, async (err, result) => {
                console.log("otp1====>", err, result);

                if (err) {
                    return Response.sendResponseWithoutData(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR)
                }
                else if (!result) {
                    console.log("this is 1");
                    let message = req.body.admin ? "User email not found." : "User email or mobile number not found."
                    return Response.sendResponseWithoutData(res, responseCode.NOT_FOUND, message)
                }
                else {
                    req.body.text = `Dear ${result.fullName},
                    Your reset password for Wedding App is : ${uniqueString}`;
                    req.body.subject = "Regarding forgot password"
                    let sendMail = await commonQuery.sendMail(req, res)
                    // let sendSMS = await commonQuery.sendMail(result.email, "Regarding forgot password", `${html}`)
                    let bcryptData = bcrypt.hashSync(uniqueString, salt)
                    req.body.password = bcryptData
                    User.findByIdAndUpdate({ "_id": result._id, status: "ACTIVE" }, { $set: { password: req.body.password, otpTime: currentTime, accountVerification: true } }, { new: true }, (err, result) => {
                        if (err)
                            return Response.sendResponseWithoutData(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR)
                        else if (!result) {
                            return Response.sendResponsewithError(res, responseCode.NOT_FOUND, "Unable to updated.", [])
                        }
                        else if (result) {
                            return Response.sendResponseWithData(res, responseCode.EVERYTHING_IS_OK, "Reset password otp sent to your registered email and Mobile number successfully.", result._id)
                        }
                    })
                }
            })

        }
        catch (e) {
            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, e)

        }
    },
    /**
     * Function Name :actionPerform API
     * Description : actionPerform user API
     * @return  response
     */
    actionPerform: (req, res) => {

        try {
            if (["ACTIVE", "BLOCK", "DELETE"].includes(req.body.status) == false) {
                return res.send({ responseCode: 404, responseMessage: "Bad request.", errror: "Invalid Parameters." })

            }
            User.findByIdAndUpdate(req.body.userId, req.body, { new: true }, (err, result) => {
                if (err) {
                    return res.send({ responseCode: 500, responseMessage: "Internal server error", err })
                }
                else if (!result) {
                    return res.send({ responseCode: 404, responseMessage: "Data not found", result: [] })

                }
                else {
                    req.body.status = req.body.status == "ACTIVE" ? "activat" : req.body.status
                    return res.send({ responseCode: 200, responseMessage: `User account ${req.body.status.toLowerCase()}ed successfully.`, result })
                }
            })
        }
        catch (e) {
            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, e)
        }
    },
    /**
        * Function Name :editAdminProfile API
        * Description : editAdminProfile user API
        * @return  response
        */
    editAdminProfile: async (req, res) => {
        try {
            let fixedArray=["email", "phoneNumber", "fullName"]
            if(req.body.oldPassword){
                fixedArray.push("password")
            }
            let checkRequest = commonQuery.checkRequest(fixedArray, req.body);
            console.log("checkRequest>>>>", checkRequest),req.body
            if (checkRequest !== true) {
                Response.sendResponseWithData(res, responseCode.NOT_FOUND, `${checkRequest} key is missing.`, {})
            }
            else {

                req.body.mobileNumber = req.body.phoneNumber
                let userId = req.query.userId ? req.query.userId : req.userDetails._id
                req.body = req.body.json ? req.body.json : req.body;
                if (req.body.oldPassword) {
                    let check = bcrypt.compareSync(req.body.oldPassword, req.userDetails.password)
                    req.body.password = bcrypt.hashSync(req.body.password, salt)
                    console.log("old password--->", check)
                    if (!check) {
                        return res.send({ responseCode: 404, responseMessage: "Password is incorrect." })
                    }
                }
                if (req.body.image) {
                    let secureImage = await commonQuery.imageUploadToCloudinaryPromise(req.body.image)
                    if (secureImage.status == false) {

                        return res.send({ responseCode: 500, responseMessage: "Image size too large.", err })
                    }
                    else {
                        delete req.body.image
                        req.body.profilePic = secureImage.result
                    }
                }

                console.log("finally------>", req.body)
                
                User.findByIdAndUpdate({ "_id": userId, status: "ACTIVE" }, req.body, { new: true }, (err, result) => {
                    if (err)
                        return Response.sendResponseWithoutData(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR)
                    else if (!result) {
                        return Response.sendResponsewithError(res, responseCode.NOT_FOUND, "Unable to updated.", [])
                    }
                    else if (result) {
                        return Response.sendResponseWithData(res, responseCode.EVERYTHING_IS_OK, "Profile updated successfully.", result)
                    }
                })
            }



        }
        catch (e) {
            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, e)

        }
    }

}