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
function getAverage(collection){
    var sum = collection.reduce(function(accumulator, val){
        return accumulator + (val.timeArrived-val.timeCalled);
    }, 0);

    var average = sum/collection.length;
//Converting miliseconds to minutes.
    return average/60000;
}

console.log(getAverage(data.result));
