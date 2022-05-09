const mongoose = require('mongoose');

let formSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: Number
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    major:{
        type: String
    },
    semester:{
        type: Number
    },
    roommateLanguage:{
        type: String
    },
    planVisitors:{
        type: Number
    },
    preferStudy:{
        type: Number
    },
    bedtime:{
        type: Number
    },
    roommateGender:{
        type: Number
    },
    preferInternational:{
        type: String
    },
    preferedAgeRange:{
        type: String
    },
    btnradio4:{
        type: String
    },
    roommateMajor:{
        type: String
    },
    roommateSemester:{
        type: String
    },
    budget:{
        type: Number
    },
    btnradio7:{
        type: String
    },
    aalborgSection:{
        type: String
    }


})







/* 

const formSchema = new mongoose.Schema(
    {



        data: Object,
    },
    //{ collection: "Answers" }
);
 */
const Form = mongoose.model("Form", formSchema);
/* 
const formData = bodyData => {
    Form({ data: bodyData }).save(err => {
        if (err) {
            throw err;
        }
    });
};  */