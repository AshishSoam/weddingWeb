const router = require("express").Router()
const userController = require('../webServices/controllers/userController')
const auth=require('../middlewares/auth_handler')
const adminController=require('../webServices/adminController')
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
/**
 * @swagger
 * /api/v1/admin/userList:
 *   post:
 *     tags:
 *       - ADMIN Managemment 
 *     description: userList API
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: userId is optinal.
 *         in: formData
 *         required: false
 *       - name: userType
 *         description: userType is optional.
 *         in: formData
 *         required: false
 *       - name: search
 *         description: search is optional.
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
router.post('/userList',adminController.userList);
/**
 * @swagger
 * /api/v1/admin/forgotPassword:
 *   post:
 *     tags:
 *       -  ADMIN Managemment  
 *     description: forgotPassword API
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: email is required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Data found successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/forgotPassword',adminController.forgotPassword)
/**
 * @swagger
 * /api/v1/admin/actionPerform:
 *   post:
 *     tags:
 *       -  ADMIN Managemment  
 *     description: actionPerform API
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: userId is required.
 *         in: formData
 *         required: true
 *       - name: status
 *         description: status is required (ACTIVE/BLOCK/DELETE).
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Data found successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/actionPerform',adminController.actionPerform)
module.exports=router