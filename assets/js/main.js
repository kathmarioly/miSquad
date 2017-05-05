function Persona(nombre, apellido, edad, hobbies){

	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.saludar = function(){
		document.write(" <strong>Nombre: </strong> " + this.nombre + " <strong>Apellido:</strong> " + this.apellido + " <strong>Edad:</strong> " + this.edad + " <strong>Hobbiets: </strong><li> " + this.hobbies + "</li>")
	}


}
var Romina = new Persona("Romina", "Torres", 31, "Componer, Cantar, Tocar instrumentos.")
Romina.saludar();
var Paulina = new Persona("Paulina", "Gonzales", 26, "Video-juegos, Series, Manualidades.")
Paulina.saludar();
var Katerine = new Persona("Katerine", "Sandoval", 24, "Arte, Musica, Literatura.")
Katerine.saludar();
var Natalia = new Persona("Natalia", "Garrido", 27, "Animales, Comida, Series.")
Natalia.saludar();
var Natalia = new Persona("Natalia", "Vivanco", 27, "Leer, Jardinear, Manualidades.")
Natalia.saludar();

var validarRomina = document.getElementById("Romina");
var validarPaulina = document.getElementById("Paulina");
var validarKaterine = document.getElementById("Katerine");
var validarNatalia = document.getElementById("Natalia");
var validarNattalia = document.getElementById("Nattalia");
