const mongoose = require('mongoose');
const schema = mongoose.Schema;
let packages = new schema(
    {
        packageType:
        {
            type: String
        },
        packageTime: {
            type: String
        },
        currency: {
            type: String,
            default:'SR'
        },
        packagePrice: {
            type: String
        },
        packageTimeUnit: {
            type: String
        },
        packageDescription:
        [{ type: String}],
           
        
        status: {
            type: String,
            enum: ["ACTIVE", "BLOCK", 'DELETE'],
            default: "ACTIVE"
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model('packages', packages, "packages");
mongoose.model('packages', packages).find((error, result) => {
    if (result.length == 0) {

        const obj = [
            {
                "packageType": "Free",
                "packagePrice": "0",
                "packageTime": "1",
                "packageTimeUnit": "months",
                "packageDescription": [
                    "Not verified",
                    "View all profiles only",
                    "Receive interest notifcation from others"
                ]
            },
            {
                "packageType": "Silver",
                "packagePrice": "100",
                "packageTime": "4",
                "packageTimeUnit": "months",
                "packageDescription": [
                    "View all profiles",
                    "Express and receive interest in other users",
                    "Men can propose",
                    "Ladies can accept proposal",
                    "Share songs"
                ]
            },
            {
                "packageType": "Gold", "packagePrice": "250",
                "packageTime": "4",
                "packageTimeUnit": "months",
                "packageDescription": [
                    "View all profiles",
                    "Express and receive interest in other users",
                    "Men can propose",
                    "Ladies can accept proposal",
                    "Share songs"
                ]
            },
            {
                "packageType": "Diamond",
                "packagePrice": "400",
                "packageTime": "12",
                "packageTimeUnit": "months",
                "packageDescription": [
                    "View all profiles",
                    "Express and receive interest in other users",
                    "Men can propose",
                    "Ladies can accept proposal",
                    "Share songs"
                ]
            }
        ]

        mongoose.model('packages', packages).insertMany(obj, (error, success) => {
            if (error)
                console.log("Error is" + error)
            else
                console.log("Default packages saved succesfully.", success);
        })
    }
});

