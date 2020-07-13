const router = require("express").Router()
const userController = require('../webServices/controllers/userController')
const auth=require('../middlewares/auth_handler')
/**
 * @swagger
 * /api/v1/user/signup:
 *   put:
 *     tags:
 *       - USER WEB APP
 *     description: Signup API
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
 *       - name: countryCode
 *         description: countryCode is required.
 *         in: formData
 *         required: true
 *       - name: mobileNumber
 *         description: mobileNumber is required.
 *         in: formData
 *         required: true
 *       - name: fullName
 *         description: fullName is required.
 *         in: formData
 *         required: true
 *       - name: createFor
 *         description: createFor is required.
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
router.put('/signup', userController.signUp)
/**
 * @swagger
 * /api/v1/user/login:
 *   post:
 *     tags:
 *       - USER WEB APP
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
router.post('/login',userController.login)
/**
 * @swagger
 * /api/v1/user/verifyOtp:
 *   post:
 *     tags:
 *       - USER WEB APP
 *     description: verifyOtp API
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: userId is required.
 *         in: formData
 *         required: true
 *       - name: otp
 *         description: otp is required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: OTP verified successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/verifyOtp',userController.verifyOtp);
/**
 * @swagger
 * /api/v1/user/getProfile:
 *   get:
 *     tags:
 *       - USER WEB APP
 *     description: getProfile API
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token is required.
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *         description: Data found successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.get('/getProfile',auth.verifyToken,userController.getProfile);
/**
 * @swagger
 * /api/v1/user/forgotPassword:
 *   post:
 *     tags:
 *       - USER WEB APP
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
router.post('/forgotPassword',userController.forgotPassword)
/**
 * @swagger
 * /api/v1/user/editProfile:
 *   post:
 *     tags:
 *       - USER WEB APP
 *     description: editProfile API
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token is required.
 *         in: header
 *         required: true
 *       - name: json
 *         description: json is required in body.
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: Profile updated successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/editProfile',auth.verifyToken,userController.editProfile);
/**
 * @swagger
 * /api/v1/user/uploadImages:
 *   post:
 *     tags:
 *       - USER WEB APP
 *     description: uploadImages API
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: documentImage
 *         description: documentImage is required in body as in form of base 64..
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Profile updated successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/uploadImages',userController.uploadImages);
/**
 * @swagger
 * /api/v1/user/resendOtp:
 *   post:
 *     tags:
 *       - USER WEB APP
 *     description: resendOtp API
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: userId is required .
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: resend Otp successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/resendOtp',userController.resendOtp);
/**
 * @swagger
 * /api/v1/user/changePassword:
 *   post:
 *     tags:
 *       - USER WEB APP
 *     description: changePassword API
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: userId is required .
 *         in: formData
 *         required: true
 *       - name: password
 *         description: password is required .
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Password change successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/changePassword',userController.changePassword);

module.exports = router