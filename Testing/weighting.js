function weighting(request) {
    let weight = [];
    /*
    const testCase = {
        firstName:"Tobias",
        lastName:"Hansen",
        gender:"1",
        email:"Tobias.c.h@hotmail.com",
        age:"2",
        major:"AD",
        semester:"1",
        roommateLanguage:"BS",
        planVisitorsRoommate:"2",
        planVisitors:"2",
        preferStudy:"2",
        bedtime:"2",
        roommateGender:"3",
        preferInternational:"Yes",
        preferredAgeRange:"2",
        btnradio4:"smokerYes",
        roommateMajor:"Yes",
        roommateSemester:"Yes",
        budget:"3",
        btnradio7:"handicapFriendlyNo",
        aalborgSection:"sectionAalborgSE",
        Q1:"preferStudy",
        Q2:"bedtime",
        Q3:"btnradio4",
        Q4:"roommateGender",
        Q5:"preferredAgeRange"
    }*/
    
    
    
    const x = [
        "planVisitorsRoommate",
        "preferStudy",
        "bedtime",
        "roommateGender",
        "roommateLanguage",
        "preferredAgeRange",
        "btnradio4",
        "roommateMajor",
        "roommateSemester",
    ];
    let vigtigID = [
        Q1 = "preferStudy",
        Q2 = "bedtime",
        Q3 = "btnradio4",
        Q4 = "roommateGender",
        Q5 = "preferredAgeRange"
    ];
    

    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 5; j++) {
            if (vigtigID[j] === x[i]) {
                weight[i] = 0.1;
                break;
            } else {
                weight[i] = 0.05;
            }
        }
    }

    /* for (let i = 0; i < 15; i++) {
        console.log(weight[i]);
    } */

    return weight;
}

module.exports = weighting
