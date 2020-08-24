const userModel = require('../../models/userModel')
const userMember = require('../../models/subMember_User')
const commonQuery = require('../../services/userServices')
const constant = require('../../helpers/constants');
const Response = require('../../helpers/commonResponseHaldler');
const responseMessage = require('../../helpers/httpResponseMessage');
const responseCode = require('../../helpers/httpResponseCode');
const { accessSync } = require('fs');


module.exports = {
    /**
     * Function Name :My_matching profile algorithm API
     * Description : My_matching profile algorithm  API
     * @return  response
     */

    matchingAlgorithm: (req, res) => {
        try {
            let userDetails = req.userDetails
            let genderToBeSearch = (userDetails.userGender == 'Male') ? 'Female' : 'Male'
            // ,packageEndDate:{$gte:new Date().toISOString().split("T")[0]+'T00:00:00.000Z'},
            let query = { userGender: genderToBeSearch, status: "ACTIVE", accountVerification: true, mobileVerified: true, emailVerified: true, documentVerification: true, purchase_packageDetails: { $ne: [] }, packageSuscription: "Approved", _id: { $ne: userDetails._id } }
            let andOperation = new Array()
            // if(req.body.userTribe){
            //*partnerTribe
            // query.partnerTribe = (req.body.partnerTribe && req.body.partnerTribe.length > 0) ? { $in: req.body.partnerTribe } : userDetails.partnerTribe
            req.body.partnerTribe && req.body.partnerTribe.length > 0 ? andOperation.push({ partnerTribe: { $in: userDetails.userTribe } }, { userTribe: { $in: req.body.partnerTribe } }) : andOperation.push({ partnerTribe: userDetails.userTribe }, { userTribe: userDetails.partnerTribe })
            // }
            //*partnerTribeName
            // query.partnerTribeName = (req.body.partnerTribeName && req.body.partnerTribeName.length > 0) ? { $in: req.body.partnerTribeName } : userDetails.partnerTribeName

            req.body.partnerTribeName && req.body.partnerTribeName.length > 0 ? andOperation.push({ partnerTribeName: { $in: userDetails.userTribeName } }, { userTribeName: { $in: req.body.partnerTribeName } }) : andOperation.push({ partnerTribeName: userDetails.userTribeName }, { userTribeName: userDetails.partnerTribeName })

            //*age
            // query.partnerAge = (req.body.partnerAge && req.body.partnerAge.length > 0) ? { $in: req.body.partnerAge } : userDetails.partnerAge
            req.body.partnerAge && req.body.partnerAge.length > 0 ? andOperation.push({ partnerAge: { $in: userDetails.userAge } }, { userAge: { $in: req.body.partnerAge } }) : andOperation.push({ partnerAge: userDetails.userAge }, { userAge: userDetails.partnerAge })
            //*mathab
            req.body.partnerMathab && req.body.partnerMathab.length > 0 ? andOperation.push({ partnerMathab: { $in: userDetails.userMathab } }, { userMathab: { $in: req.body.partnerMathab } }) : andOperation.push({ partnerMathab: userDetails.userMathab }, { userMathab: userDetails.partnerMathab })
            //*religiosity
            if (req.body.partnerReligion && req.body.partnerReligion.length > 0) { andOperation.push({ partnerReligion: { $in: userDetails.userReligion } }, { userReligion: { $in: req.body.partnerReligion } }) }
            //*language
            req.body.partnerLanguage && req.body.partnerLanguage.length > 0 ? andOperation.push({ partnerLanguage: { $in: userDetails.userLanguage } }, { userLanguage: { $in: req.body.partnerLanguage } }) : andOperation.push({ partnerLanguage: userDetails.userLanguage }, { userLanguage: userDetails.partnerLanguage })
            //*partnerCountry
            // query.partnerCountry = (req.body.partnerCountry && req.body.partnerCountry.length > 0) ? { $in: req.body.partnerCountry } : userDetails.partnerCountry

            req.body.partnerCountry && req.body.partnerCountry.length > 0 ? andOperation.push({ partnerCountry: { $in: userDetails.userCountry } }, { userCountry: { $in: req.body.partnerCountry } }) : andOperation.push({ partnerCountry: userDetails.userCountry }, { userCountry: userDetails.partnerCountry })

            //*partnerCity
            // query.partnerCity = (req.body.partnerCity && req.body.partnerCity.length > 0) ? { $in: req.body.partnerCity } : userDetails.partnerCity
            req.body.partnerCity && req.body.partnerCity.length > 0 ? andOperation.push({ partnerCity: { $in: userDetails.userCity } }, { userCity: { $in: req.body.partnerCity } }) : andOperation.push({ partnerCity: userDetails.userCity }, { userCity: userDetails.partnerCity })
            //*partnerMaritalStatus
            // query.partnerMaritalStatus = (req.body.partnerMaritalStatus && req.body.partnerMaritalStatus.length > 0) ? { $in: req.body.partnerMaritalStatus } : userDetails.partnerMaritalStatus

            req.body.partnerMaritalStatus && req.body.partnerMaritalStatus.length > 0 ? andOperation.push({ partnerMaritalStatus: { $in: userDetails.userMaritalstatus } }, { userMaritalstatus: { $in: req.body.partnerMaritalStatus } }) : andOperation.push({ partnerMaritalStatus: userDetails.userMaritalstatus }, { userMaritalstatus: userDetails.partnerMaritalStatus })

            //*partnerOccupation
            // query.partnerOccupation = (req.body.partnerOccupation && req.body.partnerOccupation.length > 0) ? { $in: req.body.partnerOccupation } : userDetails.partnerOccupation
            if (req.body.partnerOccupation && req.body.partnerOccupation.length > 0) {

                andOperation.push({ partnerOccupation: { $in: userDetails.userOccupation } }, { userOccupation: { $in: req.body.partnerOccupation } })
            }
            //*partnerEducation
            // query.partnerEducation = (req.body.partnerEducation && req.body.partnerEducation.length > 0) ? { $in: req.body.partnerEducation } : userDetails.partnerEducation

            if( req.body.partnerEducation && req.body.partnerEducation.length > 0){
andOperation.push({ partnerEducation: { $in: userDetails.userEducation } }, { userEducation: { $in: req.body.partnerEducation } }) }
            //*partnerEmployedIn
            // query.partnerEmployedIn = (req.body.partnerEmployedIn && req.body.partnerEmployedIn.length > 0) ? { $in: req.body.partnerEmployedIn } : userDetails.partnerEmployedIn

            if(req.body.partnerEmployedIn && req.body.partnerEmployedIn.length > 0){

             andOperation.push({ partnerEmployedIn: { $in: userDetails.userEmployedIn } }, { userEmployedIn: { $in: req.body.partnerEmployedIn } }) }
            //*partnerBodyType
            // query.partnerBodyType = (req.body.partnerBodyType && req.body.partnerBodyType.length > 0) ? { $in: req.body.partnerBodyType } : userDetails.partnerBodyType
            if(req.body.partnerBodyType && req.body.partnerBodyType.length > 0){ andOperation.push({ partnerBodyType: { $in: userDetails.userHeight } }, { userBodyType: { $in: req.body.partnerBodyType } })}

            //*partnerComplexion
            // query.partnerComplexion = (req.body.partnerComplexion && req.body.partnerComplexion.length > 0) ? { $in: req.body.partnerComplexion } : userDetails.partnerComplexion
            req.body.partnerComplexion && req.body.partnerComplexion.length > 0 ? andOperation.push({ partnerComplexion: { $in: userDetails.userComplexion } }, { userComplexion: { $in: req.body.partnerComplexion } }) : andOperation.push({ partnerComplexion: userDetails.userComplexion }, { userComplexion: userDetails.partnerComplexion })
            //*partnerPhysicalStatus
            // query.partnerPhysicalStatus = (req.body.partnerPhysicalStatus && req.body.partnerPhysicalStatus.length > 0) ? { $in: req.body.partnerPhysicalStatus } : userDetails.partnerPhysicalStatus
            req.body.partnerPhysicalStatus && req.body.partnerPhysicalStatus.length > 0 ? andOperation.push({ partnerPhysicalStatus: { $in: userDetails.userPhysicalStatus } }, { userPhysicalStatus: { $in: req.body.partnerPhysicalStatus } }) : andOperation.push({ partnerPhysicalStatus: userDetails.userPhysicalStatus }, { userPhysicalStatus: userDetails.partnerPhysicalStatus })
            //*partnerHeight
            // query.partnerHeight = (req.body.partnerHeight && req.body.partnerHeight.length > 0) ? { $in: req.body.partnerHeight } : userDetails.partnerHeight
            req.body.partnerHeight && req.body.partnerHeight.length > 0 ? andOperation.push({ partnerHeight: { $in: userDetails.userHeight } }, { userHeight: { $in: req.body.partnerHeight } }) : andOperation.push({ partnerHeight: userDetails.userHeight }, { userHeight: userDetails.partnerHeight })
            //*partnerWeight
            // query.partnerWeight = (req.body.partnerWeight && req.body.partnerWeight.length > 0) ? { $in: req.body.partnerWeight } : userDetails.partnerWeight
            req.body.partnerWeight && req.body.partnerWeight.length > 0 ? andOperation.push({ partnerWeight: { $in: userDetails.userWeight } }, { userWeight: { $in: req.body.partnerWeight } }) : andOperation.push({ partnerWeight: userDetails.userWeight }, { userWeight: userDetails.partnerWeight })
            //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7

            //Secondary filter

            // //*partnerHairType
            // query.partnerHairType = (req.body.partnerHairType && req.body.partnerHairType.length > 0) ? { $in: req.body.partnerHairType } : userDetails.partnerHairType
            // req.body.partnerHairType && req.body.partnerHairType.length > 0 ? andOperation.push({ partnerHairType: { $in: userDetails.userHairType } }, { userHairType: { $in: req.body.partnerHairType } }) : andOperation.push({ partnerHairType: userDetails.userHairType }, { userHairType: userDetails.partnerHairType })
            if (req.body.partnerHairType && req.body.partnerHairType.length > 0) {
                andOperation.push({ partnerHairType: { $in: userDetails.userHairType } }, { userHairType: { $in: req.body.partnerHairType } })
            }
            // //*partnerHairColor
            // // query.partnerHairColor = (req.body.partnerHairColor && req.body.partnerHairColor.length > 0) ? { $in: req.body.partnerHairColor } : userDetails.partnerHairColor
            // req.body.partnerHairColor && req.body.partnerHairColor.length > 0 ? andOperation.push({ partnerHairColor: { $in: userDetails.userHairColor } }, { userHairColor: { $in: req.body.partnerHairColor } }) : andOperation.push({ partnerHairColor: userDetails.userHairColor }, { userHairColor: userDetails.partnerHairColor })
            if (req.body.partnerHairColor && req.body.partnerHairColor.length > 0) {
                andOperation.push({ partnerHairColor: { $in: userDetails.userHairColor } }, { userHairColor: { $in: req.body.partnerHairColor } })
            }
            // //*  partnerReligion 
            // // query.partnerReligion = (req.body.partnerReligion && req.body.partnerReligion.length > 0) ? { $in: req.body.partnerReligion } : userDetails.partnerReligion
            // req.body.partnerReligion && req.body.partnerReligion.length > 0 ? andOperation.push({ partnerReligion: { $in: userDetails.userReligion } }, { userReligion: { $in: req.body.partnerReligion } }) : andOperation.push({ partnerReligion: userDetails.userReligion }, { userReligion: userDetails.partnerReligion })
            // //*  partnerCulture/ 
            // // query.partnerCulture = (req.body.partnerCulture && req.body.partnerCulture.length > 0) ? { $in: req.body.partnerCulture } : userDetails.partnerCulture
            // req.body.partnerCulture && req.body.partnerCulture.length > 0 ? andOperation.push({ partnerCulture: { $in: userDetails.userCulture } }, { userCulture: { $in: req.body.partnerCulture } }) : andOperation.push({ partnerCulture: userDetails.userCulture }, { userCulture: userDetails.partnerCulture })
            if (req.body.partnerCulture && req.body.partnerCulture.length > 0) {
                andOperation.push({ partnerCulture: { $in: userDetails.userCulture } }, { userCulture: { $in: req.body.partnerCulture } })
            }
            // //*  partnerHijab 
            // // query.partnerHijab = (req.body.partnerHijab && req.body.partnerHijab.length > 0) ? { $in: req.body.partnerHijab } : userDetails.partnerHijab
            // req.body.partnerHijab && req.body.partnerHijab.length > 0 ? andOperation.push({ partnerHijab: { $in: userDetails.userHijab } }, { userHijab: { $in: req.body.partnerHijab } }) : andOperation.push({ partnerHijab: userDetails.userHijab }, { userHijab: userDetails.partnerHijab })
            if (req.body.partnerHijab && req.body.partnerHijab.length > 0) {
                andOperation.push({ partnerHijab: { $in: userDetails.userHijab } }, { userHijab: { $in: req.body.partnerHijab } })
            }
            // //*  partnerSmokingHabits 
            // // query.partnerSmokingHabits = (req.body.partnerSmokingHabits && req.body.partnerSmokingHabits.length > 0) ? { $in: req.body.partnerSmokingHabits } : userDetails.partnerSmokingHabits
            // req.body.partnerSmokingHabits && req.body.partnerSmokingHabits.length > 0 ? andOperation.push({ partnerSmokingHabits: { $in: userDetails.userSmokingHabits } }, { userSmokingHabits: { $in: req.body.partnerSmokingHabits } }) : andOperation.push({ partnerSmokingHabits: userDetails.userSmokingHabits }, { userSmokingHabits: userDetails.partnerSmokingHabits })
            if (req.body.partnerSmokingHabits && req.body.partnerSmokingHabits.length > 0) {
                andOperation.push({ partnerSmokingHabits: { $in: userDetails.userSmokingHabits } }, { userSmokingHabits: { $in: req.body.partnerSmokingHabits } })
            }
            // // //*  partnerSmokingHabits 
            // // query.partnerSmokingHabits=req.body.partnerSmokingHabits.length > 0? {$in:req.body.partnerSmokingHabits} :userDetails.partnerSmokingHabits  
            //partnerDrinkingHabits
            if (req.body.partnerDrinkingHabits && req.body.partnerDrinkingHabits.length > 0) {
                andOperation.push({ partnerDrinkingHabits: { $in: userDetails.userDrinkingHabits } }, { userDrinkingHabits: { $in: req.body.partnerDrinkingHabits } })
            }
            //partnerEatingHabits
            if (req.body.partnerEatingHabits && req.body.partnerEatingHabits.length > 0) {
                andOperation.push({ partnerEatingHabits: { $in: userDetails.userEatingHabits } }, { userEatingHabits: { $in: req.body.partnerEatingHabits } })
            }
            if (andOperation.length > 0) {
                query.$and = andOperation
            }
            console.log("genderToBeSearch====>", andOperation)
            userModel.find(query).select("-purchase_packageDetails -packageId -packageStartDate -transactionId -packageEndDate -forgotToken -emailVerificationTime -accountVerification -password -otp -otpTime ").exec((err, result) => {
                console.log("matching=====>", err)
                if (err) {
                    return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, err)

                }
                else if (result.length == 0) {
                    return Response.sendResponseWithData(res, responseCode.NOT_FOUND, responseMessage.NOT_FOUND, [], query)

                }
                else {

                    let temp = result.map((e, i) => {
                        console.log(`loop ${i}`, e._doc._id)
                        e._doc["primaryMatching"] = 0;
                        e._doc["secondaryMatching"] = 0;
                        e._doc['isFavorite'] = userDetails.markFavorite.includes(e._doc._id) ? true : false
                        //primary weitage
                        //*age

                        if (e._doc.partnerAge && e._doc.userAge && e._doc.userAge == userDetails.partnerAge && e._doc.partnerAge == userDetails.userAge) {
                            e._doc["primaryMatching"] += 6
                            console.log("partnerAge==>", userDetails.markFavorite, e._doc._id, e._doc["primaryMatching"])

                        }
                        //*mathab            
                        if (e._doc.partnerMathab && e._doc.userMathab && e._doc.userMathab == userDetails.partnerMathab && e._doc.partnerMathab == userDetails.userMathab) {

                            e._doc["primaryMatching"] += 6
                            console.log("partnerMathab==>", e._doc["primaryMatching"])

                        }
                        //*Religiosity

                        if (e._doc.partnerReligion && e._doc.userReligion && e._doc.userReligion == userDetails.partnerReligion && e._doc.partnerReligion == userDetails.userReligion) {

                            e._doc["primaryMatching"] += 5
                            console.log("partnerReligion==>", e._doc["primaryMatching"])

                        }


                        //*language
                        if (e._doc.partnerLanguage && e._doc.userLanguage && e._doc.userLanguage == userDetails.partnerLanguage && e._doc.partnerLanguage == userDetails.userLanguage) {
                            e._doc["primaryMatching"] += 5
                            console.log("partnerLanguage==>", e._doc["primaryMatching"])

                        }
                        //tribe

                        if (e._doc.partnerTribe && e._doc.userTribe && e._doc.userTribe == userDetails.partnerTribe && e._doc.partnerTribe == userDetails.userTribe) {
                            e._doc["primaryMatching"] += 7
                            console.log("partnerTribe==>", e._doc["primaryMatching"])

                        }

                        //*tribeName

                        if (e._doc.partnerTribeName && e._doc.userTribeName && e._doc.userTribeName == userDetails.partnerTribeName && e._doc.partnerTribeName == userDetails.userTribeName) {
                            e._doc["primaryMatching"] += 7
                            console.log("partnerTribeName==>", e._doc["primaryMatching"])

                        }
                        //country

                        if (e._doc.partnerCountry && e._doc.userCountry && e._doc.userCountry == userDetails.partnerCountry && e._doc.partnerCountry == userDetails.userCountry) {
                            e._doc["primaryMatching"] += 6
                            console.log("partnerCountry==>", e._doc["primaryMatching"])

                        }
                        //city
                        if (e._doc.partnerCity && e._doc.userCity && e._doc.userCity == userDetails.partnerCity && e._doc.partnerCity == userDetails.userCity) {
                            e._doc["primaryMatching"] += 6
                            console.log("partnerCity==>", e._doc["primaryMatching"])

                        }
                        //maritialStatus
                        // if (e._doc.partnerCity && e._doc.partnerCity == userDetails.partnerCity) {
                        //     e._doc["primaryMatching"] += 5
                        // }
                        if (e._doc.partnerMaritalStatus && e._doc.userMaritalstatus && e._doc.userMaritalstatus == userDetails.partnerMaritalStatus && e._doc.partnerMaritalStatus == userDetails.userMaritalstatus) {
                            e._doc["primaryMatching"] += 6
                            console.log("partnerMaritalStatus==>", e._doc["primaryMatching"])

                        }
                        //*education
                        if (e._doc.partnerEducation && e._doc.userEducation && e._doc.userEducation == userDetails.partnerEducation && e._doc.partnerEducation == userDetails.userEducation) {
                            e._doc["primaryMatching"] += 6
                            console.log("partnerEducation==>", e._doc["primaryMatching"])

                        }
                        //*employed In
                        if (e._doc.partnerEmployedIn && e._doc.userEmployedIn && e._doc.userEmployedIn == userDetails.partnerEmployedIn && e._doc.partnerEmployedIn == userDetails.userEmployedIn) {
                            e._doc["primaryMatching"] += 5
                            console.log("partnerEmployedIn==>", e._doc["primaryMatching"])

                        }
                        //*occupation
                        if (e._doc.partnerOccupation && e._doc.userOccupation && e._doc.userOccupation == userDetails.partnerOccupation && e._doc.partnerOccupation == userDetails.userOccupation) {
                            e._doc["primaryMatching"] += 6
                            console.log("partnerOccupation==>", e._doc["primaryMatching"])

                        }
                        //*bodyType
                        if (e._doc.partnerBodyType && e._doc.userBodyType && e._doc.userBodyType == userDetails.partnerBodyType && e._doc.partnerBodyType == userDetails.userBodyType) {
                            e._doc["primaryMatching"] += 6
                            console.log("partnerBodyType==>", e._doc["primaryMatching"])

                        }
                        //complextion
                        if (e._doc.partnerComplexion && e._doc.userComplexion && e._doc.userComplexion == userDetails.partnerComplexion && e._doc.partnerComplexion == userDetails.userComplexion) {
                            e._doc["primaryMatching"] += 6
                            console.log("partnerComplexion==>", e._doc["primaryMatching"])

                        }
                        //*physical status
                        if (e._doc.partnerPhysicalStatus && e._doc.userPhysicalStatus && e._doc.userPhysicalStatus == userDetails.partnerPhysicalStatus && e._doc.partnerPhysicalStatus == userDetails.userPhysicalStatus) {
                            e._doc["primaryMatching"] += 6
                            console.log("partnerPhysicalStatus==>", e._doc["primaryMatching"])

                        }
                        //*height
                        if (e._doc.partnerHeight && e._doc.userHeight && e._doc.userHeight == userDetails.partnerHeight && e._doc.partnerHeight == userDetails.userHeight) {
                            e._doc["primaryMatching"] += 6
                            console.log("partnerHeight==>", e._doc["primaryMatching"])

                        }
                        //*weight
                        if (e._doc.partnerWeight && e._doc.userWeight && e._doc.userWeight == userDetails.partnerWeight && e._doc.partnerWeight == userDetails.userWeight) {
                            e._doc["primaryMatching"] += 5
                            console.log("partnerWeight==>", e._doc["primaryMatching"])

                        }

                        //**finish primary weigtage count */

                        // ** Secondary weitage **
                        //*religion
                        if (e._doc.partnerReligion && e._doc.userReligion && e._doc.userReligion == userDetails.partnerReligion && e._doc.partnerReligion == userDetails.userReligion) {
                            e._doc["secondaryMatching"] += 6
                        }

                        //*culture
                        if (e._doc.partnerCulture && e._doc.userCulture && e._doc.userCulture == userDetails.partnerCulture && e._doc.partnerCulture == userDetails.userCulture) {
                            e._doc["secondaryMatching"] += 6
                        }
                        //*familyGathering
                        if (e._doc.partnerFamilyGatherings && e._doc.userFamilyGatherings && e._doc.userFamilyGatherings == userDetails.partnerFamilyGatherings && e._doc.partnerFamilyGatherings == userDetails.userFamilyGatherings) {
                            e._doc["secondaryMatching"] += 7
                        }
                        //*hijab
                        if (e._doc.partnerHijab && e._doc.userHijab && e._doc.userHijab == userDetails.partnerHijab && e._doc.partnerHijab == userDetails.userHijab) {
                            e._doc["secondaryMatching"] += 7
                        }
                        //*abaya
                        if (e._doc.partnerAbaya && e._doc.userAbaya && e._doc.userAbaya == userDetails.partnerAbaya && e._doc.partnerAbaya == userDetails.userAbaya) {
                            e._doc["secondaryMatching"] += 7
                        }
                        //*bodyType
                        if (e._doc.partnerBodyType && e._doc.userBodyType && e._doc.userBodyType == userDetails.partnerBodyType && e._doc.partnerBodyType == userDetails.userBodyType) {
                            e._doc["secondaryMatching"] += 6
                        }

                        //*hairType
                        if (e._doc.partnerHairType && e._doc.userHairType && e._doc.userHairType == userDetails.partnerHairType && e._doc.partnerHairType == userDetails.userHairType) {
                            e._doc["secondaryMatching"] += 6
                        }
                        //*hairColor
                        if (e._doc.partnerHairColor && e._doc.userHairColor && e._doc.userHairColor == userDetails.partnerHairColor && e._doc.partnerHairColor == userDetails.userHairColor) {
                            e._doc["secondaryMatching"] += 6
                        }
                        //*smoking
                        if (e._doc.partnerSmokingHabits && e._doc.userSmokingHabits && e._doc.userSmokingHabits == userDetails.partnerSmokingHabits && e._doc.partnerSmokingHabits == userDetails.userSmokingHabits) {
                            e._doc["secondaryMatching"] += 6
                        }
                        //*hubblyBubbly
                        if (e._doc.partnerHubblyBubbly && e._doc.userHubblyBubbly && e._doc.userHubblyBubbly == userDetails.partnerHubblyBubbly && e._doc.partnerHubblyBubbly == userDetails.userHubblyBubbly) {
                            e._doc["secondaryMatching"] += 6
                        }
                        //*eatingHabits
                        if (e._doc.partnerEatingHabits && e._doc.userEatingHabits && e._doc.userEatingHabits == userDetails.partnerEatingHabits && e._doc.partnerEatingHabits == userDetails.userEatingHabits) {
                            e._doc["secondaryMatching"] += 7
                        }
                        //*Income
                        if (e._doc.partnerIncome && e._doc.userIncome && e._doc.userIncome == userDetails.partnerIncome && e._doc.partnerIncome == userDetails.userIncome) {
                            e._doc["secondaryMatching"] += 6
                        }
                        //*familyStatus
                        if (e._doc.partnerFamilyStatus && e._doc.userFamilyStatus && e._doc.userFamilyStatus == userDetails.partnerFamilyStatus && e._doc.partnerFamilyStatus == userDetails.userFamilyStatus) {
                            e._doc["secondaryMatching"] += 6
                        }
                        //*lifeStyle
                        if (e._doc.partnerLifestyle && e._doc.userLifestyle && e._doc.userLifestyle == userDetails.partnerLifestyle && e._doc.partnerLifestyle == userDetails.userLifestyle) {
                            e._doc["secondaryMatching"] += 6
                        }
                        //*Hobbies & Interest
                        if (e._doc.PartnerHobbies_Interest && e._doc.UserHobbies_Interest && e._doc.UserHobbies_Interest == userDetails.PartnerHobbies_Interest && e._doc.PartnerHobbies_Interest == userDetails.UserHobbies_Interest) {
                            e._doc["secondaryMatching"] += 6
                        }
                        //*DrinkingStatus
                        if (e._doc.partnerDrinkingHabits && e._doc.userDrinkingHabits && e._doc.userDrinkingHabits == userDetails.partnerDrinkingHabits && e._doc.partnerDrinkingHabits == userDetails.userDrinkingHabits) {
                            e._doc["secondaryMatching"] += 6
                        }
                        console.log("e.primaryMatching===>", e._doc._id, e._doc.primaryMatching, "secondaryMatching====>", e._doc.secondaryMatching)
                        return e;
                    })


                    return Response.sendResponseWithData(res, responseCode.EVERYTHING_IS_OK, responseMessage.SUCCESSFULLY_DONE, temp, query)

                }
            })

        } catch (error) {
            console.log("err==>", error)
            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, error || error.TypeError)

        }
    }

    //******************************** End of exports****************************** */
}