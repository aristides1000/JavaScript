/*
var a = 1;
var b = "Fernando";

console.log( a );
console.warn( a );
console.error( a );
console.info( a );

console.log( a + a );
*/

/*
console.log( a );
console.log( b );
console.log( c );

var a = "Fernando";
var b = 3;
var c = true;

console.log( a );
console.log( b );
console.log( c );
*/
/*JavaScript es Asíncrono? qué es Asíncrono?*/

/*
function imprimir(){
	for ( var i = 0; i < 8000; i++ ) {
		
		console.log("Imprimio")

	}
}

function presionoClick(){

	console.log("Click en boton");

}

imprimir();
*/

/*Orden de las importaciones*/
/*
var nombre;
*/


/*
Los tipos de datos en JavasCript son los tipos primitivos y los tipos objetos
Los tipos primitivos son un tipo de dato que apuntan a un sólo valor
Hay cinco tipos de datos primitivos
*/

//tipos de datos primitivos

/*OJO Los que van despues del null no son los tipos de datos, son los nombres de las variables OJO*/
/*
var num = 10;
var str = "Texto";
var bol = true;
*/
/*el bol es booleano osea true or false*/
/*
var und = undefined;
*/
/*los tipo de dato und son los indefinidos, los que no hemos definido aún*/
/*
var nul = null;
*/
/*los nul son los null osea los vacíos*/
/*
console.log( num );

num = str;

console.log( num );

bol = 10

console.log( bol );
*/

//ahora vienen las variables objetos
/*
var obj = {
	número: 10,
	texto: "Nuevo texto",

	objHijo: {
		numero2: 20,
		text2: "Nuevo texto 2"
	}

};

console.log( obj );
*/
/*
Las variables primitivas llevan un solo atributo, en cambio las variables de tipo objeto tienen más de un atributo y van entre llaves {}
como el caso anterior
*/

/*
OJO OJO OJO
Los objetos pueden tener otros objetos dentro

*/

//Por valor y por referencia
/*
var a = 10;
var b = a;

console.log("a: ", a);
console.log("b: ", b);

a = 20; 

console.log("a: ", a);
console.log("b: ", b);

var c = {
	nombre: "Juana"
}
var d = c;

console.log("c: ", c);
console.log("d: ", d);

c.nombre = "Maria";

console.log("c: ", c);
console.log("d: ", d);

d.nombre = "Pedro";

console.log("c: ", c);
console.log("d: ", d);
*/

/*
Los tipos de datos primitivos pasan datos por valor,
en cambio los tipos de objetos pasan datos por referencia
*/

//Notación de punto y corchetes 

/*
var persona = {
	nombre: "Juana",
	apellido: "Herrera",
	edad: 25,
	direccion: {
		pais: "Costa Rica",
		ciudad: "San José",
		edificio: {
			nombre: "Edificio principal",
			telefono: "2222-3333"
		}
	}
};
*/

/*
console.log(persona.nombre);
*/

/*
console.log(persona.direccion.pais);
console.log(persona.direccion);
*/
/*
persona.direccion.zipcode = 11101;
*/
/*
console.log(persona.direccion);
console.log(persona.direccion.zipcode);

console.log(persona.direccion.edificio.telefono);
*/

/*Vamos a hacer referencia a la clase anterior Por valor y por referencia*/

/*
var edificio = persona.direccion.edificio;

edificio.nopiso = "8vo piso";

console.log( persona );
*/

/*Hasta aquí va la notación de punto*/

/*Ahora va la notación de corchetes*/
/*OJO corchetes no so llaves*/

/*
var campo = "";

console.log(persona["direccion"]["pais"]);
*/

/*esta parte captura de forma dinámica lo que yo deseo*/

/*
var campo = "edad";

console.log(persona[campo]);

console.log( persona.edad2 )
*/

//funciones en JavaScript

//var a = 30;

/*
var a = 40;

function primeraFuncion(){

	//var a = 20;

	//console.log( a );

}
*/

//primeraFuncion();

/*
OJO
Las funciones siempre deben estar definidas al principio
nunca al final de las funciones porque si no, no se las toma en cuenta

var a = 40;
*/

/*
OJO
Las funciones y los procedimeintos son iguales en JavaScript

*/

/*
function primeraFuncion(){

	console.log("invocada");

}
*/

/*OJO las funciones siempre retornan un valor*/

/*
var miFuncion = primeraFuncion;
*/

/*
var a = primeraFuncion();
*/

/*
console.log( a );
*/

/*
DE HECHO, TODO RETORNA UN VALOR EN JAVASCRIPT
*/

//Sección 2, Clase 13
//Parámetros para las funciones
/*
function imprimir( nombre , apellido ){
*/
/*Si deseamos mandar otros parámetros los mandámos por comas*/
	
	/*
	if ( apellido === undefined ) {
		apellido = "xxx";
	}
	*/
	/*otra forma de hacer lo de arriba es*/
	/*
	apellido = apellido || "xxx";
	*/
	/*impresión por pantalla*/
	/*
	console.log( nombre + " " + apellido );
	*/
/*
}
*/
/*
imprimir( "Juan","Padilla" );
*/

/*Vamos a ver cómo se comportan las funciones con objetos*/
/*
function imprimir( persona ){
*/
/*
	console.log( persona.nombre + " " + persona.apellido );

	persona.nombre = "Maria";
*/

/*
}
*/

/*
var persona = {
	nombre: "Juan",
	apellido: "Padilla"
}
*/
/*también los objetos pueden ser anónimos*/
/*imprimir(obj*//*{
	nombre: "Juan",
	apellido: "Padilla"
}*//*);*/
/*
console.log( obj );
*/

/*Ahora vamos a mandar una función por función*/

/*
las funciones como los objetos y como los tipos primitivos pueden ser anónimos
en realidad las funciones son objetos
*/
/*
function imprimir( fn ){

	fn();

}

var persona = {
	nombre: "Juan",
	apellido: "Padilla"
}
*/
/*aquí vamos a poner una función explícita*/
/*
var miFuncion = function(){
	console.log("miFuncion")
}
*/

/*aquí vamos a declarar la función anónima*/
/*imprimir( miFuncion*/ /*function(){

	console.log("función anónima");

}*//*);*/

//Sección 2, Clase 13
//El retorno de las funciones

//Qué parámetros pueden retornar las funciones en javascript?
//Puede retornar un tipo primitivo
//Puede retornar un undifined
//Puede retornar un objeto
//Puede retornar un nulo
//o Puede retornar una función


/*Esta función retorna un número*/
/*
function obtenerAleatorio(){

	return Math.random();

}
*/
/*
console.log( obtenerAleatorio() + 10 );
*/
/*
function obtenerNombre(){
	return "Juan";
}
*/
/*
console.log( obtenerNombre() + " Padilla");
*/

/*
var nombre = obtenerNombre();
console.log( nombre );
*/
/*
function esMayor05(){

	if ( obtenerAleatorio() > 0.5 ) {
		return true;
	}else{
		return false;
	}

}
*/
/*
console.log( esMayor05() );
*/
/*
if ( esMayor05() ) {
	console.log("Es mayor a 0.5");
}else{
	console.log("Es menor a 0.5");
}
*/
/*Las funciones pueden retonar objetos*/
/*
function crearPersona( nombre, apellido ){
*/
	/*Los objetos en las funciones las podemos regresar de dos maneras explícitas o anónimas*/
	/*esto es un objeto explícito*/
	/*var obj = {};*/
	/*esto es un objeto anónimo*/
/*	return {
		nombre: nombre,
		apellido: apellido
	}
}
*/

/*
var persona = crearPersona("María", "Paz");
*/

/*
console.log( persona.nombre );
console.log( persona.apellido );
*/

/*Funciones que devuelven funciones*/

/*
function creaFuncion(){

	return function( nombre ){
		console.log("Me creo " + nombre )

		return function(){
			console.log("Segunda funcion")
		}
	}

}

var nuevaFuncion = creaFuncion();

var segundaFuncion = nuevaFuncion( persona.nombre );

segundaFuncion();
*/

//Seccion 2, Clase 15
//Funciones de Primera Clase
/*
function a(){

	console.log("Función A");

}
*/
/*esta es la invocación de la función*/
/*
a();
*/
/*OJO si escribimos a.name nos retorna el nombre de la función, y no permite que lo reescribamos*/
/*Osea, que si escribimos a.name = "María"; nos va a retornar por consola "a" no "María"*/
/*Porque name es como una especie de palabra reservada*/
/*
a.nombre = "María";
a.direccion = { *//*a.direccion es un objeto*/
/*	pais: "Costa Rica",*//*estas son como sus propiedades*/
/*	ciudad: "San José",
	edificio:{
		piso: "8vo",
		nombre: "Edificio principal"
	}
}
*/
/*Las funciones son objetos*/

//Seccion 2, Clase 16
//Métodos y el objeto THIS

/*
var nombre = "Juan Carlos"

var persona = {*//*este es un objeto */
/*	nombre: "María",
	apellido: "Dubon",
	imprimirNombre: function(){

		console.log( this.nombre + " " + this.apellido )*/ /*el this aquí adentro hace referencia al objeto*/
/*
	},
	direccion:{
		pais: "Costa Rica",
		obtenerPais: function() {

			//console.log( this );
			//console.log ( "La dirección es en " + this.pais );

			var self = this;*/ /*el self no es una palabra reservada de Javascript aunque se use mucho*/
/*
			var nuevaDireccion = function(){
				
				console.log( self );
				console.log ( "La dirección es en " + self.pais );

			}

			nuevaDireccion();
		}
	}

};

//persona.nombre = "Andres";

persona.imprimirNombre();
persona.direccion.obtenerPais();
*/

//Seccion 2, Clase 17
//La palabra reservada... new

//var carlos = new Persona();

/*
function Persona(nombre, apellido){
	*/
	/*
	this.nombre = "Juan";
	this.apellido = "Mendoza";
	*/
	/*
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = 30;
	*/
	//console.log("Pasó por aquí")
	/*
	this.imprimirPersona = function(){
		return this.nombre + " " + this.apellido + "("+ this.edad +")";
	}

}
*/
/*
var juan = new Persona("Juan", "Mendoza");*/ /*si yo le quito la palabra reservada new el función Persona, coloca los objetos nombre,apellido y edad en window, osea en lo global, no reserva espacio en memoria*/
/*
console.log( juan );
console.log( juan.nombre );
console.log( juan.imprimirPersona() );
*/
/*
console.log( juan.imprimirPersona() );
*/

//Seccion 2, Clase 18
//El señor de los anillos :: The JavaScript Game

/*function Jugador( nombre ){*//*las clases van siempre en mayúsculas e indica que es una función de primera clase*/
/*
	this.nombre = nombre;
	this.pv = 100;
	this.sp = 100;

	this.curar = function( jugadorObjetivo ){

		if ( this.sp >= 40 ) {
			
			this.sp -= 40;*/
			//jugadorObjetivo.pv = jugadorObjetivo.pv + 20;
			/*esto de aquí abajo es lo mismo que lo de arriba*//*
			jugadorObjetivo.pv += 20;			
		}else{
			console.info( this.nombre + " no tiene sp")
		}

		this.estado( jugadorObjetivo );
	}

	this.tirarFlecha = function( jugadorObjetivo ){

		if ( jugadorObjetivo.pv > 40 ) {
			
			jugadorObjetivo.pv -= 40;

		}else{
			jugadorObjetivo.pv = 0;
			console.error( jugadorObjetivo.nombre + " está muerto")
		}

			this.estado( jugadorObjetivo );
		 

	}

	this.estado = function( jugadorObjetivo ){

		console.info( this );
		console.info( jugadorObjetivo );

	}
};

var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log( gandalf );
console.log( legolas );

gandalf.curar( legolas );
*/
/*esta parte ya no es tan necesaria*/
/*
console.log( gandalf );
console.log( legolas );
*/

//Seccion 2, Clase 19
//Prototipos: prototype

function Persona(){
	this.nombre   = "Fernando";
	this.apellido = "Herrera";
	this.edad     = 30;
	this.pais     = "Costa Rica";

/*Esto ya no es necesario*/
/*
	this.imprimirInfo = function(){
		console.log( this.nombre + " " + this.apellido + "("+ this.edad +")");
	}
*/
}

/*
Persona.prototype.pais = "Costa Rica";
*/

Persona.prototype.imprimirInfo = function(){
	console.log( this.nombre + " " + this.apellido + "("+ this.edad +")");
}

var fer = new Persona();

/*La parte de abajo no es necesaria*/
/*
fer.imprimirInfo();
*/

/*
console.log( fer );
console.log( fer.imprimirInfo() );
*/

/*Siempre estamos usando prototipos todo el tiempo*/
/*¿Qué son los prototipos realmente?*/
/*los prototipos son los valores predeterminados de una variable o una palabra reservada es por ello que siempre estamos usando prototipos*/
/*esto lo podemos ver en la consola de nuestros navegadores*/

Number.prototype.esPositivo = function(){

	if ( this > 0 ) {
		return true;
	}else{
		return false;
	}

}