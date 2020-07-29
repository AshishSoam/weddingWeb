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
 *         description: Type is required.(ABOUT_US/PRIVACY/CONTACT_US/FAQ/TERMS/TERMS_OF_USE/OATH)
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
/**
 * @swagger
 * /api/v1/static/updateStaticContent:
 *   post:
 *     tags:
 *       - Static Content
 *     description: Updated data for static Pages
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: staticId
 *         description: staticId is required.
 *         in: formData
 *         required: true
 *       - name: description
 *         description: description is required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Data updated successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/updateStaticContent', StaticController.updateStaticContent);

router.post('/AddFaq', StaticController.AddFaq);
/**
 * @swagger
 * /api/v1/static/viewFaq:
 *   get:
 *     tags:
 *       - Static Content
 *     description: View Faq
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: faqId
 *         description: faqId is required.
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: Faq found successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.get('/viewFaq', StaticController.viewFaq);
/**
 * @swagger
 * /api/v1/static/updateFaq:
 *   post:
 *     tags:
 *       - Static Content
 *     description: View Faq
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: _id
 *         description: _id is required.
 *         in: formData
 *         required: true
 *       - name: question
 *         description: question is required.
 *         in: formData
 *         required: true
 *       - name: answer
 *         description: answer is required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Faq updated successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */

router.post('/updateFaq', StaticController.updateFaq);
router.post('/deletedFaq', StaticController.deletedFaq);
router.post('/addContactUs', StaticController.addContactUs);
/**
 * @swagger
 * /api/v1/static/allPackages:
 *   get:
 *     tags:
 *       - Package Management
 *     description: View Faq
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: packageId
 *         description: packageId is optional.
 *         in: query
 *         required: false
 *       - name: status
 *         description: status is optinal (eg:- ACTIVE/BLOCK).
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
router.get('/allPackages',StaticController.allPackages)
/**
 * @swagger
 * /api/v1/static/updatePackage:
 *   get:
 *     tags:
 *       - Package Management
 *     description: View Faq
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: packageId
 *         description: packageId is required.
 *         in: formData
 *         required: true
 *       - name: JSON
 *         description: status is required.
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: Data updated successfully.
 *       404:
 *         description: Data not found.
 *       500:
 *         description: Internal server error.
 */
router.post('/updatePackage',StaticController.updatePackage)

module.exports=router;
              