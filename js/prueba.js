//or with jQuery
$(document).ready(function(){
	$('.datepicker').datepicker();
});

$(document).ready(function(){
	$('select').formSelect();
});

$('#Iniciar').click(function(){
	$('#p1').show();
	$('#Iniciar').hide();
});

$('#Siguiente').click(function(){
	if ($("#p1").show()) {
		$("#p1").hide();
	}
	if ($("#p2").hide()) {
		$("#p2").show();
	}
	if ($("#p3").hide()) {
		$("#p3").show();
	}
});