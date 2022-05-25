const compatability = require('./compatability');

mockRequest = {
    firstName: 'Kasper ',
    lastName: 'AB',
    gender: '1',
    email: 'KasperAB@gmail.com',
    age: '1',
    major: 'EN',
    semester: '1',
    roommateLanguage: 'AW',
    planVisitorsRoommate: '1',
    planVisitors: '1',
    preferStudy: '1',
    bedtime: '1',
    roommateGender: '1',
    preferInternational: 'Yes',
    preferredAgeRange: '1',
    btnradio4: 'smokerNo',
    roommateMajor: 'No',
    roommateSemester: 'No',
    budget: '5',
    btnradio7: 'handicapFriendlyNo',
    aalborgSection: 'sectionAalborgSE',
    Q1: 'preferStudy',
    Q2: 'preferredAgeRange',
    Q3: 'roommateGender',
    Q4: 'planVisitorsRoommate',
    Q5: 'roommateSemester'
}

mockResident = {
    firstName: 'Thomas',
    lastName: 'Madsen',
    gender: '1',
    email: 'thomaseshes@gmail.com',
    age: '1',
    major: 'DAT',
    semester: '1',
    roommateLanguage: 'AU',
    planVisitorsRoommate: '1',
    planVisitors: '1',
    preferStudy: '1',
    bedtime: '1',
    roommateGender: '1',
    preferInternational: 'No',
    preferredAgeRange: '1',
    btnradio4: 'smokerNo',
    roommateMajor: 'No',
    roommateSemester: 'No',
    budget: '5',
    btnradio7: 'handicapFriendlyNo',
    aalborgSection: 'sectionAalborgSE',
    Q1: 'planVisitorsRoommate',
    Q2: 'preferStudy',
    Q3: 'bedtime',
    Q4: 'roommateGender',
    Q5: 'preferredAgeRange'
}

mockWeight = [
    0.1,  0.1, 0.05,  0.1,
   0.05,  0.1, 0.05, 0.05,
    0.1, 0.05, 0.05, 0.05,
   0.05, 0.05, 0.05
 ]


mockResidentWeight = [
    0.1,  0.1,  0.1,  0.1,
   0.05,  0.1, 0.05, 0.05,
   0.05, 0.05, 0.05, 0.05,
   0.05, 0.05, 0.05
 ]




test('compatability test', () => {
    expect(
        compatability(mockRequest, mockResident, mockWeight)
    ).toBe()
})





/*
test('weighting test', () => {
    expect(
        weighting(vigtigTest)
    ).toEqual([
        0.05, 0.1, 0.1, 0.1, 0.05,
        0.1, 0.1, 0.05, 0.05, 0.05,
        0.05, 0.05, 0.05, 0.05, 0.05
        
    ])
})
*/