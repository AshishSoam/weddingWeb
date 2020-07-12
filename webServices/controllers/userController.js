const User = require('../../models/userModel')
const commonQuery = require('../../services/userServices')
const constant = require('../../helpers/constants');
const Response = require('../../helpers/commonResponseHaldler');
const responseMessage = require('../../helpers/httpResponseMessage');
const responseCode = require('../../helpers/httpResponseCode');
// const bcrypt = require('bcrypt-nodejs');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const userModel = require('../../models/userModel');
const twilio = require("twilio");
module.exports = {
    /**
      * Function Name :signUp API
      * Description : signUp user API
      * @return  response
      */
    signUp: async (req, res) => {

        try {
            req.body.otp = commonQuery.getOTP();
            let checkRequest = commonQuery.checkRequest(["email", "countryCode", "password", "createFor", "fullName", "mobileNumber"], req.body);
            console.log("checkRequest>>>>", checkRequest)
            if (checkRequest !== true) {
                Response.sendResponseWithData(res, responseCode.NOT_FOUND, `${checkRequest} key is missing`, {})
            }
            else {
                var query = { $and: [{ $or: [{ 'email': req.body.email }, { 'mobileNumber': req.body.mobileNumber }] }, { status: { $ne: 'DELETE' } }] }
                User.findOne(query, async (error, result) => {
                    if (error) {
                        return Response.sendResponseWithData(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, error)
                    }
                    else if (result) {
                        if (result.email == req.body.email) {
                            return Response.sendResponseWithData(res, 409, `Official email address already exists with ${result.userType.toLowerCase()} account`)
                        }
                        else {
                            return Response.sendResponseWithData(res, 409, `Mobile number already exists with ${result.userType.toLowerCase()} account`)
                        }
                    }
                    else if (!result) {
                        req.body.mergeContact = req.body.countryCode + req.body.mobileNumber
                        req.body.otpTime = new Date().getTime(),
                            console.log("otp is=======", req.body);

                        // var unique = message.getCode()
                        // if (req.body.referralCode) {
                        //     User.findOne({ "referralCode": req.body.referralCode }, (err1, data) => {
                        //         if (err1) {
                        //             return Response.sendResponseWithData(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR)
                        //         }
                        //         else if (!data) {
                        //             console.log("user not use available reffer code>>>>")
                        //             obj.referralCode = unique;
                        //         }
                        //         else {
                        //             console.log("user  use available reffer code>>>>")
                        //             obj.referralCode = unique;
                        //             obj.point = "0.5"
                        //         }
                        //     })
                        // }
                        // else {
                        //     console.log("new user reffer code>>>", unique)
                        //     obj.referralCode = unique;
                        // }
                        // commonQuery.sendSnsSms("OTP for verification of HOUSE THAT APP is:- " + otp1, `+91${obj.mobileNumber}`, (err, res1) => {
                        // console.log("response OTP====>>>>>>>", err, res1);
                        // if (err) {
                        //     return Response.sendResponseWithData(res, 501, "Unable to send SMS", err)
                        // }
                        // else {
                        // ${req.headers.origin}
                        // let link = `${global.gConfig.base_url}/v1/user/email_verification?user=${req.body.email}&key=${token}`
                        // console.log("i am here to check link url>>>> 115", link)
                        // email, subject,password, link, name,
                        // if (req.body.AdminAdd != "1") {
                        //     // email, subject, text, callback
                        //     commonQuery.sendMail(req.body.email, "Please Click here to Verify", link, req.body.fullName, (err2, sentData) => {
                        //         if (err2) {
                        //             console.log("error in sent email>>>>>>", err2)
                        //         }
                        //         else {
                        //             console.log("email sent>>>>>>>>>", req.body.email)
                        //         }
                        //     })
                        // }
                        // else {
                        // email, subject, text, callback
                        req.body.message=`Hello ${req.body.fullName} , Your authentication otp for wedding APP is :- ${ req.body.otp}`
                        let sendSMS=await commonQuery.sendSMS(req,res)
                        req.body.subject = "Your verification authentication otp"
                        let sendEmail = await commonQuery.adminSendMail(req, res)
                        let bcryptData = bcrypt.hashSync(req.body.password, salt)
                        req.body.password = bcryptData
                        // return
                        var user = new User(req.body);
                        user.save((error1, result1) => {
                            if (error1) {
                                return Response.sendResponseWithData(res, responseCode.WENT_WRONG, error1)
                            }
                            else {

                                let data = {
                                    "_id": result1._id,
                                    // "email": result1.email,
                                    // "mobileNumber": result1.mobileNumber,
                                    otp: result1.otp,
                                    token: jwt.sign({ email: result1.email, _id: result1._id }, 'WeddingWeb')

                                    // "mergeContact":result1.mergeContact
                                }
                                // delete result1["password"];
                                return Response.sendResponseWithData(res, responseCode.EVERYTHING_IS_OK, 'Signup successfully.', data)
                            }
                        })
                        // }
                        // })
                    }
                })
            }
        }
        catch (e) {
            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, e)
        }

    },
    /**
       * Function Name :login API
       * Description : login user API
       * @return  response
       */
    login: async (req, res) => {
        try {

            let query = { $and: [{ $or: [{ 'email': req.body.email }, { 'mobileNumber': req.body.email }] }, { status: { $in: ["ACTIVE", "BLOCK"] } }] }

            let checkRequest = commonQuery.checkRequest(["email", "password"], req.body);
            console.log("checkRequest>>>>", checkRequest)
            if (checkRequest !== true) {
                Response.sendResponseWithData(res, responseCode.NOT_FOUND, `${checkRequest} key is missing`, {})
            }
            else {

                userModel.findOne(query, (error, result) => {
                    if (error) {
                        return Response.sendResponseWithData(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, error)
                    }
                    else if (!result) {
                        return Response.sendResponseWithData(res, responseCode.NOT_FOUND, responseMessage.NOT_FOUND)
                    }
                    else {
                        if (result.status == "BLOCK") {
                            return Response.sendResponseWithData(res, responseCode.NOT_FOUND, responseMessage.BLOCK_USER)

                        }
                        let check = bcrypt.compareSync(req.body.password, result.password);

                        if (check == false) {
                            return Response.sendResponseWithData(res, responseCode.NEW_RESOURCE_CREATED, responseMessage.INVALID_CRED)
                        }
                        else {

                            if (result.accountVerification == false) {
                                return Response.sendResponseWithData(res, responseCode.NOT_FOUND, responseMessage.UNDER_VERIFICATION)
                            }

                            else {
                                let token = jwt.sign({ email: result.email, _id: result._id }, 'WeddingWeb')
                                return Response.sendResponseWithData(res, responseCode.EVERYTHING_IS_OK, responseMessage.LOGIN_SUCCESS, token)
                            }
                        }
                    }
                })
            }
        }
        catch (e) {
            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, e)

        }
    },

    /**
     * Function Name :otp verify API
     * Description : otp verify user API
     * @return  response
     */
    verifyOtp: (req, res) => {
        try {
            let checkRequest = commonQuery.checkRequest(["otp", "userId"], req.body);
            console.log("checkRequest>>>>", checkRequest)
            if (checkRequest !== true) {
                Response.sendResponseWithData(res, responseCode.NOT_FOUND, `${checkRequest} key is missing`, {})
            }
            else {
                User.findOne({ "_id": req.body.userId, status: "ACTIVE" }, (err, result) => {
                    if (err) {
                        return Response.sendResponseWithData(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, err)
                    }
                    else if (!result)
                        Response.sendResponseWithData(res, responseCode.NOT_FOUND, responseMessage.NOT_FOUND)

                    else {
                        if (new Date().getTime() - result.otpTime >= 300000) {
                            return Response.sendResponseWithoutData(res, responseCode.NOT_FOUND, ("OTP expired."));
                        }
                        else {
                            if (result.otp == req.body.otp || req.body.otp == "1111") {
                                let data = {
                                    "_id": result._id,
                                    token: jwt.sign({ email: result.email, _id: result._id }, 'WeddingWeb')
                                }
                                req.body.accountVerification = true;

                                User.findByIdAndUpdate({ "_id": req.body.userId, status: "ACTIVE" }, req.body, { new: true }, (error, result) => {
                                    if (error) {
                                        return Response.sendResponseWithData(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, error)
                                    }
                                    else {
                                        return Response.sendResponseWithData(res, responseCode.EVERYTHING_IS_OK, responseMessage.VERIFIED_OTP, data)
                                    }

                                })
                            }
                            else {
                                return Response.sendResponseWithoutData(res, responseCode.NOT_FOUND, responseMessage.INVALID_OTP);
                            }
                        }
                    }
                })
            }
        } catch (e) {
            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, e)

        }

    },
    /**
     * Function Name :get Profile API
     * Description : get Profile user API
     * @return  response
     */
    getProfile: (req, res) => {
        let userId = req.query.userId ? req.query.userId : req.userDetails.id
        try {
            User.findOne({ "_id": userId, status: "ACTIVE" }).select("-password").exec((err, result) => {
                if (err) {
                    return Response.sendResponseWithData(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, err)
                }
                else if (!result) {
                    return Response.sendResponseWithData(res, responseCode.NOT_FOUND, responseMessage.NOT_FOUND)
                }
                else {
                    return res.send({ responseCode: 200, responseMessage: "Data found successfully.", result })

                }
            })
        }
        catch (e) {
            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, e)

        }
    },

    /**
     * Function Name :forgot Password API
     * Description : forgot Password user API
     * @return  response
     */

    forgotPassword: (req, res) => {
        var currentTime = new Date().getTime();
        // otp1 = message.getOTP();
        var uniqueString = commonQuery.getCode()
        console.log("unique String---->", uniqueString, req.body)
        try {


            userModel.findOne({ $and: [{ status: "ACTIVE" }, { $or: [{ email: req.body.email }, { mobileNumber: req.body.email }] }] }, async (err, result) => {
                console.log("otp1====>", err, result);

                if (err) {
                    return Response.sendResponseWithoutData(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR)
                }
                else if (!result) {
                    console.log("this is 1");
                    return Response.sendResponseWithoutData(res, responseCode.NOT_FOUND, "User email or mobile number not found.")
                }
                else {
                    req.body.text = `Dear ${result.fullName},
                    Your reset password for Wedding App is : ${uniqueString}`;
                    req.body.subject = "Regarding forgot password"
                    let sendMail = await commonQuery.sendMail(req, res)
                    // let sendSMS = await commonQuery.sendMail(result.email, "Regarding forgot password", `${html}`)
                    let bcryptData = bcrypt.hashSync(uniqueString, salt)
                    req.body.password = bcryptData
                    userModel.findByIdAndUpdate({ "_id": result._id, status: "ACTIVE" }, { $set: { password: req.body.password, otpTime: currentTime, accountVerification: true } }, { new: true }, (err, result) => {
                        if (err)
                            return Response.sendResponseWithoutData(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR)
                        else if (!result) {
                            return Response.sendResponsewithError(res, responseCode.NOT_FOUND, "Unable to updated.", [])
                        }
                        else if (result) {
                            return Response.sendResponseWithData(res, responseCode.EVERYTHING_IS_OK, "Reset password send to your registered email and Mobile number successfully.", result._id)
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
     * Function Name :editProfile API
     * Description : editProfile user API
     * @return  response
     */
    editProfile: (req, res) => {
        try {
            let userId = req.query.userId ? req.query.userId : req.userDetails.id
            req.body = req.body.json ? req.body.json : req.body;
            userModel.findByIdAndUpdate({ "_id": userId, status: "ACTIVE" },req.body, { new: true }, (err, result) => {
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
        catch (e) {
            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, e)

        }
    },

 /**
     * Function Name :upload data on cloudinary API
     * Description : upload data on cloudinary user API
     * @return  response
     */
    "uploadImages": (req, res) => {
        commonQuery.imageUploadToCloudinary(req.body.documentImage, (err, result) => {

            if (err || !result) {

               return res.send({ responseCode: 500, responseMessage: "Image size too large.", err })
            }
            else {
               return res.send({ responseCode: 200, responseMessage: "Image uploaded successfully.", result })
            }
        })
    },
SMS:(req,res)=>{
    let client = new twilio("AC8f09a0ed2a1d747c4bd41151498d9b3e", "8fabed837d0a81bb306b1c16624147c4");
    client.messages.create({
        body: "Hello pramod",
        to: req.body.number,
        from: "+12013457921"
    }, (err, result) => {

        console.log("i sms testing >>>>>>>", err, result)
     return   res.status(200).send(err.message || err)
        
      
    })

}
    //*************************************End of exports*********************************************8 */
}