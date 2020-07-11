const router = require("express").Router()
const userController = require('../webServices/controllers/userController')

/**
 * @swagger
 * /api/v1/user/signup:
 *   put:
 *     tags:
 *       - user 
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
 *       - user 
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
 *       - user 
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
 *       - user 
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

module.exports = router