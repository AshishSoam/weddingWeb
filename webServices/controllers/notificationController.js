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
        * Function Name :All notification list API
        * Description :All notification list API
        * @return  response
        */
    'notificationList': async (req, res) => {
        try {
            let query = { status: 'ACTIVE', adminInvolved: true };
            let option = {
                page: req.body.pageNumber ? Number(req.body.pageNumber) : 1,
                limit: req.body.limit ? Number(req.body.limit) : 10,
                populate: [{ path: "notifyFrom" }, { path: "packageId" }, { path: 'notifyTo' }, { path: 'transactionId' }],
                sort: { createdAt: -1 },
            }
            if (req.body.userd) {
                query.notifyFrom = req.body.userd
            }


            notificationModel.paginate(query, option, (err, result) => {
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
         * Function Name :change notification API
         * Description :change notification API
         * @return  response
         */


    'updateNotification': (req, res) => {
        try {

            notificationModel.findByIdAndUpdate(req.body.notificationId, req.body, { new: true }, (err, result) => {
                if (err) {
                    return res.send({ responseCode: 500, responseMessage: "Internal server error.", err })
                }
                else if (!result) {
                    return res.send({ responseCode: 404, responseMessage: "Data not found.", result: [] })

                }

                else {
                    return res.send({ responseCode: 200, responseMessage: `Notification record delete successfully.`, result })
                }

            })
        }
        catch (e) {
            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, e)
        }
    }

    //******************* end of exports*************************** */  
}