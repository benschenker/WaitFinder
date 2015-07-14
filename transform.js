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
}


var sum = data.result.reduce(function(accumulator, val){
    return accumulator + (val.timeArrived-val.timeCalled);

}, 0);


var average = sum/data.result.length;

console.log(average/60000);