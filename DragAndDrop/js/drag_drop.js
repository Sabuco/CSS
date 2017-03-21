$(init);

function init() {
	$('.drag').draggable({
		containment: '.container'
	});

	$('.drop').droppable({
		drop: EventoDropeo
	});
}

function EventoDropeo(evento) {
	window.location.href = "https://www.google.es/";
}