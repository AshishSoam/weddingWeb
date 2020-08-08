const router = require("express").Router()
const userController = require('../webServices/controllers/userController')
const auth=require('../middlewares/auth_handler')
const adminController=require('../webServices/controllers/adminController')

/**
 * @swagger
 * /api/v1/admin/login:
 *   post:
 *     tags:
 *       - ADMIN Managemment 
 *     description: login API
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: email is required.
 *         in: formData
 *         required: true
 *       - name: password
 *         description: password is required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Login successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/login',adminController.login)


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
/**
 * @swagger
 * /api/v1/admin/editAdminProfile:
 *   post:
 *     tags:
 *       -  ADMIN Managemment  
 *     description: editAdminProfile API
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token is required.
 *         in: formData
 *         required: true
 *       - name: fullName
 *         description: fullName is required.
 *         in: formData
 *         required: true
 *       - name: email
 *         description: email is required.
 *         in: formData
 *         required: true
 *       - name: countryCode
 *         description: countryCode is required.
 *         in: formData
 *         required: true
 *       - name: mobileNumber
 *         description: mobileNumber is required.
 *         in: formData
 *         required: true
 *       - name: oldPassword
 *         description: oldPassword is required.
 *         in: formData
 *         required: true
 *       - name: password
 *         description: password is required.
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
router.post('/editAdminProfile',auth.verifyToken,adminController.editAdminProfile)





module.exports=router