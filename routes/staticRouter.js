const router = require('express').Router();
const StaticController = require('../webServices/controllers/staticController');

/**
 * @swagger
 * /api/v1/static/getStaticContent:
 *   get:
 *     tags:
 *       - Static Content
 *     description: Get the data for static Pages
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Type
 *         description: Type is required.(ABOUT_US/PRIVACY/CONTACT_US/FAQ/TERMS)
 *         in: query
 *         required: false
 *     responses:
 *       200:
 *         description: Data found successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.get('/getStaticContent', StaticController.getStaticContent);
router.post('/updateStaticContent', StaticController.updateStaticContent);
router.post('/AddFaq', StaticController.AddFaq);
router.post('/viewFaq', StaticController.viewFaq);
router.post('/updateFaq', StaticController.updateFaq);
router.post('/deletedFaq', StaticController.deletedFaq);
router.post('/addContactUs', StaticController.addContactUs);


module.exports=router;
              