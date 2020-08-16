const router = require("express").Router()
// const userController = require('../webServices/controllers/paymentController')
const auth = require('../middlewares/auth_handler')
const paymentController = require("../webServices/controllers/paymentController")
/**
 * @swagger
 * /api/v1/payment/payment:
 *   post:
 *     tags:
 *       - Payment
 *     description: API for purchase payment
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token is required.
 *         in: header
 *         required: true
 *       - name: userId
 *         description: userId is required.
 *         in: formData
 *         required: true
 *       - name: packageId
 *         description: packageId is required.
 *         in: formData
 *         required: true
 *       - name: packagePrice
 *         description: packagePrice is required.
 *         in: formData
 *         required: true
 *       - name: packageTime
 *         description: packageTime is required (eg:- 4 months).
 *         in: formData
 *         required: true
 *       - name: cardNumber
 *         description: cardNumber  is required.
 *         in: formData
 *         required: true
 *       - name: cvv
 *         description: cvv  is required.
 *         in: formData
 *         required: true
 *       - name: expiryDate
 *         description: expiryDate  is required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Payment done successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/payment',auth.verifyToken,paymentController.payment)
/**
 * @swagger
 * /api/v1/payment/paymentList:
 *   post:
 *     tags:
 *       - Payment
 *     description: list API of  transaction payment
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: pageNumber
 *         description: pageNumber is required.
 *         in: formData
 *         required: false
 *       - name: limit
 *         description: limit is required.
 *         in: formData
 *         required: false
 *     responses:
 *       200:
 *         description: Data found successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/paymentList',paymentController.paymentList)
/**
 * @swagger
 * /api/v1/payment/updatePayment:
 *   post:
 *     tags:
 *       - Payment
 *     description: Delete payment record
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: transactionId
 *         description: transactionId is required.
 *         in: formData
 *         required: true
 *       - name: status
 *         description: status is required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Data update successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/updatePayment',paymentController.updatePayment)
/**
 * @swagger
 * /api/v1/payment/updateSubscriptionPlan:
 *   post:
 *     tags:
 *       - Payment
 *     description: Approved package subscription plan.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: userId is required.
 *         in: formData
 *         required: true
 *       - name: packageEndDate
 *         description: packageEndDate is required (eg:-Date should be in ISO String format).
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Data update successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/updateSubscriptionPlan',paymentController.updateSubscriptionPlan)
module.exports=router