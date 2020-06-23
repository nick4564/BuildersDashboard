$(document).on('click', '.navbar-burger', function () {
	$(".navbar-burger").toggleClass("is-active");
	$(".navbar-menu").toggleClass("is-active");
});


$(document).on("click", "#logout-button", function () {
	window.location.href = "https://c6ezh197.caspio.com/folderlogout";
});