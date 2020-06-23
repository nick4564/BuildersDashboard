$(window).on('load', function () {
	setupPage();
});

$(document).on('click', '#touch-button', showTouchProject);
$(document).on('click', '#assign-button', showAssignTask);
$(document).on('click', '.remove-modal', removeModal);

function setupPage() {
	$(document).find("table").each(function () {
		$(this).addClass("is-narrow");
	});

	$(".page").find("img").each(function () {
		$(this).remove();
	});
}

function showTouchProject() {
	$('#touch-modal').addClass('is-active');
}

function showAssignTask() {
	$('#task-modal').addClass('is-active');
}

function removeModal() {
	$('.modal').removeClass('is-active');
}