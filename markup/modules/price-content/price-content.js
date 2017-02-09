$(document).ready(function () {
	if ($('*').is('.price-content')) {
		$('.inside-frame__content').height($('.price-content').height() - 260);
	} else {
		console.log('false');
	}
});