
const mongoose = require('mongoose')
const schema = mongoose.Schema
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const mongoosePaginate = require('mongoose-paginate');

const userSchema = schema({
    //default key required
    // email: {
    //     type: String
    // },
    // mobileNumber: {
    //     type: String
    // },
    // password: {
    //     type: String
    // },
    ownerId: {
        type: schema.Types.ObjectId,
        ref: 'users'
    },
    packageEndDate: {
        type: String
    },
    packageExpired: {
        tye: Boolean,
        // default: true
    },
    documentVerification: {
        tye: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ["SUBMEMBER"],
        default: "SUBMEMBER"
    },
    profilePic: {
        type: String
    },
    createFor: {
        type: String
    },

    socialId: {
        type: String,
        default: Math.floor(10000000 + Math.random() * 90000000)
    },
    address: {
        type: String
    },

    status: {
        type: String,
        enum: ["ACTIVE", "BLOCK", "DELETE"],
        default: "ACTIVE"
    },
    // mergeContact: {
    //     type: String
    // },
    // countryCode: {
    //     type: String
    // },



    //step 1

    // creatorName: {
    //     type: String
    // },

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
        type: String
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

module.exports = mongoose.model("joinSubMembers", userSchema, "joinSubMembers")






