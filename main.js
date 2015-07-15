$(document).on("ready", function(){
    //insert average of test data into result span
    $("#result").text(window.waitFinder.getAverage(window.waitFinder.testData));
});