
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

const transactionSchema = mongoose.Schema({
    packageId: {
        type: Schema.Types.ObjectId,
        ref: 'packages'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    // businessManId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // },

    period: {
        type: String,
        // enum: ["DAILY", "MONTHLY", "WEEKLY"]
    },

    transactionStatus: {
        type: String,
        default: "SUCCESS"
    },
    transactionBarId: {
        type: String,
        default: "T_" + Math.floor(100000000000 + Math.random() * 900000000000)
    },
    userStripeAccount: {
        type: String
    },
    // feedbackDescription: {
    //     type:String
    // },

    transactionDate: {
        type: String,
        default: new Date().toISOString()
    },
    transactionTime: {
        type: String,
        default: new Date().toISOString()

    },

    chargeId: {
        type: String,
        default: "Charge_" + Math.floor(100000 + Math.random() * 900000)
    },

    transactionTimeStamp: {
        type: String,
        default: Date.now()
    },

    packagePrice: {
        type: String,

    },

    paymentStatus: {
        type: String,
        default: "SUCCESS"

    },
    purchase_packageDetails: {
        type: Object
    },
    customerCount: {
        type: Number
    },
    status:{
        type:String,
        default:"ACTIVE",
        enum:['ACTIVE','DELETE']
    },
},
    {
        timestamps: true
    });

transactionSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('transaction', transactionSchema, "transaction");
