function compatability(request, resident, weight) {
    let fitness = [];
    for (let i = 0; i < resident.length; i++) {
        let array = [];
        let sum = 0;

        let X1 = x1(
            request.body.planVisitorsRoommate,
            resident[i].planVisitors
        );
        let X2 = x2(
            resident[i].planVisitorsRoommate,
            request.body.planVisitors
        );
        let X3 = x3(request.body.preferStudy, resident[i].preferStudy);
        let X4 = x4(request.body.bedtime, resident[i].bedtime);
        let X5 = x5(request.body.roommateGender, resident[i].gender);
        let X6 = x6(resident[i].roommateGender, request.body.gender);
        let X7 = x7(
            request.body.preferInternational,
            request.body.roommateLanguage,
            resident[i].roommateLanguage
        );
        let X8 = x8(
            resident[i].preferInternational,
            resident[i].roommateLanguage,
            request.body.roommateLanguage
        );
        let X9 = x9(request.body.preferredAgeRange, resident[i].age);
        let X10 = x10(resident[i].preferredAgeRange, request.body.age);
        let X11 = x11(request.body.btnradio4, resident[i].btnradio4);
        let X12 = x12(
            request.body.roommateMajor,
            request.body.major,
            resident[i].major
        );
        let X13 = x13(
            resident[i].roommateMajor,
            resident[i].major,
            request.body.major
        );
        let X14 = x14(
            request.body.roommateSemester,
            request.body.semester,
            resident[i].semester
        );
        let X15 = x15(
            resident[i].roommateSemester,
            resident[i].semester,
            request.body.semester
        );
        

        if (
            resident[i].btnradio7 === "handicapFriendlyNo" &&
            request.body.btnradio7 === "handicapFriendlyYes"
        ) {
            console.log("Handicap");
            break;
        } else if (
            parseInt(resident[i].budget) > parseInt(request.body.budget)
        ) {
            console.log("Budget");
            break;
        } else if (request.body.aalborgSection !== resident[i].aalborgSection) {
            console.log("Section");
            break;
        } else {
            array[0] = X1;
            array[1] = X2;
            array[2] = X3;
            array[3] = X4;
            array[4] = X5;
            array[5] = X6;
            array[6] = X7;
            array[7] = X8;
            array[8] = X9;
            array[9] = X10;
            array[10] = X11;
            array[11] = X12;
            array[12] = X13;
            array[13] = X14;
            array[14] = X15;
            console.log("X'er");
        }

        for (let j = 0; j < 15; j++) {
            sum += array[j] * weight[j];
            
        }

        let fit = {
            fitness: Math.round(sum * 100),
            email: resident[i].email,
            name: resident[i].firstName + " " + resident[i].lastName,
            aalborgSection: resident[i].aalborgSection,
            budget: resident[i].budget,
            /* handicapFriendly: btnradio7, */
        };
        fitness.push(fit);
    }

    fitness.sort((a, b) => (a.fitness < b.fitness ? 1 : -1));

    for (let i = 0; i < 3; i++) {
        console.log(fitness[i]);
    }

    return fitness;
 
}

module.exports = compatability;