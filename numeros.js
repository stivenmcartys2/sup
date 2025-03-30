// Campo numeros
var numeros = document.getElementById('numeros');

// Poner cursor en el campo numeros
numeros.focus();

numeros.onkeydown = function(e){
	// Permitir la tecla para borrar
	if (e.key == 'Backspace') return true;

	// Permitir flecha izquierda
	if (e.key == 'ArrowLeft') return true;

	// Permitir flecha derecha
	if (e.key == 'ArrowRight') return true;

	// Bloquear tecla de espacio
	if (e.key == ' ') return false;

	// Bloquear tecla si no es un numero
	if (isNaN(e.key)) return false;
};

numeros.onkeyup = function(){
	numeros.value = numeros.value
					// Borrar todos los espacios
					.replace(/\s/g, '')

					// Agregar un espacio cada dos numeros
					.replace(/([0-9]{1})/g, '$1 ')

					// Borrar espacio al final
					.trim();
};