var data = {
    result: [
        {
            "type": "burglary",
            "timeCalled": new Date("June 12 2015"),
            "timeArrived": new Date("June 12 2015 00:30")
        },
        {
            "type": "arson",
            "timeCalled": new Date("June 12 2015"),
            "timeArrived": new Date("June 12 2015 1:00")
        }
    
    ]
};
//Take an array return average wait time in minutes.
var getAverage =function (collection){
    var sum = collection.reduce(function(accumulator, val){
        return accumulator + (val.timeArrived-val.timeCalled);
    }, 0);
    
    /* Using moment.js
    var getAverage =function (collection){
        var sum = collection.reduce(function(accumulator, val){
            var arrival = moment(val.timearrival)
            var created = moment(val.timecreate)
            return accumulator + (arrival.diff(created,"minutes"));
        }, 0);
        var average = sum/collection.length;
        return average;
    }
    */

    var average = sum/collection.length;
//Converting miliseconds to minutes.
    return average/60000;
}
//this is an example of how to use our function.
//console.log(getAverage(data.result));

window.waitFinder = {
  getAverage: getAverage,
  testData: data.result
};