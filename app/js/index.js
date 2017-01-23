let css = "https://raw.githubusercontent.com/cooper-anderson/evan-clock/master/app/css/styles.css";

if (location.search != "") {
	css = location.search.split('=')[1];
}

//$("head").append(`<link rel="stylesheet" type="text/css" href="${css}">`);
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
	$("body").css({
		"position" : "absolute",
		"left" : "50%",
		"top" : "50%",
		"margin-left" : -$("body").width()/2,
		"margin-top" : -$("body").height()/2
	});
}

function updateText() {
	let milliseconds = new Date() - Date.parse("10:52 January 16, 2017");
	let hours = Math.floor(milliseconds / 3.6e6);
	$("#clock").html(hours + ' ' + pluralize(hours, "hour", "hours"));
}

setInterval(function() {
	updateText();
	centerText();
});