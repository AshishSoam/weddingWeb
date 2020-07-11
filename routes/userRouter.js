const router = require("express").Router()
const userController = require('../webServices/controllers/userController')

"email", "countryCode", "password", "createFor", "fullName", "mobileNumber"
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
module.exports = router