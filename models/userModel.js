const mongoose = require('mongoose')
const schema = mongoose.Schema
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const mongoosePaginate = require('mongoose-paginate');

const userSchema = schema({
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
    createFor: {
        type: String
    },//step 1
    otp: {
        type: String
    },
    otpTime: {
        type: Number
    },
    // emailVerified: {
    //     type: Boolean,
    //     default:false
    // },
    accountVerification: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ["ACTIVE", "BLOCK", "DELETE"],
        default: "ACTIVE"
    },
    mergeContact:{
        type: String
    },
    countryCode:{
        type: String
    },
    familyType: {
        type: String
    },
    fatherOccupation: {
        type: String
    },
    motherOccupation: {
        type: String
    },
    brother: {
        type: String
    },
    sister: {
        type: String
    },
    family_living_in: {
        type: String
    },
    nativeCity: {
        type: String
    },
    familyDes_city_living_in: {
        type: String
    },
    familyDes_pincode: {
        type: String
    },
    contactNumber: {
        type: String
    },
    cast: {
        type: String
    },
    country_living_in: {
        type: String
    },
    dropdown_city_living_in: {
        type: String
    },
    socialStatus: {
        type: String
    },
    familyDes_occupation: {
        type: String
    },
    education: {
        type: String
    },
    bodyType: {
        type: String
    },
    family_Des_heigth: {
        type: String
    },
    skinTone: {
        type: String
    },

    ladyhairlength: {
        type: String
    },
    man_hairStyle: {
        type: String
    },
    man_hairColor: {
        type: String
    },
    religion: {
        type: String
    },
    culture: {
        type: String
    },
    hijab: {
        type: String
    },
    smoking: {
        type: String
    },
    health: {
        type: String
    },
    contactAddress: {
        type: String
    },
    workLetter: {
        type: String
    },
    family_bio: {
        type: String
    },

    //step2


    nickName: {
        type: String
    },
    fullName: {
        type: String
    },
    dob: {
        type: String
    },
    MaritalStatus: {
        type: String
    },
    heigth: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city_living_in: {
        type: String
    },
    pincode: {
        type: String
    },
    highest_degree: {
        type: String
    },
    employed_in: {
        type: String
    },
    occupation: {
        type: String
    },
    annualIncome: {
        type: String
    },
    emailId: {
        type: String
    },
    self_bio: {
        type: String
    },
    Desired_Partner_bio: {
        type: String
    },
    age_Filter: {
        type: Boolean,
        default: false
    },
    maritial_Status_Filter: {
        type: Boolean,
        default: false
    },
    country_Filter: {
        type: Boolean,
        default: false
    },
    religion_Filter: {
        type: Boolean,
        default: false
    },
    mother_Tongue_Filter: {
        type: Boolean,
        default: false
    },
    income_Filter: {
        type: Boolean,
        default: false
    },
    joinMember: [{
        type: String,
        ref: "joinSubMembers"
    }],
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
            country: "INDIA",
            profilePic: "https://res.cloudinary.com/dkoznoze6/image/upload/v1563943105/n7zdoyvpxxqhexqybvkx.jpg",
            verifyOtp: true,
            countryCode: "+91",
            mobileNumber: "8447510661",
            mergeContact:"+918447510661",
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


