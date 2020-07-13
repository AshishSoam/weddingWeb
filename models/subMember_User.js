
const mongoose = require('mongoose')
const schema = mongoose.Schema
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const mongoosePaginate = require('mongoose-paginate');

const userSchema = schema({
   parentId:{
    type: Schema.Types.ObjectId,
    ref:"user"
   },
   
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
    // joinMember: [{
    //     type: String,
    //     ref: "joinSubMembers"
    // }],
}, { timestamps: true })
userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("joinSubMembers", userSchema,"joinSubMembers")



