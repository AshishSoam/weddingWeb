
const userSchema = require('../models/userModel')
const constant = require('../helpers/constants');
const Response = require('../helpers/commonResponseHaldler');
const responseMessage = require('../helpers/httpResponseMessage');
const responseCode = require('../helpers/httpResponseCode');
const jwt = require('jsonwebtoken');

module.exports = {
    verifyToken: (req, res, next) => {
        console.log("i am here token 11", req.headers.token)
        if (req.headers.token) {
            jwt.verify(req.headers.token, "WeddingWeb", (err, result) => {
                if (err) {
                    return Response.sendResponsewithError(res, responseCode.UNAUTHORIZED, "Authentication failed.", err)
                }
                else {
                    userSchema.findOne({ _id: result._id }, (error, result) => {
                        if (error)
                            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.WENT_WRONG)
                        else if (!result) {
                            return Response.sendResponsewithError(res, responseCode.NOT_FOUND, "User not found.", error)
                        }
                        else {
                            if (result.status == "ACTIVE"){
                               req.userDetails=result
                                next();
                            }
                               
                            else if (result.status == "BLOCK") {
                                return Response.sendResponsewithError(res, responseCode.FORBIDDEN, responseMessage.BLOCK_USER)
                            }
                            else {
                                return Response.sendResponsewithError(res, responseCode.FORBIDDEN, responseMessage.DELETE_USER)
                            }
                        }
                    })
                }
            })
        } else {
            return Response.sendResponsewithError(res, 403, "No token provided.")
        }

    }
}