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