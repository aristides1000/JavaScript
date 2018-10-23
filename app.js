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

