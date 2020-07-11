const mongoose = require('mongoose');
const schema = mongoose.Schema;
let static_content = new schema(
    {
        title:
        {
            type: String
        },
        email: {
            type: String
        },
        phoneNumber: {
            type: String
        },
        description:
        {
            type: String
        },
        status: {
            type: String,
            enum: ["ACTIVE", "BLOCK", 'DELETE'],
            default: "ACTIVE"
        },

        tabMode:{
            type:String
        },
        FAQ: [{
            
                question:
                {
                    type: String
                },
                answer:
                {
                    type: String
                },

                status: {
                    type: String,
                    default: "ACTIVE"
                },
                created_At: {
                    type: Date,
                    default: Date.now()
                },
                category:String
            
        }],

        Type:{
            type:String
        },


    },
    { timestamps: true }
);
module.exports = mongoose.model('static_content', static_content);


let obj1 = {
    'title': "Terms and Conditions",
    'description': "wedding_App is a marriage introduction service. The target audience are men and women living in Saudi Arabia and others looking to marry from these countries. Specific care is taken not to expose the contact information of the members to prevent unwanted communication and maintain privacy.Starting in mid 2019 wedding_App has begun requiring identity confirmation of all members including free members. This is one of the ways wedding_App is working to give its clients a safer and better experience. By preventing free searches by non members, wedding_App is further securing the privacy of its members and insuring that only people interested in marriage contact the members.Payments for membership can be made through our secure payment gateway or by check to the agent closest to you. We accept Visa, Master Card, Discover, American Express and most debit cards. The management of wedding_App is dedicated to continuing investmenents in technology to stay at the cutting edge and provide its members with a safe and productive experience.",
    'Type': 'TERMS',

};
let obj2 = {
    'title': "About Us",
    'description': "wedding_App is a marriage introduction service. The target audience are men and women living in Saudi Arabia and others looking to marry from these countries. Specific care is taken not to expose the contact information of the members to prevent unwanted communication and maintain privacy.Starting in mid 2019 wedding_App has begun requiring identity confirmation of all members including free members. This is one of the ways wedding_App is working to give its clients a safer and better experience. By preventing free searches by non members, wedding_App is further securing the privacy of its members and insuring that only people interested in marriage contact the members.Payments for membership can be made through our secure payment gateway or by check to the agent closest to you. We accept Visa, Master Card, Discover, American Express and most debit cards. The management of wedding_App is dedicated to continuing investmenents in technology to stay at the cutting edge and provide its members with a safe and productive experience.",
    'Type': 'ABOUT_US',
};
let obj3 = {
    'title': "Privacy Policy",
    'description': "wedding_App is a marriage introduction service. The target audience are men and women living in Saudi Arabia and others looking to marry from these countries. Specific care is taken not to expose the contact information of the members to prevent unwanted communication and maintain privacy.Starting in mid 2019 wedding_App has begun requiring identity confirmation of all members including free members. This is one of the ways wedding_App is working to give its clients a safer and better experience. By preventing free searches by non members, wedding_App is further securing the privacy of its members and insuring that only people interested in marriage contact the members.Payments for membership can be made through our secure payment gateway or by check to the agent closest to you. We accept Visa, Master Card, Discover, American Express and most debit cards. The management of wedding_App is dedicated to continuing investmenents in technology to stay at the cutting edge and provide its members with a safe and productive experience.",
    'Type': 'PRIVACY',
    'tabMode':"DEV_APP"

};
let obj4 = {
    'title': "Contact Us",
    'description': "wedding_App is a marriage introduction service. The target audience are men and women living in Saudi Arabia and others looking to marry from these countries. Specific care is taken not to expose the contact information of the members to prevent unwanted communication and maintain privacy.Starting in mid 2019 wedding_App has begun requiring identity confirmation of all members including free members. This is one of the ways wedding_App is working to give its clients a safer and better experience. By preventing free searches by non members, wedding_App is further securing the privacy of its members and insuring that only people interested in marriage contact the members.Payments for membership can be made through our secure payment gateway or by check to the agent closest to you. We accept Visa, Master Card, Discover, American Express and most debit cards. The management of wedding_App is dedicated to continuing investmenents in technology to stay at the cutting edge and provide its members with a safe and productive experience.",
    "email": "admin@gmail.com",
    "phoneNumber": "+911111111111",
    'Type': 'CONTACT_US'

};
let obj5 = {
    FAQ: [
        {

            "question": " This is just a demo question?",
            "answer": "2 This is just a demo Answer.",
            status: "ACTIVE",
            
        }, {

            "question": "This is just a demo question?",
            "answer": "This is just a demo Answer.",
            status: "ACTIVE",

        } 
    ],

    'Type': 'FAQ',
};




mongoose.model('static_content', static_content).find((error, result) => {
    if (result.length == 0) {
       
        mongoose.model('static_content', static_content).create(obj1,obj2,obj3,obj4,obj5, (error, success) => {
            if (error)
                console.log("Error is" + error)
            else
                console.log("Static faq content saved succesfully.", success);
        })
    }
});

