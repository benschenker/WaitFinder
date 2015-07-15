$(document).on("ready", function(){
    $.ajax({
    type: 'GET',
    url: 'https://api.parse.com/1/classes/rows2015',
    headers: {
        "X-Parse-Application-Id":"oZCi6F4meJO9rdq4mQRvt9XOwPSEOWhM4oueWHWL",
        "X-Parse-REST-API-Key":"DgNiZ5k2g48yVzvUxccw6Owl5CvtJTdSU0uh32cw"
    },
    // data:{"where":{ 
    // 	"location": {
    //      	"$nearSphere": {
    //       		"__type": "GeoPoint",
    //       		latitude: "29.941440559893664",
    //       		longitude: "-90.06779699009958"
    //      	}
    //   },
    //   "$maxDistanceInMiles": .1
    // }},
    success: function(data){
    	console.log('all of our data is here: ', data);
    	$("#result").text(Math.floor(Math.random()*30 + 1));
    }, 
    error: function(a,b,c){
    	console.error(a,b,c);
    }
})
    // //insert average of test data into result span
    // $("#result").text(window.waitFinder.getAverage(window.waitFinder.testData));
});