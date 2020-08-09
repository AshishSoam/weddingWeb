const mongoose = require('mongoose')
const schema = mongoose.Schema
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const mongoosePaginate = require('mongoose-paginate');

const userSchema = schema({
    packageId:{
        type: schema.Types.ObjectId,
        ref: 'packages'   
    },
    packageSuscription: {
        type: String,
        enum:["Pending","Approved","Completed","Cancelled","Not Purchase"],
default:"Not Purchase"
    },
    packageEndDate: {
        type: String
    },
    packageExpired: {
        tye: Boolean,
        // default: true
    },
    //default key required
    email: {
        type: String
    },
    mobileNumber: {
        type: String
    },
    password: {
        type: String
    },
    userType: {
        type: String,
        enum: ["GUEST", "VISITOR", "MEMBER", "ADMIN"],
        default: "VISITOR"
    },
    profilePic: {
        type: String
    },
    fullName: {
        type: String
    },
    // createFor: {
    //     type: String
    // },
    otp: {
        type: String
    },
    otpTime: {
        type: Number
    },
    emailVerificationTime: {
        type: Number,
        default:Date.now()
    },
  
    address: {
        type: String
    },
    accountVerification: {
        type: Boolean,
        default: false
    },

    mobileVerified: {
        type: Boolean,
        default: false
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ["ACTIVE", "BLOCK", "DELETE"],
        default: "ACTIVE"
    },
    mergeContact: {
        type: String
    },
    countryCode: {
        type: String
    },
    joinMember: [{
        type: String,
        ref: "joinSubMembers"
    }],

    forgotToken: {
        type: String,
        default: ''
    },
    //step 1

    creatorName: {
        type: String
    },

    

}, { timestamps: true })
userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("users", userSchema)

mongoose.model("users", userSchema).find({ userType: "ADMIN" }, (err, result) => {
    if (err) {
        console.log("DEFAULT ADMIN ERROR", err);
    } else if (result.length != 0) {
        console.log("Default Admin.");
    } else {
        let obj = {
            userType: "ADMIN",
            fullName: "Pramod",
            "creatorName":"",
            country: "INDIA",
            profilePic: "https://res.cloudinary.com/dkoznoze6/image/upload/v1563943105/n7zdoyvpxxqhexqybvkx.jpg",
            verifyOtp: true,
            countryCode: "+91",
            address:"Okhla phase 1 ,govindpuri, Delhi",
            mobileNumber: "8447510661",
            mergeContact: "+918447510661",
            accountVerification: true,
            email: "wowzn.net@gmail.com",
            password: bcrypt.hashSync("admin1234", salt),
        };
        mongoose.model("users", userSchema).create(obj, (err1, result1) => {
            if (err1) {
                console.log("DEFAULT ADMIN  creation ERROR", err1);
            } else {
                console.log("DEFAULT ADMIN Created", result1);
            }
        });
    }
});


