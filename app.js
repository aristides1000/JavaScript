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
DE HECHO RETORNA UN VALOR EN JAVASCRIPT
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
/*imprimir(obj*/
/*{
	nombre: "Juan",
	apellido: "Padilla"
}*/
/*);*/
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
/*imprimir( miFuncion*/
/*function(){

   console.log("función anónima");

}*/
/*);*/

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
a.direccion = { */
/*a.direccion es un objeto*/
/*	pais: "Costa Rica",*/
/*estas son como sus propiedades*/
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

var persona = {*/
/*este es un objeto */
/*	nombre: "María",
	apellido: "Dubon",
	imprimirNombre: function(){

		console.log( this.nombre + " " + this.apellido )*/
/*el this aquí adentro hace referencia al objeto*/
/*
	},
	direccion:{
		pais: "Costa Rica",
		obtenerPais: function() {

			//console.log( this );
			//console.log ( "La dirección es en " + this.pais );

			var self = this;*/
/*el self no es una palabra reservada de Javascript aunque se use mucho*/
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
var juan = new Persona("Juan", "Mendoza");*/
/*si yo le quito la palabra reservada new el función Persona, coloca los objetos nombre,apellido y edad en window, osea en lo global, no reserva espacio en memoria*/
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

/*function Jugador( nombre ){*/
/*las clases van siempre en mayúsculas e indica que es una función de primera clase*/
/*
	this.nombre = nombre;
	this.pv = 100;
	this.sp = 100;

	this.curar = function( jugadorObjetivo ){

		if ( this.sp >= 40 ) {
			
			this.sp -= 40;*/
//jugadorObjetivo.pv = jugadorObjetivo.pv + 20;
/*esto de aquí abajo es lo mismo que lo de arriba*/
/*
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

/*
function Persona(){
	this.nombre   = "Fernando";
	this.apellido = "Herrera";
	this.edad     = 30;
	this.pais     = "Costa Rica";
*/

/*Esto ya no es necesario*/
/*
	this.imprimirInfo = function(){
		console.log( this.nombre + " " + this.apellido + "("+ this.edad +")");
	}
*/

/*
}
*/

/*
Persona.prototype.pais = "Costa Rica";
*/

/*
Persona.prototype.imprimirInfo = function(){
	console.log( this.nombre + " " + this.apellido + "("+ this.edad +")");
}

var fer = new Persona();
*/
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

/*
Number.prototype.esPositivo = function(){

	if ( this > 0 ) {
		return true;
	}else{
		return false;
	}
}
*/

//Seccion 2, Clase 20
//Funciones Anónimas

/*
*Las funciones anónimas nos ayudan a mantener el código bastante encapsulado o mejor dicho, para que nuestro código sea accidentalmente manipulado por otras secciones de nuestro programa
*No sólo se usan para esto pero ese es su uso más común
*/

/*cómo evitamos el mal comportamiento de a y su cambio, bueno, hay muchas maneras*/
/*La mejor de todas es a través de la utilización de las funciones anónimas*/

/*dos paréntesis juntos representan una invocación*/
/*
(function(){*/
/*esta sintaxis es de una función anónima*/
/*y se mueve el código comentado dentro de esta función*/
/*
var a = 10;

console.log( a );

function cambiarA(){
	a=20;
}

cambiarA();

console.log( a );

})();*/
/*esta función se invoca con */

/*Esta es otra forma de invocar funciones anónimas*/
/*
function ejecutarFuncion( fn ){
	if ( fn() === 1 ) {
		return true;
	}else{
		return false;
	}

	return true;
};

console.log( 

	ejecutarFuncion( function(){
		console.log("función anónima ejecutada!");
		return 0;
	})

);
*/

/*Subimos este código y lo metemos en console.log*/
/*
ejecutarFuncion( function(){
	console.log("función anónima ejecutada!");
	return 1;
});
*/

//Seccion 2, Clase 21
//Funciones typeof e instanceof... interesante

/*Va a ver momentos en los que nosotros necesitamos estar seguros del
tipo de dato que estamos recibiendo antes de hacer alguna acción allí es donde entra en juego la función typeof*/
/*Esta función nos sirve para verificar el tipo de dato que estamos pasando*/
/*Y da como inicio al polimorfismo*/

/*function identifica( param ){ */
/*lo que está entre los paréntesis son los parámetros*/

//console.log( typeof param );/*con esta función indentidifacmos el tipo de dato*/

/*
if ( typeof param == "function" ){
    param();
}else{
    console.log( param );
}
*/
/*console.log( typeof param );*/
/*Si quiero saber que tipo de dato es lo hago con un typeof*/
/*console.log( param instanceof Persona );*/
/* instanceof es como decir === */
/* Esta parte de arriba va a retornar un booleano */
/*
}

function Persona(){
	this.nombre = "Fernando";
	this.edad = 30;
}
*/
/*
var fernando = new Persona();

identifica( fernando );*/
/*Aquí va el dato que queremos identificar que queremos identificar*/
/*
Toda función en realidad es un objeto
*/
/*si encierro a fernando entre comillas "" lo toma como palabra, no como persona*/
/*
los tipos de datos que muestra por consola son:
( 1 ) number
( "1" ) string
( {} ) object
( juan ) cuando yo escribo juan me retorna que es un objeto, ya que es un objeto, "para saber si es un objeto tenemos que tener en cuenta que está entre llaves {}"
( function(){} ) de tipo funcion
*/

//Arreglos
//Sección 3, Clase 22

/*Los arreglos en JavaScript son una colección de objetos*/
/*A pesar de que haya de números y de texto son objetos*/

/*Los arreglos son una colección de datos iguales del mismo tipo, eso es todo, no hay que perderse*/

/*esto new Array() es lo mismo que esto []*/
/*Se sabe que es un arreglo por que estamos en presencia de corchetes []*/

/*var arr = [5,4,3,2,1];
console.log( arr );*/
/*Los arreglos comienzan con la posición 0, no desde la posición 1*/
/*La posición arr [5] no existe por eso nos aparece como indefinida o undefined*/

/*console.log( arr [0], arr [4], arr [5] );

arr.reverse();
*/
/*la función arr.reverse() voltea la posición de los datos contenidos en el arreglo*/
/*
console.log( arr );
*/
/*La función Map nos permite ejecutar una función contra cada uno de los elementos sin hacer un ciclo for, sin hacer otra cosa*/
/*
arr = arr.map( function(elem){
	elem *= elem;
	return elem;
});
console.log( arr );

arr = arr.map( Math.sqrt );
*/
/*la función Math.sqrt ejecuta la raíz cuadrada del valor que le enviemos, en nuestro caso como estamos usando la función map, la aplica a cada uno de los valores que tengamos*/
/*
console.log( arr );
*/
/*sirve para mostrar resultados por consola, siempre es recomendable mostrar resultados por la consola*/

/*join tambien regresa un nuevo arreglo*/
/*el join lo que hace es traernos toda el arreglo unido con comas, ya que entre los parentesis del join, no especificamos más nada, osea, pega el arreglo*/
/*
arr = arr.join("|");
*/
/*aquí se le coloca el caracter o cadena de caracteres de separación que va a tener cada valor de nuestro arreglo, si no colocamos nada toma por defecto las comas de separación*/
/*
console.log( arr );
*/
/*La función del split hace lo contrario que la función del join, osea, que le quita los separadores de los arreglos que nosotros queramos*/
/*
arr = arr.split("|");
*/
/*dento del paréntesis colocamos los separadores que queremos eliminar*/
/*
console.log( arr );
*/
/*con la función de push, podemos hacer crecer el arreglo que creamos y le agregamos un nuevo valor al final del arreglo*/
/*
arr.push("6");
console.log( arr );
*/
/*con la función de unshift le agregamos un nuevo valor al arreglo al principio*/
/*
arr.unshift("0");
console.log( arr );

console.log( arr.toString() );
*/
/*console.log( arr.toString() ); sirve para expresar tal cual los arreglos*/
/*el toString() es mucho más rápido que el split()*/
/*
var elimine = arr.pop();
console.log( arr, elimine );
*/
/*la función pop(); nos sirve para eliminar el último valor del arreglo, además de ello esta función no solo lo elimina, sino que también lo almacena, es por ello que al hacer un console.log( arr, elimine ); nos muestra el valor almacenado*/
/*
arr.splice( 1, 0, "10", "20", "30" );
*/
/*la función splice( 1, 1); siempre recibe dos parámetros, dónde el primer parámetro nos dice la posición a la que queremos llegar, y el segundo valor es la cantidad de valores a partir de allí que deseo eliminar*/
/*y al colocar splice( 1, 6 ); nos elimina todo no importando que eliminemos todo y nos pasemos*/
/*a su vez se le pueden agregar parámetros, para ello lo colocámos como un 3er valor a los parámetros pasados, ejemplo arr.splice( 1, 1, "10" );, y no solo eso, tambien puedo meter los parámetros que me den la gana apartir de la posición que quice y eliminé según los parámetros escritos, ejemplo arr.splice( 1, 1, "10", "20", "30" );*/
/*el spice no necesariamente tiene que eliminar algo, si yo le coloco al segundo parámetro un valor de 0 entonces no elimina nada y coloca los valores que he colocado antes del valor número 1 osea, los coloca en la posición que quiero quiero antes del datos que estaba con anterioridad, por ejemplo: arr.splice( 1, 0, "10", "20", "30" );*/
/*
console.log( arr );
*/
/*la función console.log( arr ); nos sirve para mostrar por consola resultados*/

/*
arr = arr.slice( 1, 3 );
*/
/*la función slice(); es como decir un pedazo de pizza o un pedazo de pastel "un slice de pizza" y además de ello, el primer parámetro nos dice desde donde y el segundo parámetro nos dice los valores que vamos a cortar, por ejemplo arr = arr.slice( 0, 2 );*/
/*pero si hago esto arr = arr.slice( 1, 3 ); sólo nos agarra los valores que se encuentran comprendidos entre estos parámetros, osea, los valores que se encuentran en te la posición 1 hasta la posición 3 sin tomar el último valor, osea, que sólo va a tomar los valores que se encuentran localizados en la posición 1 y la posición 2*/
/*
console.log( arr );
*/

//Arreglos parte 2
//sección 3, clase 23
/*
var arr = [
	true,
	{*/
/*todo lo que esté entre llaves en javascript es un objeto*/
/*
		nombre:"Fernando",
		apellido:"Herrera"
	},
	function(){
		console.log("Estoy viviendo en un arreglo");
	},
	function( persona ){
		console.log( persona.nombre + " " + persona.apellido );
	},
	[
		"Fernando",
		"Carlos",
		"Hernando",
		"Melissa",
		[
			"Juan",
			"Pedro",
			"Dilcia",
			function(){
				console.log( this );
			}
		]
	]
];
*/
/*console.log( arr.length );*/
/*La función console.log( arr.length ); nos sirve para saber el largo de un arreglo, osea la cantidad de elementos que posee un arreglo*/
/*
console.log( arr );
console.log( arr[0] );*/
/*con esto le digo la posición a la que quiero apuntar y está entre conchetes "[]"*/
/*
console.log( arr[1].nombre + " " + arr[1].apellido );

arr[2]();*/
/*así se invocan a las funciones que se encuentran dentro de los arreglos*/
/*
arr[3]( arr[1] );*/
/*tiene mucho que ver con los arreglos ya definidos*/
/*
console.log( arr[4][4][1] ); */
/*para no asustarnos tenemos que seguir la cascadas de los arreglos*/
/*
var arreglo2 = arr[4][4];

arreglo2[1] = "Pedra!";

console.log( arreglo2 );
console.log( arr );

arreglo2[3]();
*/

//Argumentos
//Sección 3, Clase 24
/*
var arguments = 10;

function miFuncion(a,b,c,d) {

	if (arguments.length !== 4 ) {
		console.error("la función necesita 4 parametros");
		alert("la función necesita 4 parametros");
		return;*//*esto es para que nos retorne solo el error*/
	/*
	}
	*/
    //console.log(arguments);
    /*
    console.log( a + b + c + d );*//*ver linea 996 contenedora de miFuncion(10, 20, 30); para ver y comprender el error*/
    /*
    console.log( a, b, c, d );*//*da error porque undefined no es un número y la "d" es indefinida*/
    /*
    console.log( 30 + undefined );

}
*/
/*console.log( miFuncion() );*/
/*Aquí me aparece en la consola un undefined*/

/*miFuncion(10, 20, 30, 40, {}, function(){});*//*{} esto es un objeto anónimo*/
/*tambien pueden ir funciones así function(){}*/
/*así es cómo es como se debe colocar*/

/*
miFuncion(10, 20, 30, 40);*//*Esto me va a dar error porque no le estoy mandando el último parámetro*/

//Sobre carga de operadores en JavaScript
//Sección 3, Clase 25

/*La sobre carga de operadores es muy parecido a esto*/

/*
function crearProducto(){
	
}

function crearProducto(nombre){
	
}

function crearProducto(nombre, precio){
	
}
*/

/*Lo que busca la sobre carga de operadores tiene que ver con buscar la forma de que se agreguen nuevas características cada vez a una función, si hacemos esto en javascript lo que va a suceder es que se van a sobre-escribir la función con el último valor*/

/*En Javascript no se puede hacer la sobre carga de operadores pero hay formas de sobrellevar este error, una de las formas es esta*/
/*
function crearProducto(nombre, precio){
	
	nombre = nombre || "sin nombre";
	precio = precio || 0;

	console.log( "Producto:", nombre, "Precio:", precio );

}

function crearProducto100(nombre){

	crearProducto(nombre, 100);

}

function crearProductoCamisa( precio ){
	crearProducto("Camisa", precio);
}

crearProducto("Lapiz");
crearProducto100("Corrector");
crearProductoCamisa( 75 );
*/
//Polimorfismo en Javascript
//Sección 3, Clase 26

/*
El polimorfismo no es más que una función que puede recibir diferentes tipos de parámetros o diferentes tipos de datos  
*/
/*
function determinaDato( a ){

	if ( a === undefined ) {
		console.log("A es undefined... no se que hacer");
	}

	if ( typeof a === "number" ) {
		console.log("A es un número, y puedo hacer operación con números");
	}

	if ( typeof a === "string" ) {
		console.log("A es un texto, puedo hacer operaciones con textos");
	}

	if ( typeof a === "object" ) {
		console.log("A es un objeto... pero puede cualquier cosa...")
			
		if ( a instanceof Number ) {
			console.log("A es un objeto numérico...")
		}
	}
}
*/
/*
var b = new Number(3);*//*aquí lo estamos definiendo como un objeto, no como un valor primitivo, es un objeto de tipo número*/
/*
console.log( b );
*/
/*determinaDato({
		nombre:"Fernando"
});*//*Aquí se coloca el valor que deseamos evaluar*/
/*
determinaDato( b );
*/

//Cuidado con las funciones y su contexto
//Sección, Clase 27

/*
function crearFunciones(){*/
	/*todo lo que está dentro de las llaves de la función es su contexto*/
/*
	var arr = [];
	var numero = 1;

	for (var numero = 1; numero <= 5; numero ++ ) {
		
		arr.push( 

			(function(numero){

				return function(){
					console.log( numero );
				}

			})(numero)

		);

	}
*/

	/*esta parte ya no hace falta por la simplificación de arriba*/
	/*
	arr.push( 

		(function(numero){

			return function(){
				console.log( numero );
			}

		})(numero)

	);

	numero = 2;

	arr.push( function(){
		console.log( numero );
	});

	numero = 3;

	arr.push( function(){
		console.log( numero );
	});
	*/
	/*Hasta aquí es la parte que ya no nos importa*/


	//numero = 10;/*con esto lo que hago es que imprima un 10 como valor del número*/
	/*
	return arr;
}
*/
/*
var funciones = crearFunciones();

funciones[0]();
funciones[1]();
funciones[2]();
funciones[3]();
funciones[4]();
*/

//Objeto Number
//Sección 3, Clase 28

/*esto*/
//var a = 10;
/*No es lo mismo que esto*/
//var b = new Number(10);

/*
var a = 100.456456;
*/
/*
console.log( a.toFixed(5) );

a = a.toString();
console.log( a );*//*esto lo que hace es darnos el valor de a cómo si fuese una cadena de caracteres*/

/*
console.log( a );
console.log( a.toPrecision(2) );*//*con esta expresión solo toma los valores desde la izquierda a la derecha contando el número de caracteres que le pasemos en estos parámetros a.toPrecision(2)*/
/*
a = -10;
*/
/*a *= 10000000000000000000000;*//*javascript aguanta hasta 308 números exponenciales si superamos esta cantidad de exponenciales la pantalla nos muestra el valor de infinito osea, infinity por consola*/
/*Cabe acoar que también hay un infinity negativo, osea, -Infinity que se muestra por consola*/

/*Cuando dice por consola NaN not at number, quiere decir que sus valores no son numéricos*/

/*
console.log( a + 10 );

var b = new Number( "20" );

console.log( b );
console.log( b.valueOf() );
*/

//Objeto Booleano
//Sección 3, Clase 29

/*
var a = true;
var b = false;
*/

/*var x = "false";*//*Esto es un String, y por ende el valor booleano devuelve un true*/
/*var x = false;*//*así si da falso, porque no es un String, osea, no está entre comillas dobles, sino que está más bien escrito directamente*/


/*var a = new Boolean(undefined);*//*todos estos resultados me devuelven un true porque estoy enviando un string y todos los string devuelven como valor un true y OJO aunque escribamos "false" lo va a tomar como true porque se encuentra entre comillas y lo toma como un string*/
/*Para que agarre los verdaderos valores hay que quitarle las comillas, para que el 1 sea verdadero y el 0 falso*/
/*un string "" vacío también devuelve false, pero un string lleno devuelve true*/

/*var a = new Boolean( x );*//*Esto da true porque x es un String, y todos los string devuelven false*/

/*
var a = new Boolean();

console.log( a.valueOf() );
*/

/*
if (true) {
	console.log("Me imprimi!!");
}
*//*Esto se imprime*/

/*if ( a ) {*//*Esto también imprime porque a tiene un valor no es por el hecho de que a sea true o sea false*//*a es un objeto*/
/*	console.log("Me imprimi!!");
}
*/

/*
if ( a.valueOf() ) {*//*en este caso no imprime porque esta vez si toma el valor gracias a la función valueOf que retorna el valor false*/
	/*
	console.log("Me imprimi!!");
}
*/

//Objetos String
//Sección 3, Clase 30

/*El objeto tipo string es un objeto, no un arreglo de caractéres*/

/*
var b = "Herrera";


var a = new String("Juan Carlos Pineda Chacón");
console.log( a );

console.log( a.toUpperCase() );*//*Todos los caractéres en Mayúsculas*/
/*console.log( a.toLowerCase() )*/;/*Todos los caractéres en minúsculas*/

/*
var i = a.indexOf("n");*//*esta instrucción siempre me apunta a la primera n*/
/*
console.log("la letra está en la posición:", i);*/

/*Si yo quiero apuntar a la última n debo hacer lo siguiente*/
/*
i = a.lastIndexOf("n");
console.log("la letra está en la posición:", i);

var i = a.indexOf("Herrera");
console.log("la letra está en la posición:", i);*//*Lo marca en la posición nueve porque el espacio tambien lo toma como un caracter*/

/*
var nombre = a.substr( 6 );*//*lo que hace esto es que toma todos los caracteres despues de la posición número 6*/
/*
console.log( nombre );
*/

/*
var nombre = a.substr( 6, 4 );*//*toma desde la posición 6 solo 4 caractéres*/
/*
console.log( nombre );
*/

/*Si sólo queremos el nombre debemos aplicar esto*/

/*
var nombre = a.substr( 0, a.indexOf(" ") );*//*aquí le decimos hasta donde vamos a tomar los datos con el indexOf*/
/*
console.log( nombre );*/

/*Los strings tambien tienen funciones parecidas a los arreglos como el split el slice entre otros*/

/*
var split = a.split();*//*Esto crea un objeto con el arreglo con nuestra variable*/
/*
console.log( split );*/

/*
var split = a.split(" ");*//*Ahora bien, si nosotros le colocamos este " " le estamos diciendo que haga una separeción por los espacios*/
/*
console.log( split );
console.log( split.length );*//*Esto nos dice que tenemos dos palabras*/

//=======================

/*
document.write("Hola Mundo");*//*esto lo que hace es escribir en la página lo que coloquemos dentro del parentesis*/

/*
document.write( a.italics() );*//*Imprime el nombre en italica o acostado a 45º*/
/*OSEA, ESTO LO QUE HACE ES DARLE ESTILO A NUESTRAS IMPRESIONES*/

//Objeto Fecha (Date)
//Sección 3, Clase 31

/*Estos son los 3 métodos más comunes para utilizar con el objeto Fecha (Date)*/

/*var hoy = new Date();*//*Las fechas son objetos*/
/*
var fMili = new Date(0);
var fMiliotro = new Date(1538684191594);
var fFija = new Date( 2016, 9, 21, 23, 10, 15, 1 );*//*Este tiene que recibir 7 argumentos que deben ir en este órden *//*este es el orden "anio, mes, dia, hora, min, seg, mili" */

/*
console.log( hoy );
console.log( fMili );
console.log( fMiliotro );
console.log( fFija );
*/

/*Estos son los métodos del objeto fecha*/

/*
console.log( hoy.getFullYear() + 1 );*//*esto da una representación numérica del año, es por ello que si sumamos un número este se va a sumar*/
/*
console.log( hoy.getYear() );*//*NO SE DEBE CONFUNDIR CON EL DE ARRIBA, PARECEN MUY PARECIDOS, PERO NO SON LO MISMO*//*OJO OJO OJO NO USAR ESTE FORMATO OJO OJO OJO*/
/*
console.log( hoy.getTime() );*//*este dato representa la fecha en milisegundos*/
/*la función de .getTime() nos sisrve para saber cuanto tiempo tarda un proceso*/

/*
var inicio = new Date();

for (var i = 0; i < 15000; i++) {
	console.log("Algo...");
}

var fin = new Date();
*/

// console.log( inicio );
// console.log( fin );

/*
var duracion = fin.getTime() - inicio.getTime();
console.log( duracion, "milisegundos" );
console.log( (duracion/1000) , "segundos" );
*/

/*Hay una librería muy usada llamada momentjs.com muy utilizada para el manejo de fechas*/

/*Se puede descargar la librería desde github colocando en google momentjs github o lo descargamos usando composer y npm "Node Package Manager"*/

//Operaciones con Fechas
//Sección 3, Clase 32

/*var fecha = new Date(2016, 9, 20);*/

/*console.log( fecha );*/

/* NO PODEMOS HACER ESTO */

/*
fecha = fecha + 5;
console.log( fecha );
*/

/*Esto lo que hace es agregarle un número 5 al final del Date*/

/*En el Date hay que jugar con el Set, que sirve para ubicar una posición de la fecha, quiere decir que cada uno de los valores de las fechas posee un Set para poder ubicarlo y poder modificarlo*/

/*Es aquí dónde vamos a hacer la suma de los valores que queremos sumar en las posiciones requeridas*/

/*fecha.setDate( 32 );*//*Cuando sobre pasamos los días admitidos pasa al día siguiente*/
/*setDate cambia el día osea, setea el día, hay setMinutes, setMonth, entre otros, todos depende de lo que queramos setear*/

/*Lo otro que podemos hacer es una modificación al prototipo*/

/*
var fecha = new Date(2016, 9, 20);

Date.prototype.sumarDias = function( dias ){*//*Este prototipo hay que guardarlo para saber sumar días, de hecho hay que guardarlo para más nunca necesitarlo*/
	/*Aunque con la librería momentojs ubicado en momentojs.com tambien podemos usarlo y tiene funciones bastante interesantes que podemos y debemos utilizar*/
	/*fecha.setDate(25);*/ /*Así no se puede por el contexto del prototype*/
	/*
	this.setDate( this.getDate() + dias  );*//*con Prototype se aplica es this*/
	/*
	return this; 
}
*/

/*
Date.prototype.sumarAnios = function( anios ){*//*Este prototipo hay que guardarlo para saber sumar años, de hecho hay que guardarlo para más nunca necesitarlo*/
	/*Aunque con la librería momentojs ubicado en momentojs.com tambien podemos usarlo y tiene funciones bastante interesantes que podemos y debemos utilizar*/
	/*fecha.setDate(25);*/ /*Así no se puede por el contexto del prototype*/
	/*
	this.setFullYear( this.getFullYear() + anios  );*//*con Prototype se aplica es this*/
	/*
	return this; 
}
*/

/*
console.log( fecha );
console.log( fecha.sumarDias(5) );
*/
/*tambien le puedo restar días*/
/*
console.log( fecha.sumarDias(-10) 
*/
/*si resto de más pasa al siguiente mes*/
/*
console.log( fecha.sumarDias(-20) );
*/

/*Esta sería la impresión de los años*/
/*
console.log( fecha.sumarAnios(1) );
*/
/*resta de más años*/
/*
console.log( fecha.sumarAnios(-17) );
*/
/*
console.log( fecha );
*/

//Objeto Math
//Seccion 3, Clase 33

/*El objeto Math ya viene precargado en el javascript y recide en el objeto global*/
/*Es muy fácil utilizarlo*/
/*debemos irnos a la consola y ejecutar la instrucción Math*/

/*Si deseamos utilizarla en el código debemos ahcer lo siguiente*/

/*
var PI = Math.PI;*//*Se colocan en mayusculas porque las constantes se tiene la regla de que siempre van en mayúsculas */
/*
var E = Math.E;

console.log( PI );
console.log( E );

var num1 = 10.456789;

console.log( num1 );
console.log( Math.round( num1 ) );*//*la función round redondea el número décimal y lo transforma en entero*/
/*
console.log( Math.round( num1*100 ) / 100 );*//*Para obtener la cantidad de decimales que necesitamos la multiplicamos por el múltiplo de 10 haciendo este truco*/

/*
console.log( Math.floor( num1 ) );*//*el método floor lo deja en el número entero sin redondear, osea, en este caso sería el 10*/

/*Quedé en el minuto 4:35*/

/* rnd = Random = aleatorio */

/*
var rnd = Math.random();*/ /*Esto lo que hace es lanzar números aleatórios muy cercanos al 0 pero, nunca 0 ni 1*/
/*
console.log( rnd );
*/
/*esta función nos da un valor aleatorio */


/*Esta función me ayuda a obtener valores aleatorios por los rangos que yo desee colocarle*/
/*
function randomEntre( min, max ){
	return Math.floor( Math.random() * ( max-min + 1 ) + min );
}

console.log( randomEntre( 1,6 ) );
*/

/*Esta función saca la raíz cuadrada*/
/*
console.log( Math.sqrt( 9 ) );*/

/*Esta función eleva al cuadrado*/
/*El primer número es la base y el segundo número es el exponente (Por ende si tomo estos valores(5,2) es 5 elevado a la 2)*/
/*
console.log( Math.pow( 5 , 2 ) );*/

//Expresiones Regulares
//Sección 3, Clase 34

/*esto sirve para buscar un caracter o una cadena de caractéres en otra cadena de caractéres*/
//var reg1 = RegExp("A");/*Si aquí hay un caracter que no está en la cadena de caractéres que queremos investigar nos va a retornar un valor null en la consola*/
/*cabe destacar que esto posee case sensitive*/
//var reg2 = /a/;

//var texto = "Hola Mundo, 12345.";
//var texto = "Hola 9 Mundo.";
//var texto = "HolA MUndo.";
//var texto = "Hola Mundo.";
//var texto = "Hola Mundo.\nQué tal?";/*esto \n es un salto de línea*/
//var texto = "Holaa Mundoo, Hoola de nuevoo";
//var texto = "Holaa Mundooo, Hoola de nuevoooo";
//console.log( texto );

//var arr = texto.match( /^H/ );/*Esta expresión /^H/ busca en la primera posición de la cadena de caractéres e intenta encontrar una coincidencia si no la encuentra arroja por consola null*/
//var arr = texto.match( /a/ ); /*También se puede hacer así a través de su expresión regular*/
//var arr = texto.match( /o$/ );/*Esta expresión /o$/ busca en la última posición de la cadena de caractéres e intenta encontrar una coincidencia si no la encuentra arroja por consola null*/
//var arr = texto.match( /.../ );/*Esta expresión /./ busca cualquier caracter en la posición consecutiva*/

/*osea que si hacemos esto nos dá un resultado positivo*/
//var arr = texto.match( /^.o/ );/*Nos devuelve pr consola un "Ho"*/

//var arr = texto.match( /[0-9]/ );/*estos corchetes son utilizados para los rangos de números*//*Si lo dejamos así no va a encontrar nada porque no hay ningún número*/

//var arr = texto.match( /[06789]/ );/*tambien puedo hacer esto sin usar los rangos*//*el único detalle es que me va a devolver null porque no hay estos valores en la cadena de caracteres*/

/*pero si hago esto*/
//var arr = texto.match( /[026789]/ );/*si porque en la cadena de caracteres si hay un 2*/

/*también se pueden colocar rangos de letras*/
//var arr = texto.match( /[a-z]/ ); /*aparece la o porque tiene case sensitive*/

/*pero tambien puedo hacer esto para que tome los valores mayuscula también*/
//var arr = texto.match( /[a-zA-Z]/ );

/*Tambien se puede hacer esto*/
//var arr = texto.match( /^H[a-z]/ );

/*Tambien se puede hacer esto si quiero ver lo que está al final que concuerde	*/
//var arr = texto.match( /[aeiou].$/ );

/*Si le quito el $ al final*/
//var arr = texto.match( /[aeiou]./ );/*aparece "ol" porque busca cualquier vocal seguido de cualquier caractér*/

/*hay una forma de saber si hay espacios y es esta*/
//var arr = texto.match( / / );/*Esto se puede hacer pero no es recomendable*/

/*Si queremos saber si algún tipo de separación se debe usar esta expresión /\s/*/
//var arr = texto.match( /\s/ );

/*Esta expresión*/
//var arr = texto.match( /a-zA-Z0-9/ );
/*Es lo mismo que esta expresión regular*/
//var arr = texto.match( /\w/ );/*cabe destacar que no se encuentra la ñ*/

/*Esta expresión*/
//var arr = texto.match( /0-9/ );
/*Es lo mismo que esta expresión regular*/
//var arr = texto.match( /\d/ );/*esto viene de decimal en ingles*/

//Las expresiones regulares también tienen 3 controladores y se escriben al final así por ejemplo /\d/i
// i = insensible /*a las mayúsculas o minúsculas*/
// g = todas las apariciones
// m = multilinea

//var arr = texto.match( /m/ );/*si lo esecribo así no lo va a encontrar porque la m está en mayúscula M*/
/*Por ende tenemos que escribir esto para que elimine el case sensitive y haga match, osea, encuentre la letra m*/
//var arr = texto.match( /m/i );

/*Esta expresión g me devuelve todas las apariciones*/
//var arr = texto.match( /[aeiou]/g );

//var arr = texto.match( /[aeiou]/ig );/*Esto también da la posibilidad de encontrar todos los caracteres independientemente de que sea mayúsculas o minúsculas*/

//var arr = texto.match( /[aeiou]|[áéíóúñ]/ig );/*si quiero que aparezca la é tildada debo escribir pipe "|" representa el or lógico*/

//pero es lo mismo que esto
//var arr = texto.match( /[aeiouáéíóúñ]/ig );
//var arr = texto.match( /a/g );
//var arr = texto.match( /o+/g );/*esto también muestra los repetidos sea cual sea su cantidad de repetición*/

/*otra expresión regular sería esta con el signo de "?"*/
//var arr = texto.match( /o?/g );/*busca en cada caracter si es una o, y si no, lo deja vacío en la posición del caracter*/
/*dándo como resultado por consola esto 
(14) ["", "o", "", "", "", "", "", "", "", "", "o", "o", "", ""]*/
/*hay que tener cuidado cuando estemos usando esto, porque si el arreglo está vacío nos devuelve un valor sin caracteres*/

//var arr = texto.match( /o*/g );/*Esto hace match pero de una forma diferente*/
/*hay que tener cuidado cuando estemos usando esto igualmente, porque si el arreglo está vacío nos devuelve un valor sin caracteres*/

/*con los siguientes parámetros le podemos decir la cantidad de veces que queremos que aparezca el caracter "o"*/
//var arr = texto.match( /o{3,4}/g );/*Aquí dice que para hacer match tiene que aparecer por lo menos 2 veces*//* /o{2,3}/g el siguiente número indica desde cuántos hasta cuántos caracteres queremos hacer match*/

//console.log( arr );

//Expresiones regulares - Segunda parte
//Sección 3, Clase 35

//var reg1 = RegExp("A");
//var reg2 = /a/;
// i = insensible /*a las mayúsculas o minúsculas*/
// g = todas las apariciones
// m = multilinea

//var texto = "Aeropuerto";
/*
var texto = "La Respuesta de la suma es: 45 + 60 = 105";
console.log( texto );
*/

//var arr = texto.match( /[aeiou]{2,2}/ig );/*2 vocales que se repitan 2 veces, al menos 2 veces {2,2}*/
/*ver resultados en el apartado de evernote*/

//var arr = texto.match( /\w{2,2}/ig );/*esta expresión \w agarra cualquier letra del ingles menos las vocales con acentos "áéíóú ni la ñ" OJO tambien incluye los números OJO*//*y como tiene esto {2,2} las agarra de 2 en 2*/

//var arr = texto.match( /\d{1,}/g );/*cuando se coloca esto {1,} quiere decir, de 1 vez a "n" veces, entenciendo infinitas veces*/
/*
var arr = texto.match( /\d{1,}|respuesta/ig );*//*se uso "|" para que se incluyera respuesta*/
/*
console.log( arr );
*/
//El ";" es opcional?
//Sección 4, Clase 36

/*
var a = 10
var b = 20
var c = 30
var d = "Fernando"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
*/

/*Aquí no da error la carencia de puntos y comas*/

/*
;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;
;;;;;;;var a = 10;;;;;;;;;;
;;;;;;;var b = 20;;;;;;;;;;
;;;;;;;var c = 30;;;;;;;;;;
;;;;;;;var d = "Fernando";;;;;;;;;;
;;;;;;;;;;;;;;;;;
;;;;;;;console.log(a);;;;;;;;;;
;;;;;;;console.log(b);;;;;;;;;;
;;;;;;;console.log(c);;;;;;;;;;
;;;;;;;console.log(d);;;;;;;;;;
;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;
*/

/*Esto tampoco da error*/

/*Pero esto*/

/*
function getNumero(){
	return 
		10
}

console.log( getNumero() );
*/

/*Da undefined*/

//Comentarios en javascript y espaciado
//Sección 4, Clase 37

// Esto es un comentario de linea simple

/*

Comentario multilinea
Comentario multilinea
Comentario multilinea

*/
/*
var miArreglo = [
*/
	//la primera pos
	//sirve para
	//hace cualquier cosa
/*
	"Fernando",
*/
	// la segunda 
	//Es un objeto
	//Hace
	/*
	{
*/
		//esta propiedad hace...
		//por lo cual ...
		//es bueno...
		/*
		nombre:
			"Fernando",
*/



		//esta propiedad hace...
		//por lo cual ...
		//es bueno...
		/*
		apellido:
			"Herrera",
*/

		//esta funcion hace...
		//por lo cual ...
		//es bueno...
		//no tiene parámetros...
		//pero puede...
		/*
		getNombre:function(){

			return this.nombre + " " + this.apellido;
		


		}
	},
*/
	//Tercera posición del arreglo
	/*
	true, 
*/
	//funcion de la cuarta...
	//...
	/*
	function(){ 
		console.log( this ); 
	}

*/



//fin del arreglo principal
//no hacer nada despues
//no hacer nada despues
//no hacer nada despues
//no hacer nada despues
/*
];

console.log(
		miArreglo
	);
*/

//Los más sensato es siempre comprimir el código con herramientas online antes de subir a producción
//Se comprime el código con una simple búsqueda en google


//Esta es la mejor página para comprimir archivos
//htmlcompressor.com/compressor/

/*OJOJOJOJOJOJOJO es una Excelente página JOJOJOJOJOJOJOJOJOJ*/

//Palabras reservadas de JavaScript
//Seccion 4, Clase 38

/*Son palabras que se crean con la finalidad de ser usadas sólo para lo que ya han sido creadas con antelación en los lenguajes de programación*/

/*osea, no las podemos usar para la declaración de variables*/

/*Estas son las palabras reservadas en javascript*/

/*
	Palabras reservadas
	Y buenas practicas
 */


// abstract

// boolean

// break

// byte

// case

// catch

// char

// class

// const

// continue

// debugger

// default

// delete

// do

// double

// else

// enum

// export

// extends

// false

// final

// finally

// float

// for

// function

// goto

// if

// implements

// import

// in

// instanceof

// int

// interface

// long

// native

// new

// null

// package

// private

// protected

// public

// return

// short

// static

// super

// switch

// synchronized

// this

// throw

// throws

// transient

// true

// try

// typeof

// var

// void

// volatile

// while

// with

//Manejo de errores en JavaScript
//Sección 4, Clase 39

/*JavaScript tiene un manejador de errores muy poderoso pero muy pocas personas lo manejan*/

/*El primero es el Try Catch*/

/*Hay que estár pendiente al momento de colocar el throw antes del try, ya que al hacer esto no ejecutamos más nada del código, se debe colocar después del try para que no genere ningún error*/

/*Aunque si va a tomar los demás valores de otros archivos JavaScript excepto todo lo que esté debajo de algún throw antes del try*/

/*
throw 'Error!!!';
*/

/*
try {*//*try quiere decir intenta*/

/*
	var a = 100;

	console.log("El valor de a:", a);

	if( a === 100 ){

		throw 'que mal';

	}else{
		throw 'oh oh!';
	}
*/

	/*con esta función se logran disparar los errores de forma literal con relación a lo que le hayamos colocado*/
	//throw 'oh oh!';
	/*
	throw new Error('Error tipo 1');
	*/

/*
	throw {
		nombreError:"Error tipo 1",
		accion:"Salir corriendo a echarle agua al servidor",
		coderror:1
	}
*/

/*
	throw function(){
		console.log("Función del throw...")
	}

	console.log("Esta parte nunca se ejecuta");
*/

	/*throw 1;*/ //n cualquier número 
/*
	throw new Error('Nombre error');
*/
	/*Los errors son un objeto*/
/*
}
*/

/*
catch(e){*//*el (e) quiere decir el error*/

	/*console.log("Error de catch:", e );*/
/*
	if ( e === "que mal" ){
		console.log("Error tipo 1");
	}

	if ( e === "oh oh!" ){
		console.log("Error tipo 2");
	}

*/
	/*Esto es para un error sin mensaje específico*/
	//console.log( e );

	/*Si queremos que el error sea mucho más específico debemos colocar esto*/
	//console.log( e.message );

/*
	console.log( e );
	console.log( e.nombreError );
	console.log( e.accion );
	console.log( e.coderror );
*/

/*
	e();

	console.log("Parte del catch");
*/
	
	/*
	registroError( e );
	*/

/*
	console.log( e );

}
*/

/*
finally{*//*finaliza el catch sin importar la impresión de los errores*/

/*
	console.log("Finalmente");

}
*/

/*Siempre que se coloque un try hay que colocar un catch o un finally, ya que si no lo hacemos nos va a dar error en las consola*/

/*
function registroError(e){

	var ahora = new Date()

	console.log("Se registró un error: ", e , " a las: ", ahora.getTime() );

}
*/

//Coockies - Instalación de node.js en Mac OSX
//Sección 4, Clase 40

/*Esta lección me la salto porque yo tengo windows*/

//Coockies - Instalación de node.js en Windows
//Sección 4, Clase 41

/*Listo los comandos*/

//escape, unescape y cookies
//Sección 4, Clase 42

/*con esta función de las cookies sólo hace falta hacerla una sola vez y con ello ya tendremos las cookies, además de ello hay que tener en cuenta que las*/

/*para poder inicializar la información de las cookies debemos primeramente tener el servidor cargado junto con http-server con la siguiente línea de código como usuario administrador en la terminal*/

/*
Esta es la línea de comando a ejecutar en el terminal de windows

http-server C:\xampp\htdocs\JavaScript -p 8081
*/

/*la forma correcta de hacer las cookies es a través de funciones*/

/*
function crearCookie( nombre, valor ){

	valor = escape(valor);*//*el escape se hace para poder meter los datos en una cookie*/
/*
	var hoy = new Date();
	hoy.setMonth( hoy.getMonth() + 1 );

	document.cookie = nombre+"="+ valor +";expires=" + hoy.toUTCString()+";";

}
*/

/*
Ésta es una forma de crear las cookies una de las formas más pros es a través de una función
*/

//document.cookie = "nombre=fernando;";
//document.cookie = "apellido=herrera;";

/*
var demo = "123;123*123'123/ 123";

console.log(  demo  );
console.log(  escape(demo)  );
*/
/*tambien existe una forma de desencriptar la coockie y es a través de la función unescape*/
/*
console.log(  unescape( escape(demo) )  );
*/

/*
function borrarCookie( nombre ){

	var hoy = new Date();
	hoy.setMonth( hoy.getMonth() - 1 );

	document.cookie = nombre+"=x;expires=" + hoy.toUTCString()+";";

}

function getCookie( nombre ){

	var cookies = document.cookie;

	var cookieArr = cookies.split("; ");
	console.log( cookieArr );

	for( var i =0; i < cookieArr.length; i++ ){

		var parArr = cookieArr[i].split("=");
		cookieArr[i] = parArr;

		if( parArr[0] === nombre ){
			return unescape( parArr[1] );
		}

	}
*/

	//console.log( cookieArr );

/*
	return undefined;

}

console.log( getCookie("direccion") );
*/

//crearCookie( "nombre","Fernando" );
//crearCookie( "correo","loquesea@gmail.com" );
//crearCookie( "direccion","Caracas, Venezuela" );

//borrarCookie( "nombre" );

//var cookies = document.cookie;

//console.log( cookies );

//Funciones especiales: Call(), Apply() y Bind()
//Sección 4, Clase 43

/*
var carro = {
	color: "Blanco",
	marca: "Mazda",
	imprimir:function(){
		var salida = this.marca + " - " + this.color;
		return salida
	}
}

var carro2 = {
	color: "Rojo",
	marca: "Toyota"
}



console.log( carro.imprimir() );

var logCarro = function( arg1, arg2 ){
	
	console.log("Carro: ", this.imprimir() );
	console.log("Argumentos: ", arg1, arg2 );
	console.log("===========================");

}
*/

/*logCarro();*//*esto da error*/
/*Se debe colocar esto*/

/*
var logModeloCarro = logCarro.bind( carro );*//*el bind setea el "carro" en el this*/

/*
logModeloCarro("abc","xyz");

logModeloCarro.call( carro, "123", "456" );*//*Así es el formato del call*/
/*
logModeloCarro.apply( carro, [ "asd" , "qwe" ] );*//*Así es el formato del apply*/

/*Esto nos sirve para desarrollar funciones prestadas*/

/*
console.log( carro.imprimir.call( carro2 ) );
*/

//IF... ELSE...
//Sección 4, Clase 44

/*
var nota = 55;
*/

/*
if( nota >= 60 ){*/ /*La condicón if no necesariamente debe ir acompañada de una condición else*/
	/*
	console.log("Aprobó");

}else{

	console.log("Reprobó");

}
*/

/*
if( nota >= 90 ){

	console.log("A");

}else if( nota >= 80 ){*//*Aquí se puede hacer uso del else if y colocar cuantas condiciones querámos colocar*/
/*
	console.log("B");

}else if( nota >= 70 ){

	console.log("C");

}else if( nota >= 60 ){

	console.log("D");
*/
/*
}else{

	console.log("F");

}
*//*
}else{
	*//*
	if( nota <50 ){
	
		console.log("-F");
	
	}else{

		console.log("+F");

	}
	*/
	/*También se pueden colocar los condicionales de esta forma y de igual manera van a dar una  respuesta pero sin la consideración del else*/
	/*
	if( nota > 50 )	
		console.log("F");
	*/
	/*Pero lo más recomendable es colocarle sus llaves*/
	/*
	if( nota > 50 ){
		console.log("F");
	}
	console.log("Algo por aquí...");
}

console.log("Terminó el código.");
*/

/*
var a = 30;
var b = 20;
*/

/*
var c = 0;
*/

/*aquí vamos a determinar cuál es el mayor de los dos números entre el valor de "a" y el valor de "b"*/

/*
if( a > b ){
	c = a;
}else{
	c = b;
}
*/

/*También se puede determinar cuál es el mayor de entre los dos de esta forma*/

/*
var c = ( a > b )? function(){

	console.log("A es mayor a B");
	return a;

}() : function(){

	console.log("B es mayor a A");
	return b;

}();
*/

/*dónde el "?" representa lo que vamos a evaluar y el ":" representa el sino*/

/*esta es una de las versiones más cortas*/
/*
var c = ( a > b )? a : b ;
*/
/*dónde el "?" representa lo que vamos a evaluar y el ":" representa el sino*/

/*
var a = 10;
var b = undefined;
*/

/*cón esta condición lo que le estamos solicitando al programa es que tome el valor de la variable que esté definido y que y nos lo muestre en patalla, en la expresión "var c = a || b ;" "||" esto quiere decir el operador lógico de "or"*/

/*
var c = a || b ;
*/

/*
console.log( c );
*/

/*Si ambas variables tienen un valor osea, que no tenga un "undefined" se tomará siempre el valor de la primera variable que hayamos colocado*/

/*
var a = 10;
var b = 20;

var c = a || b;

console.log( c );
*/

/*
function getNombre( nombre ){

	var nomb = nombre || "<sin nombre>" || "<sin apellido>";

	console.log( nomb );

};

getNombre();
*/

/*Es importante recalcar que el peso que tiene el valor de las variables que creemos, para hacerlo de una forma mucho más secilla se tiene que "123abc" tiene más peso que "undefined" y que "undefined" tiene mayor peso que "null", al decir que tiene mayor peso quiere decir que el más pesado es el primer valor que va a tomar por defecto*/

//Switch... Condicional Múltiple
//Sección 4, clase 45

/*
var mes = 2;

switch( mes ){

	case 1:
		console.log("Enero");
		break;*//*es importante siempre colocarle el break porque sino continua con las evaluaciones consiguientes*/

/*
	case 2:
		console.log("Febreo");
		break;

	case 3:
		console.log("Marzo");
		break;

	default:
		console.log("Cualquier otro mes");
}
*/

/*cabe acotar que también se puede hacer una evaluación al lado de los "case" que están dentro del switch*/

/*
var mes = undefined;

switch( mes ){

	case ( 10 > 5 )? 40:1 :
		console.log("Enero");
		break;*//*es importante siempre colocarle el break porque sino continua con las evaluaciones consiguientes*/
/*
	case undefined:*//*aquí, dá como resultado por consola "Febrero", ya que el valor del mes es undefined y por ello toma ese valor*/
		/*
		console.log("Febreo");
		break;

	case 3:
		console.log("Marzo");
		break;

	default:
		console.log("Cualquier otro mes");
}*/

//JSON y breve historia
//Sección 4, Clase 46

/*
var objetoJS = {
	nombre:"Fernando",
	edad: 30,
	imprimir: function(){*//*es importante trabajar con prototipos para que no se pierdan las funciones internas dentro de los objetos*/
		/*console.log(this.nombre , this.edad);
	}
};

console.log( "Objeto literal", objetoJS );

var jsonString = JSON.stringify( objetoJS );

console.log( jsonString );
*/
/*Con esta página web podemos hacer evaluaciones del código de los archivos .json o para verificar si el archivo json es válido*/
/*
http://json.parser.online.fr/
*/

/*si deseamos transformar un json en un objeto JavaScript debemos hacer lo siguiente*/
/*
var objetoDesdeJson = JSON.parse( jsonString );

console.log( objetoDesdeJson );

console.log( objetoDesdeJson.nombre );
console.log( objetoDesdeJson.edad );
*/

//Ciclo While y Do While
//Sección 5, Clase 47

/*
var i = 1;

while(  i <= 10  ){

	console.log( i );

	i++;

};
*/

/*esta es una aplicación un poco más técnica de un while*/

/*
var i = 0;

while(  i < 10  ){

	i++;
*/
/*
	if( i === 5 ){

		break;
	
	}
*/
/*
	if( i === 5 ){

		continue;*//*Tambien se puede hacer el continue y al momento de hacerlo se brinca el número 5 y no lo imprimi*/
/*	
	}
	console.log( i );

};

*/

/*Tambien existe la instrucción do while que es así*/

/*
var i = 0;
*/

/*Es como el ciclo while al revés*/

/*
do{

	i++;
*/

	//break;/*si ejecuto aquí el break, nunca se va a ejecutar el código solicitado*/

/*
	if ( i === 5 ) {
		continue;*//*Si colocamos continue nos obviamos el #5 porque el continue continúa desde arriba*/
/*
	}

	console.log( i );

}while( i < 10 );
*/

//Ciclo For y For in - reflejo
//Sección 5, Clase 48

