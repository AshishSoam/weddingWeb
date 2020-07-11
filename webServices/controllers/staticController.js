const staticModel = require("../../models/staticModel");
// const contactUsSchema = require("../../models/contactUsModel.js");
// const message = require('../../commonFile/commonFunction');
// const User = require('../../models/userModel');

//======================================Get Static Content===============================//

const getStaticContent = (req, res) => {
    console.log('Request for static content is ', req.query);
    let query = {}
    if (req.query.staticId) {
        query._id = req.query.staticId
    }
    if (req.query.Type) {
        query.Type = { $in: req.query.Type }
    }
    if (req.query.tabMode) {
        query.tabMode = req.query.tabMode
    }
    if (req.query.cityName) {
        query.cityName = req.query.cityName
    }


    staticModel.find(query).exec((err, succ) => {
        if (err)
            return res.status(500).send({ responseCode: 500, responseMessage: "Internal server error.", err })
        else if (!succ)
            return res.status(404).send({ responseCode: 404, responseMessage: "Data not found." })
        else
            return res.status(200).send({ responseCode: 200, responseMessage: "Data found successfully.", result: succ })

    })

}

const updateStaticContent = (req, res) => {

    let query = {}
    if (req.body.staticId) {
        query._id = req.body.staticId
    }
    if (req.body.Type) {
        query.Type = { $in: req.body.Type }
    }
    if (req.body.tabMode) {
        query.tabMode = req.body.tabMode
    }
    staticModel.update(query, req.body, { multi: true }, (err, result) => {
        if (err)
            return res.send({ responseCode: 500, responseMessage: "Internal server error.", err })
        else if (!result)
            return res.send({ responseCode: 404, responseMessage: "Data not found" })
        else
            return res.send({ responseCode: 200, responseMessage: "Static Data updated successfully", result: result })

    })


}




//================================================================ Add FAQ ==================================================
const AddFaq = (req, res) => {
    let obj = {};
    staticModel.findOne({
        'Type': 'FAQ'
    }).exec((err, succ) => {
        if (err)
            return res.send({ responseCode: 500, responseMessage: "Internal server error.", err })
        else if (!succ) {
            return res.send({ responseCode: 404, responseMessage: "Data not found" })
        } else {

            staticModel.findOneAndUpdate({
                "_id": req.body._id
            }, {
                $push: {
                    "FAQ": {
                        "question": req.body.question,
                        "answer": req.body.answer,
                        "category": req.body.category
                    }
                }
            }, {
                new: true
            },
                (error, result) => {
                    if (error)
                        return res.send({ responseCode: 500, responseMessage: "Internal server error.", error })
                    else if (!result)
                        return res.send({ responseCode: 404, responseMessage: "Data not found." })
                    else
                        return res.send({ responseCode: 200, responseMessage: "Faq content added Successfully.", result });
                })
        }
    })
}

// //================================================================ view individual FAQ ==================================================

const viewFaq = (req, res) => {
    staticModel.findOne({
        "FAQ._id": req.body._id,
        'status': "ACTIVE",
        "Type": "FAQ"
    }, {
        "FAQ.$._id": 1
    },
        (err1, success) => {
            if (err1)
                return res.send({ responseCode: 500, responseMessage: "Internal server error.", err1 })
            else if (!success)
                return res.send({ responseCode: 404, responseMessage: "Data not found" })
            else
                return res.send({ responseCode: 200, responseMessage: "Data found successfully", result })
        })
}










//================================================================ Update FAQ ==================================================
const updateFaq = (req, res) => {
    staticModel.findOne({
        'Type': 'FAQ'
    }).exec((err, succ) => {
        if (err)
            return global_fn.responseHandler(res, 400, err);
        else {
            console.log("QQQQQQQQQ>>>>>>>>>>", succ);
            staticModel.findOneAndUpdate({
                "FAQ._id": req.body._id
            }, {
                $set: {
                    "FAQ.$": {
                        "_id": req.body._id,
                        "question": req.body.question,
                        "answer": req.body.answer,
                        "category": req.body.category
                    }
                }
            }, {
                new: true
            },
                (error, result) => {
                    console.log("@@@@@@@@@", error, result)
                    if (error)
                        return res.send({ responseCode: 500, responseMessage: "Internal server error.", error })
                    else if (!result)
                        return res.send({ responseCode: 404, responseMessage: "Data not found" })
                    else
                        return res.send({ responseCode: 200, responseMessage: "Faq content updated successfully", result });

                })
        }
    })

}

//================================================================ delete individual FAQ ==================================================
const deletedFaq = (req, res) => {
    staticModel.findOneAndUpdate({
        "FAQ._id": req.body._id,
        status: "ACTIVE",
        "Type": "FAQ"
    }, {
        $pull: {
            FAQ: {
                _id: req.body._id
            }
        }
    }, {
        new: true
    }, (err1, success) => {
        if (err1)
            return res.send({ responseCode: 500, responseMessage: "Internal server error.", err1 })
        else if (!success)
            return res.send({ responseCode: 404, responseMessage: "Data not found" })
        else
            return res.send({ responseCode: 200, responseMessage: "Faq Content deleted successfully" });

    })
}


//......................................................................addContactUs................................................................./

const addContactUs = (req, res) => {
    if (!req.body.subject && !req.body.email && !req.body.message) {
        return res.send({
            responseCode: 500,
            responseMessage: "Parameter missing. "
        });
    }
    else {

        User.findOne({ "userType": "ADMIN", status: "ACTIVE" }, (err1, data) => {
            if (err1) {
                return res.send({
                    responseCode: 500,
                    responseMessage: "Error in uploading image.", err
                });
            }
            else {
                req.body.adminId = data._id
                if (req.body.image) {
                    message.imageUploadToCloudinary(req.body.image, (err, success) => {
                        if (err || !success) {
                            return res.send({
                                responseCode: 500,
                                responseMessage: "Error in uploading image.", err
                            });
                        }
                        else {
                            req.body.image = success.url;
                            contactUsSchema.create(req.body, (err1, success1) => {
                                if (err1 || !success1) {
                                    return res.send({
                                        responseCode: 500,
                                        responseMessage: "Error in uploading image.", err1
                                    });
                                }
                                else {
                                    return res.send({
                                        responseCode: 200,
                                        responseMessage: " Thanks for contacting us.We will get back to you soon!"
                                    });

                                }

                            })
                        }

                    })
                }
                else {
                    contactUsSchema.create(req.body, (err1, success1) => {
                        console.log("884>>>>>>>>>>>>", err1, success1)
                        if (err1 || !success1) {
                            return res.send({
                                responseCode: 500,
                                responseMessage: "Internal server error"
                            });
                        }
                        else {
                            return res.send({
                                responseCode: 200,
                                responseMessage: "Contact us added successfully."
                            });

                        }

                    })

                }
            }
        })

    }
}


module.exports = {
    getStaticContent,
    updateStaticContent,
    AddFaq,
    viewFaq,
    updateFaq,
    deletedFaq,
    addContactUs

}

