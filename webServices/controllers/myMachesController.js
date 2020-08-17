const userModel = require('../../models/userModel')
const userMember = require('../../models/subMember_User')
const commonQuery = require('../../services/userServices')
const constant = require('../../helpers/constants');
const Response = require('../../helpers/commonResponseHaldler');
const responseMessage = require('../../helpers/httpResponseMessage');
const responseCode = require('../../helpers/httpResponseCode');


module.exports = {
/**
 * Function Name :My_matching profile algorithm API
 * Description : My_matching profile algorithm  API
 * @return  response
 */

 matchingAlgorithm:(req,res)=>{
     try {
         let userDetails=req.userDetails
        let genderToBeSearch= (userDetails.userGender=='Male')?'Female':'Male'
        // ,packageEndDate:{$gte:new Date().toISOString().split("T")[0]+'T00:00:00.000Z'},
     let query={userGender:genderToBeSearch,status:"ACTIVE",accountVerification:true,mobileVerified:true,emailVerified:true,documentVerification:true,purchase_packageDetails:{$ne:[]},packageSuscription:"Approved",_id:{$ne:userDetails._id}}

// if(req.body.userTribe){
//*partnerTribe
    query.partnerTribe=(req.body.partnerTribe && req.body.partnerTribe.length > 0) ? {$in:req.body.partnerTribe} : userDetails.partnerTribe
// }
//*partnerTribeName
    query.partnerTribeName=(req.body.partnerTribeName && req.body.partnerTribeName.length > 0)? {$in:req.body.partnerTribeName} :userDetails.partnerTribeName
//*age
    query.partnerAge=(req.body.partnerAge && req.body.partnerAge.length > 0)? {$in:req.body.partnerAge} :userDetails.partnerAge
//*partnerCountry
    query.partnerCountry=(req.body.partnerCountry && req.body.partnerCountry.length > 0)? {$in:req.body.partnerCountry} :userDetails.partnerCountry
//*partnerCity
    query.partnerCity=(req.body.partnerCity && req.body.partnerCity.length > 0)? {$in:req.body.partnerCity} :userDetails.partnerCity
//*partnerMaritalStatus
    query.partnerMaritalStatus=(req.body.partnerMaritalStatus && req.body.partnerMaritalStatus.length > 0)? {$in:req.body.partnerMaritalStatus} :userDetails.partnerMaritalStatus
//*partnerOccupation
    query.partnerOccupation=(req.body.partnerOccupation && req.body.partnerOccupation.length > 0)? {$in:req.body.partnerOccupation} :userDetails.partnerOccupation
//*partnerEducation
    query.partnerEducation=(req.body.partnerEducation && req.body.partnerEducation.length > 0)? {$in:req.body.partnerEducation} :userDetails.partnerEducation
//*partnerBodyType
    query.partnerBodyType=(req.body.partnerBodyType && req.body.partnerBodyType.length > 0)? {$in:req.body.partnerBodyType} :userDetails.partnerBodyType
//*partnerHeight
    query.partnerHeight=(req.body.partnerHeight && req.body.partnerHeight.length > 0)? {$in:req.body.partnerHeight} :userDetails.partnerHeight
//*partnerComplexion
    query.partnerComplexion=(req.body.partnerComplexion && req.body.partnerComplexion.length > 0)? {$in:req.body.partnerComplexion} :userDetails.partnerComplexion

 //*partnerWeight
 query.partnerWeight=( req.body.partnerWeight && req.body.partnerWeight.length > 0)? {$in:req.body.partnerWeight} :userDetails.partnerWeight 
//   //*partnerWeight
//   query.partnerWeight=req.body.partnerWeight.length > 0? {$in:req.body.partnerWeight} :userDetails.partnerWeight
  //*partnerHairType
 query.partnerHairType=(req.body.partnerHairType && req.body.partnerHairType.length > 0)? {$in:req.body.partnerHairType} :userDetails.partnerHairType  
   //*partnerHairColor
   query.partnerHairColor=(req.body.partnerHairColor && req.body.partnerHairColor.length > 0)? {$in:req.body.partnerHairColor} :userDetails.partnerHairColor   
//*  partnerReligion 
query.partnerReligion=( req.body.partnerReligion && req.body.partnerReligion.length > 0)? {$in:req.body.partnerReligion} :userDetails.partnerReligion   
//*  partnerCulture/ 
query.partnerCulture=(req.body.partnerCulture && req.body.partnerCulture.length > 0)? {$in:req.body.partnerCulture} :userDetails.partnerCulture  
//*  partnerHijab 
query.partnerHijab=(req.body.partnerHijab && req.body.partnerHijab.length > 0)? {$in:req.body.partnerHijab} :userDetails.partnerHijab  
//*  partnerSmokingHabits 
query.partnerSmokingHabits=(req.body.partnerSmokingHabits && req.body.partnerSmokingHabits.length > 0)? {$in:req.body.partnerSmokingHabits} :userDetails.partnerSmokingHabits  
// //*  partnerSmokingHabits 
// query.partnerSmokingHabits=req.body.partnerSmokingHabits.length > 0? {$in:req.body.partnerSmokingHabits} :userDetails.partnerSmokingHabits  
    console.log("genderToBeSearch====>",query)

     userModel.find(query).select("-purchase_packageDetails -packageId -packageStartDate -transactionId -packageEndDate -forgotToken -emailVerificationTime -accountVerification -password -otp -otpTime ").exec((err,result)=>{
         if(err){
            return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, err)

         }
         else if (result.length ==0){
          return  Response.sendResponseWithData(res, responseCode.NOT_FOUND, responseMessage.NOT_FOUND, [],query)

         }
         else{
            result=result.map(e=>{
                e.matchingProfilePercentage=100
                return e
            })
            result=result.filter(Boolean)
           return Response.sendResponseWithData(res, responseCode.EVERYTHING_IS_OK, responseMessage.SUCCESSFULLY_DONE, result,query)

         }
     })

     } catch (error) {
         console.log("err==>",error)
        return Response.sendResponsewithError(res, responseCode.WENT_WRONG, responseMessage.INTERNAL_SERVER_ERROR, error || error.TypeError)

     }
 }

    //******************************** End of exports****************************** */
}