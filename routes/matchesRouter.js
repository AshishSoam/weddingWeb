const router = require("express").Router()
const userController = require('../webServices/controllers/userController')
const auth=require('../middlewares/auth_handler')
const matchingController=require('../webServices/controllers/myMachesController')

/**
 * @swagger
 * /api/v1/matches/matchingAlgorithm:
 *   post:
 *     tags:
 *       - My Matching Algorithm
 *     description: matchingAlgorithm API
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
router.post('/matchingAlgorithm',auth.verifyToken,matchingController.matchingAlgorithm)


module.exports=router