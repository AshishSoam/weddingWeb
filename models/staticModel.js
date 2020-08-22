const mongoose = require('mongoose');
const schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

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
        tabMode: {
            type: String
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
            category: String

        }],
        About_Wedding_APP: {
            type: String
        },
        bannerImages: [{ type: String }],
        youtubeVideos: [{ type: String }],

        Type: {
            type: String
        },
    },
    { timestamps: true }
);
static_content.plugin(mongoosePaginate);

module.exports = mongoose.model('static_content', static_content);


let obj1 = {
    'title': "Terms and Conditions",
    'description': "wedding_App is a marriage introduction service. The target audience are men and women living in Saudi Arabia and others looking to marry from these countries. Specific care is taken not to expose the contact information of the members to prevent unwanted communication and maintain privacy.Starting in mid 2019 wedding_App has begun requiring identity confirmation of all members including free members. This is one of the ways wedding_App is working to give its clients a safer and better experience. By preventing free searches by non members, wedding_App is further securing the privacy of its members and insuring that only people interested in marriage contact the members.Payments for membership can be made through our secure payment gateway or by check to the agent closest to you. We accept Visa, Master Card, Discover, American Express and most debit cards. The management of wedding_App is dedicated to continuing investmenents in technology to stay at the cutting edge and provide its members with a safe and productive experience.",
    'Type': 'TERMS',

};
let home={
    'Type': 'HOME',
    'bannerImages':[ "https://res.cloudinary.com/appsums/image/upload/v1595081026/zy4k7lls4depxx9cwolz.jpg",
    "https://res.cloudinary.com/dl2d0v5hy/image/upload/v1578982400/xmcb6hjt0tjnqckllsib.jpg",
    "https://res.cloudinary.com/dl2d0v5hy/image/upload/v1578982443/m6luq8pkw99uebznfdeu.jpg",
    "https://res.cloudinary.com/dl2d0v5hy/image/upload/v1578982601/bmhpboqcycm4yuk097ei.jpg",
    "https://res.cloudinary.com/dl2d0v5hy/image/upload/v1595859244/b3omnw1euquvdorbi0va.jpg",
    "https://res.cloudinary.com/dl2d0v5hy/image/upload/v1595859233/arg9wjxlobsa1bztbyhm.jpg",
   "https://res.cloudinary.com/dl2d0v5hy/image/upload/v1595859224/vjul3oqormiqh6u6qnkc.jpg",
   "https://res.cloudinary.com/dl2d0v5hy/image/upload/v1581609990/oheq3rvjrh6gojdnfrh1.jpg",
   "https://res.cloudinary.com/dl2d0v5hy/image/upload/v1578981890/i6gig5d2fcq0hdcdw3x4.jpg",
   "https://res.cloudinary.com/dl2d0v5hy/image/upload/v1578982373/wsor3pykrralevwidmwa.jpg"],
   "youtubeVideos":["https://www.youtube.com/embed/IHFsIXHWnYo","https://www.youtube.com/embed/IHFsIXHWnYo","https://www.youtube.com/embed/IHFsIXHWnYo"],
   'About_Wedding_APP':"wedding_App is a marriage introduction service. The target audience are men and women living in Saudi Arabia and others looking to marry from these countries. Specific care is taken not to expose the contact information of the members to prevent unwanted communication and maintain privacy.Starting in mid 2019 wedding_App has begun requiring identity confirmation of all members including free members. This is one of the ways wedding_App is working to give its clients a safer and better experience. By preventing free searches by non members, wedding_App is further securing the privacy of its members and insuring that only people interested in marriage contact the members.Payments for membership can be made through our secure payment gateway or by check to the agent closest to you. We accept Visa, Master Card, Discover, American Express and most debit cards. The management of wedding_App is dedicated to continuing investmenents in technology to stay at the cutting edge and provide its members with a safe and productive experience."


}
let obj2 = {
    'title': "About Us",
    'description': "wedding_App is a marriage introduction service. The target audience are men and women living in Saudi Arabia and others looking to marry from these countries. Specific care is taken not to expose the contact information of the members to prevent unwanted communication and maintain privacy.Starting in mid 2019 wedding_App has begun requiring identity confirmation of all members including free members. This is one of the ways wedding_App is working to give its clients a safer and better experience. By preventing free searches by non members, wedding_App is further securing the privacy of its members and insuring that only people interested in marriage contact the members.Payments for membership can be made through our secure payment gateway or by check to the agent closest to you. We accept Visa, Master Card, Discover, American Express and most debit cards. The management of wedding_App is dedicated to continuing investmenents in technology to stay at the cutting edge and provide its members with a safe and productive experience.",
    'Type': 'ABOUT_US',
};
let obj3 = {
    'title': "Privacy Policy",
    'description': "wedding_App is a marriage introduction service. The target audience are men and women living in Saudi Arabia and others looking to marry from these countries. Specific care is taken not to expose the contact information of the members to prevent unwanted communication and maintain privacy.Starting in mid 2019 wedding_App has begun requiring identity confirmation of all members including free members. This is one of the ways wedding_App is working to give its clients a safer and better experience. By preventing free searches by non members, wedding_App is further securing the privacy of its members and insuring that only people interested in marriage contact the members.Payments for membership can be made through our secure payment gateway or by check to the agent closest to you. We accept Visa, Master Card, Discover, American Express and most debit cards. The management of wedding_App is dedicated to continuing investmenents in technology to stay at the cutting edge and provide its members with a safe and productive experience.",
    'Type': 'PRIVACY',
    'tabMode': "DEV_APP"

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

            "question": " This is just a demo question 1?",
            "answer": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quodLorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod",
            status: "ACTIVE",

        }, {

            "question": " This is just a demo question 2?",
            "answer": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quodLorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod",
            status: "ACTIVE",

        }, {

            "question": " This is just a demo question 3?",
            "answer": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quodLorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod",
            status: "ACTIVE",

        }, {

            "question": " This is just a demo question 4?",
            "answer": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci  Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod",
            status: "ACTIVE",

        }, {

            "question": " This is just a demo question 5?",
            "answer": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quodLorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod",
            status: "ACTIVE",

        }, {

            "question": " This is just a demo question 6?",
            "answer": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod.Lorem ipsum dolor sit amet consectetur, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod",
            status: "ACTIVE",

        }, {

            "question": " This is just a demo question 7 ?",
            "answer": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quodLorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod similique nesciunt illo fugiat tempore dicta, ipsa inventore adipisci !Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, nemo quisquam eos obcaecati sint dolores, ad vero veritatis maxime suscipit quod",
            status: "ACTIVE",

        },
    ],

    'Type': 'FAQ',
};

let obj6 = {
    'title': "Oath",
    'description': "wedding_App is a marriage introduction service. The target audience are men and women living in Saudi Arabia and others looking to marry from these countries. Specific care is taken not to expose the contact information of the members to prevent unwanted communication and maintain privacy.Starting in mid 2019 wedding_App has begun requiring identity confirmation of all members including free members. This is one of the ways wedding_App is working to give its clients a safer and better experience. By preventing free searches by non members, wedding_App is further securing the privacy of its members and insuring that only people interested in marriage contact the members.Payments for membership can be made through our secure payment gateway or by check to the agent closest to you. We accept Visa, Master Card, Discover, American Express and most debit cards. The management of wedding_App is dedicated to continuing investmenents in technology to stay at the cutting edge and provide its members with a safe and productive experience.",
    'Type': 'OATH',

};
let obj7 = {
    'title': "Terms of use",
    'description': "wedding_App is a marriage introduction service. The target audience are men and women living in Saudi Arabia and others looking to marry from these countries. Specific care is taken not to expose the contact information of the members to prevent unwanted communication and maintain privacy.Starting in mid 2019 wedding_App has begun requiring identity confirmation of all members including free members. This is one of the ways wedding_App is working to give its clients a safer and better experience. By preventing free searches by non members, wedding_App is further securing the privacy of its members and insuring that only people interested in marriage contact the members.Payments for membership can be made through our secure payment gateway or by check to the agent closest to you. We accept Visa, Master Card, Discover, American Express and most debit cards. The management of wedding_App is dedicated to continuing investmenents in technology to stay at the cutting edge and provide its members with a safe and productive experience.",
    'Type': 'TERMS_OF_USE',

};


mongoose.model('static_content', static_content).find((error, result) => {
    if (result.length == 0) {

        mongoose.model('static_content', static_content).create(obj1, obj2, obj3, obj4, obj5,obj6,obj7,home,(error, success) => {
            if (error)
                console.log("Error is" + error)
            else
                console.log("Static faq content saved succesfully.", success);
        })
    }
});

