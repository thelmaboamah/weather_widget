


$("#getWeather").click(function() {
	var city = $("#city").val();

	$.getJSON("http://api.openweathermap.org/data/2.5/weather", {
	appid: "b1b15e88fa797225412429c1c50c122a",
	q: city,
	units: "imperial"
}, function(data){

	//Display city name
	$("#name").html("You're in " + data.name);
	
	//Display temparature
	$("#temperature").html("It is " + data.main.temp + "°F");
	
	//Display weather
	$("#weather").html("The weather is " + data.weather[0].main);
	
	$("#icon").attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")

});

});