const paymentModel = require('../../models/transactionModel')
const notificationModel = require('../../models/notificationModel')
const packageModel = require('../../models/packageModel')
const userModel = require('../../models/userModel')
const commonQuery = require('../../services/userServices')
const constant = require('../../helpers/constants');
const Response = require('../../helpers/commonResponseHaldler');
const responseMessage = require('../../helpers/httpResponseMessage');
const responseCode = require('../../helpers/httpResponseCode');
const { result } = require('lodash')

module.exports = {
    /**
         * Function Name :purchase package API
         * Description : purchase package API
         * @return  response
         */
    'payment': async (req, res) => {
        try {
            let { partnerTribe,
                partnerTribeName,
                partnerAge,
                partnerCountry,
                partnerCity,
                partnerMaritalStatus,
                partnerOccupation,
                partnerEducation,
                partnerBodyType,
                partnerHeight,
                partnerComplexion,
                partnerWeight,
                partnerHairType,
                partnerHairColor,
                partnerReligion,
                partnerCulture,
                partnerHijab,
                partnerSmokingHabits } = req.userDetails
            let checkRequest = commonQuery.checkRequest(["userId", "packageId", "packagePrice", "packageTime", "cardNumber", "cvv", "expiryDate"], req.body);
            console.log("checkRequest>>>>", checkRequest)
            if (checkRequest !== true) {
                return Response.sendResponseWithData(res, responseCode.NOT_FOUND, `${checkRequest} key is missing`, {})
            }
            else {

                if(req.userDetails.emailVerified==false){
                    return Response.sendResponseWithData(res, responseCode.NOT_FOUND, `You have not verify your email.Please verify you email.`, {})
                }
                let checkKeyAvailable = commonQuery.checkRequest(["partnerTribe", "partnerTribeName", "partnerAge", "partnerCountry", "partnerCity", "partnerMaritalStatus", "partnerOccupation", "partnerEducation", "partnerBodyType", "partnerHeight", "partnerComplexion", "partnerWeight", "partnerHairType", "partnerHairColor", "partnerReligion", "partnerCulture", "partnerHijab", "partnerSmokingHabits"], req.userDetails);
                console.log("checkKeyAvailable------>", checkKeyAvailable)
                if (checkKeyAvailable !== true) {
                    return Response.sendResponseWithData(res, responseCode.NOT_FOUND, `${checkKeyAvailable} key is missing on your desire partner profile.Please update your desire partner profile first.`, {})
                }
                else {
                    req.body.purchase_packageDetails = await packageModel.find({ "_id": req.body.packageId })
                    console.log("pramod===>", req.body)

                    const { packageId, userId, packagePrice, packageTime, purchase_packageDetails } = req.body
                    let trandactionObj = {
                        packageId, userId, packagePrice, purchase_packageDetails,transactionBarId: "T_" + Math.floor(100000000000 + Math.random() * 900000000000),chargeId:"Charge_" + Math.floor(100000 + Math.random() * 900000),transactionDate:new Date().toISOString()
                    }
                    new paymentModel(trandactionObj).save((err, result) => {
                        if (err) {
                            return Response.sendResponseWithData(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, err)
                        }
                        else {
                            let userObj = {
                                packageId,
                                packageSuscription: "Pending",
                                packageStartDate: new Date().toISOString(),
                                packageExpired: false,
                                transactionId: result._id,
                                userType: req.body.userType || "PENDING_MEMBER",
                                purchase_packageDetails: purchase_packageDetails
                            }
                            userModel.findByIdAndUpdate(userId, userObj, { new: true }, (userErr, userResult) => {
                                if (userErr) {
                                    return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, error)
                                }
                                else if (!userResult) {
                                    return Response.sendResponseWithData(res, responseCode.NOT_FOUND, responseMessage.NOT_FOUND, [])
                                }
                                else {
                                    let notifyObj = {
                                        packageId,
                                        adminInvolved: true,
                                        notifyFrom: userId,
                                        transactionId: result._id,
                                        type: "packageSubscription",
                                        title: "`Package payment confirmation.",
                                        content: `${userResult.creatorName} have successfully purchases ${packageTime} package with transaction id :- ${result.transactionBarId}.`,
                                    }
                                    new notificationModel(notifyObj).save((notifyErr, notifyResult) => {
                                        if (notifyErr) {
                                            return Response.sendResponseWithData(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, error)
                                        }
                                        else {
                                            return Response.sendResponseWithData(res, responseCode.EVERYTHING_IS_OK, "Payment done successfully.", userResult)
                                        }
                                    })
                                }
                            })
                        }
                    })
                }



            }
        } catch (error) {
            console.log("err---->",error)
            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, error || error.TypeError)

        }
    },
    /**
         * Function Name :All payment list API
         * Description :All payment list API
         * @return  response
         */
    'paymentList': async (req, res) => {
        try {
            let query = { status: 'ACTIVE' };
            let option = {
                page: req.body.pageNumber ? Number(req.body.pageNumber) : 1,
                limit: req.body.limit ? Number(req.body.limit) : 10,
                populate: [{ path: "userId" }, { path: "packageId" }],
                sort: { createdAt: -1 },
            }
            if (req.body.userd) {
                query.userId = req.body.userd
            }

            paymentModel.paginate(query, option, (err, result) => {
                console.log("pramod-->", err, result)
                if (err) {
                    return Response.sendResponseWithData(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, err)
                }
                else if (result.docs.length == 0) {
                    return Response.sendResponseWithData(res, responseCode.NOT_FOUND, responseMessage.NOT_FOUND, [])
                }
                else {
                    let { total, limit, page, pages } = result
                    result = result.docs
                    let paginationData = { total, limit, page, pages }

                    return Response.sendResponseWithPagination(res, responseCode.EVERYTHING_IS_OK, "Data found successfully.", result, paginationData)
                }
            })
        }
        catch (error) {
            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, error)

        }
    },

    /**
         * Function Name :change Payment API
         * Description :change Payment API
         * @return  response
         */


    'updatePayment': (req, res) => {
        try {

            paymentModel.findByIdAndUpdate(req.body.transactionId, req.body, { new: true }, (err, result) => {
                if (err) {
                    return res.send({ responseCode: 500, responseMessage: "Internal server error.", err })
                }
                else if (!result) {
                    return res.send({ responseCode: 404, responseMessage: "Data not found.", result: [] })

                }
                else {
                    return res.send({ responseCode: 200, responseMessage: `Transaction record delete successfully.`, result })
                }

            })
        }
        catch (e) {
            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, e)
        }
    },


    /**
         * Function Name :updateSubscriptionPlan  API
         * Description :updateSubscriptionPlan  API
         * @return  response
         */
    updateSubscriptionPlan: (req, res) => {
        try {
            req.body.documentVerification = true;
            req.body.userType = "MEMBER";
            req.body.packageSuscription = "Approved";

            userModel.findByIdAndUpdate(req.body.userId, req.body, { new: true }, (err, result) => {
                if (err) {
                    return res.send({ responseCode: 500, responseMessage: "Internal server error.", err })
                }
                else if (!result) {
                    return res.send({ responseCode: 404, responseMessage: "Data not found.", result: [] })

                }
                else {
                    return res.send({ responseCode: 200, responseMessage: `Subscription plan updated successfully.`, result })
                }

            })
        } catch (error) {
            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, error)

        }
    }

    //******************* end of exports*************************** */  
}