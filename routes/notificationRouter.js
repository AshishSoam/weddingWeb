const router = require("express").Router()
const auth = require('../middlewares/auth_handler')
const notificationController = require("../webServices/controllers/notificationController")
/**
 * @swagger
 * /api/v1/notification/notificationList:
 *   post:
 *     tags:
 *       - Notification
 *     description: list API of  notification notification
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
router.post('/notificationList',notificationController.notificationList)
/**
 * @swagger
 * /api/v1/notification/updateNotification:
 *   post:
 *     tags:
 *       - Notification
 *     description: Delete notification record
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
router.post('/updateNotification',notificationController.updateNotification)


module.exports=router