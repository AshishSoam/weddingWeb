const mongoose = require('mongoose')
const schema = mongoose.Schema
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const mongoosePaginate = require('mongoose-paginate');

const userSchema = schema({
    //default key required
    packageId: {
        type: schema.Types.ObjectId,
        ref: 'packages'
    },
    packageSuscription: {
        type: String,
        enum: ["Pending", "Approved", "Completed", "Cancelled", "Not Purchase"],
        default: "Not Purchase"
    },
    purchase_packageDetails: {
        type: Object,
        default:[]
    },
    packageEndDate: {
        type: String
    },
    packageStartDate: {
        type: String
    },
    packageExpired: {
        tye: Boolean,
        // default: true
    },
    transactionId:{
        type: schema.Types.ObjectId,
        ref: 'transaction'
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
        enum: ["GUEST", "VISITOR", "MEMBER", "ADMIN","PENDING_MEMBER"],
        default: "VISITOR"
    },
    profilePic: {
        type: String,
        default:"https://res.cloudinary.com/smsit/image/upload/v1597335652/fmcvdi2g6ogd5vwzvzfa.jpg"
    },
    fullName: {
        type: String
    },
    createFor: {
        type: String
    },
    otp: {
        type: String
    },
    otpTime: {
        type: Number
    },
    emailVerificationTime: {
        type: Number,
        default: Date.now()
    },
    socialId: {
        type: String,
        default: Math.floor(10000000 + Math.random() * 90000000)
    },
    address: {
        type: String
    },
    accountVerification: {
        type: Boolean,
        default: false
    },
    documentVerification: {
        tye: Boolean,
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
    // joinMember: [{
    //     type: String,
    //     ref: "joinSubMembers"
    // }],
    
    //default key
    forgotToken: {
        type: String,
        default: ''
    },
    //step 1

    creatorName: {
        type: String
    },

    userFullName: {
        type: String
    },

    //step 2
    userNickname: {
        type: String
    },
    userFirstName: {
        type: String
    },

    userFamilyName: {
        type: String
    },

    userMaritalstatus: {
        type: String
    },
    userNationality: {
        type: String
    },

    userSocialID: {
        type: String
    },
    userRegion: {
        type: String
    },
    userCountryCode: {
        type: String
    },
    userMobile: {
        type: String
    },
    userEmail: {
        type: String
    },
    userProfileType: {
        type: String
    },

    userPassword: {
        type: String
    },
    userOath: {
        type: String
    },
    userTermsConditions: {
        type: String
    },
    userDiscountCode: {
        type: String
    },
    userGender: {
        type: String
    },
    userGuardianFName: {
        type: String
    },
    userGuardianLName: {
        type: String
    },
    userGuardianRelation: {
        type: String
    },
    attachment1: {
        type: String
    },
    attachment2: {
        type: String
    },
    attachment3: {
        type: String
    },
    attachment4: {
        type: String
    },
    userPackageType: {
        type: String
    },
    //******************* STEP 3 /  4 

    userAge: {
        type: String
    },

    partnerAge: {
        type: String
    },
    userMathab: {
        type: String
    },
    partnerMathab: {
        type: String
    },
    userReligion: {
        type: String
    },
    partnerReligion: {
        type: String
    },
    userLanguage: {
        type: String
    },
    partnerLanguage: {
        type: String
    },
    userTribe: {
        type: String
    },
    partnerTribe: {
        type: String
    },
    userTribeName: {
        type: String
    },
    partnerTribeName: {
        type: String
    },
    userCountry: {
        type: String
    },
    partnerCountry: {
        type: String
    },
    userCity: {
        type: String
    },
    partnerCity: {
        type: String
    },

    userMaritalstatus: {
        type: String
    },
    partnerMaritalStatus: {
        type: String
    },
    userEducation: {
        type: String
    },
    partnerEducation: {
        type: String
    },
    userEmployedIn: {
        type: String
    },
    partnerEmployedIn: {
        type: String
    },
    userOccupation: {
        type: String
    },
    partnerOccupation: {
        type: String
    },
    userBodyType: {
        type: String
    },
    partnerBodyType: {
        type: String
    },
    userComplexion: {
        type: String
    },
    partnerComplexion: {
        type: String
    },
    userPhysicalStatus: {
        type: String
    },
    partnerPhysicalStatus: {
        type: String
    },
    userHeight: {
        type: String
    },
    partnerHeight: {
        type: String
    },
    userWeight: {
        type: String
    },
    partnerWeight: {
        type: String
    },
    userCulture: {
        type: String
    },
    userCulture: {
        type: String
    },
    userFamilyGatherings: {
        type: String
    },
    partnerFamilyGatherings: {
        type: String
    },
    userHijab: {
        type: String
    },
    partnerHijab: {
        type: String
    },
    userAbaya: {
        type: String
    },
    partnerAbaya: {
        type: String
    },
    userHairType: {
        type: String
    },
    partnerHairType: {
        type: String
    },
    userHairColor: {
        type: String
    },
    partnerHairColor: {
        type: String
    },
    userSmokingHabits: {
        type: String
    },
    partnerSmokingHabits: {
        type: String
    },
    userHubblyBubbly: {
        type: String
    },
    partnerHubblyBubbly: {
        type: String
    },
    userEatingHabits: {
        type: String
    },
    partnerEatingHabits: {
        type: String
    },
    userProfilePhoto: {
        type: String,
        default:"https://res.cloudinary.com/smsit/image/upload/v1597335652/fmcvdi2g6ogd5vwzvzfa.jpg"
    },
    partnerProfilePhoto: {
        type: String
    },
    userIncome: {
        type: String
    },
    partnerIncome: {
        type: String
    },
    partnerCulture: {
        type: String
    },
    userFamilyStatus: {
        type: String
    },
    partnerFamilyStatus: {
        type: String
    },
    userLifestyle: {
        type: String
    },
    partnerLifestyle: {
        type: String
    },
    userDrinkingHabits: {
        type: String
    },
    partnerDrinkingHabits: {
        type: String
    },
    userMatchingPictures: {
        type: String
    },
    partnerMatchingPictures: {
        type: String
    },
    userBio: {
        type: String
    },
    PartnerBio: {
        type: String
    },
    familyBio: {
        type: String
    },
    // ******** default filter keys*************

    age_Filter: {
        type: Boolean,
        default: false
    },
    maritialStatusFilter: {
        type: Boolean,
        default: false
    },
    countryFilter: {
        type: Boolean,
        default: false
    },
    religionFilter: {
        type: Boolean,
        default: false
    },
    tongueFilter: {
        type: Boolean,
        default: false
    },
    incomeFilter: {
        type: Boolean,
        default: false
    }



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
            "creatorName": "",
            country: "INDIA",
            profilePic: "https://res.cloudinary.com/smsit/image/upload/v1597335652/fmcvdi2g6ogd5vwzvzfa.jpg",
            verifyOtp: true,
            countryCode: "+91",
            address: "Okhla phase 1 ,govindpuri, Delhi",
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