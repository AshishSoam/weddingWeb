const router = require("express").Router()
const userController = require('../webServices/controllers/userController')
const auth=require('../middlewares/auth_handler')
/**
 * @swagger
 * /api/v1/admin/getProfile:
 *   get:
 *     tags:
 *       - ADMIN Managemment 
 *     description: getProfile API
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: userId is required.
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: Data found successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.get('/getProfile',userController.getProfile);

module.exports=router