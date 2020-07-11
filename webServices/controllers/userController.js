const User = require('../../models/userModel')
const commonQuery = require('../../services/userServices')
const constant = require('../../helpers/constants');
const Response = require('../../helpers/commonResponseHaldler');
const responseMessage = require('../../helpers/httpResponseMessage');
const responseCode = require('../../helpers/httpResponseCode');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
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
                        var token = jwt.sign({ email: req.body.email, fullName: req.body.fullName }, 'Mobiloitte');
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
                        req.body.subject = "Your verification authentication otp"
                        let sendEmail = await commonQuery.adminSendMail(req, res)
                        req.body.password=bcrypt.hashSync(req.body.passwrd)

                        var user = new User(req.body);
                        user.save((error1, result1) => {
                            if (error1) {
                                console.log("hello1>>");
                                return Response.sendResponseWithData(res, responseCode.WENT_WRONG, error1)
                            }
                            else {
                                let data = {
                                    "_id": result1._id,
                                    "email": result1.email,
                                    "mobileNumber": result1.mobileNumber,
                                    // "mergeContact":result1.mergeContact
                                }
                                // delete result1["password"];
                                return Response.sendResponseWithData(res, responseCode.EVERYTHING_IS_OK, 'Signup successfully', data)
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

}