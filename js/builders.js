$(window).on('load', function () {
	setupPage();
});

$(document).on('click', '#add-builder', showAddBuilder);
$(document).on('click', '#remove-modal', removeModal);

function setupPage() {
	$(document).find("table").each(function () {
		$(this).addClass("is-narrow");
	});

	$(".page").find("img").each(function () {
		$(this).remove();
	});
}

function showAddBuilder() {
	$('.modal').addClass('is-active');
	$('.modal').find("img").each(function () {
		$(this).remove();
	});
}

function removeModal() {
	$('.modal').removeClass('is-active');
}