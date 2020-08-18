const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const notificationSchema = new Schema({
    // customerId: {
    //     cid:{type:Schema.Types.ObjectId,ref:'Users'},
    //     image:{type:String},
    //     name:{type:String},
    //     isRead:{type:Boolean, default:false}
    // },
    // bussinessId:{
    //     bid:{type:Schema.Types.ObjectId,ref:'Users'},
    //     isRead:{type:Boolean, default:false}
    // },
    
    noti_type:{
        type:String,
        enum:['BUSINESS','CUSTOMER']
    },
    content:{
        type: String
    },
    title:{
        type:String
    },
    type:{
        type:String,
        enum:['chat', 'packageSubscription', 'feedback',""]
    },
    packageId:{type:Schema.Types.ObjectId,ref:'packages'},
    notifyFrom:{type:Schema.Types.ObjectId,ref:'users'},
    notifyTo:{type:Schema.Types.ObjectId,ref:'users'},
    transactionId:{type:Schema.Types.ObjectId,ref:'transaction'},

    eventStatus:{
        type:String,
        enum:['PENDING', 'CANCELLED', 'CONFIRMED', 'COMPLETED']
    },
    status:{
        type:String,
        default:"ACTIVE",
        enum:['ACTIVE','DELETE']
    },
    adminInvolved:{type:Boolean, default:false},
    isRead:{type:Boolean, default:false}

},{
    timestamps:true
});

notificationSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("notification",notificationSchema,"notification");