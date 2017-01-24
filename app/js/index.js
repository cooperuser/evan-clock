let css = "https://raw.githubusercontent.com/cooper-anderson/evan-clock/master/app/css/styles.css", electron;

if (typeof __dirname != "undefined") {
	electron = require("electron");
	addDefaultTrafficLights(electron);
}

if (location.search != "") {
	css = location.search.split('=')[1];
}

$.ajax({
	url: css,
	success:function(data){
		$("<style></style>").appendTo("head").html(data);
	}
})

function temp() {
	location = "index.html?css=https://raw.githubusercontent.com/cooper-anderson/evan-clock/master/app/css/styles.css";
}

function pluralize(value, singular, plural) {
	if (value == 1) {
		return singular;
	}
	return plural;
}

function centerText() {
	$(".main").css({
		"position" : "absolute",
		"left" : "50%",
		"top" : "50%",
		"margin-left" : -$(".main").width()/2,
		"margin-top" : -$(".main").height()/2
	});
}

function updateText() {
	let milliseconds = new Date() - Date.parse("10:52 January 16, 2017");
	let hours = Math.ceil(milliseconds / 3.6e6);
	$("#clock").html(hours + ' ' + pluralize(hours, "hour", "hours"));
}

setInterval(function() {
	updateText();
	centerText();
});