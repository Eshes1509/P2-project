const mongoose = require('mongoose');











const formSchema = new mongoose.Schema(
    {
        data: Object,
    },
    //{ collection: "Answers" }
);

const Form = mongoose.model("Form", formSchema);
/* 
const formData = bodyData => {
    Form({ data: bodyData }).save(err => {
        if (err) {
            throw err;
        }
    });
};  */