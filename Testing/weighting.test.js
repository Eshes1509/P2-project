const weighting = require('./weighting');


const vigtigTest = [
    "preferStudy",
    "bedtime",
    "roommateLanguage",
    "roommateGender",
    "preferredAgeRange"
]

test('weighting test', () => {
    expect(
        weighting(vigtigTest)
    ).toEqual([
        0.05, 0.1, 0.1, 0.1, 0.05,
        0.1, 0.1, 0.05, 0.05, 0.05,
        0.05, 0.05, 0.05, 0.05, 0.05
        
    ])
})




