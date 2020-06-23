$(window).on('load', function () {
	setupPage();
});


$(document).on('click', '#add-modal', showAddTouch);
$(document).on('click', '#remove-modal', removeAddTouch);

function setupPage() {
	$(document).find("table").each(function () {
		$(this).addClass("is-narrow");
	});

	$(".page").find("img").each(function () {
		$(this).remove();
	});
}

function showAddTouch() {
	$('.modal').addClass('is-active');
}

function removeAddTouch() {
	$('.modal').removeClass('is-active');
}