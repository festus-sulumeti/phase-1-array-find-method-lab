// code your solution here

const record =  [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"},
    { year: "2011", result: "W"},
    { year: "2010", result: "N/A"}
]

function superbowlWin(record) {
    let result = record.find(record => record.result === "W")
    return !!result ? result.year : undefined
}