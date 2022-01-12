//Este es un ejemplo de comentario de linea 

/* Comentario de una sola linea

hola hola 

*/
var perrito
var Perrito 
var PERRITO 
/*

// Esta es una alerta 
alert ("Hola Mundo");

console.log("Este es un mensaje para la consola");

var nombre = "Kennya Yulieth";
var apellidos = "Lepe Hurtado";
var edad = 29;

console.log(nombre,apellidos,edad);

alert("Mi nombre es " + nombre);

console.log("Mi nombre es: " + apellidos);

alert (" Mi nombre es: " + nombre + " mis apellidos son: " + apellidos + " y mi edad es: " + edad);

// Otro ejemplo de como mostrar variables en consola 

var numero1 = 5;
var numero2 = 7;
var resultado = numero1 + numero2;

console.log("El resultado de la suma es: " + resultado);


//Sintaxis Basica de una funcion 

function nombrefunction(parametros){
    instrucciones;
}
*/

//Declaracion de funciones 
/*
function Saludar(){
    alert ("Hola a todos");
}
Saludar();

//Expresion de funcion

var Cantar = function(){
    alert("A mi me gusta cantar");

}
Cantar();

//Funcion sin parametrosx

function sumar (){
    var numero1 = 5;
    var numero2 = 6;
    var suma = numero1 + numero2;
    alert("La suma de la funcion sin parametros es: " + suma);
}
sumar();

//Funcion con parametros
function restar (numero1,numero2,restar){
    var num1 = 6;
    var num2 = 8;
    var resta = num1 - num2;
    alert ("La resta de la funcion con parametros es: " + resta);
}
restar();

//Otra funcion con parametros 

function Cuadrado (cuadrado){
    var rescuadrado = cuadrado * cuadrado;
    alert("El cuadrado del numero es: " + rescuadrado);
}

Cuadrado (4);

function Operaciones (num1, num2, numero1, numero2, suma, resta, multi){

    var suma = num1 + num2 + numero1;
    var resta = numero2 - numero1;
    var multi = numero1 * num2;

    alert("La suma es: "+suma+" La resta es: "+resta+" La multiplicacion es: "+multi);
    
}
Operaciones();

*/

/*
function Prompter() {
    var respuesta = prompt("Buenos dias, cual es tu nombre?");
    alert ("Es un gusto saludarte " + respuesta)
    
}
Prompter();

function AreaCuadrado (){
    var datoingresado = prompt("Ingresa un numero");
    var resultado = datoingresado * datoingresado;
    alert ("El area del cuadrado es " +resultado + " por que el numeor que ingresaste es " 
    + datoingresado);
}
AreaCuadrado();
*/

function confirmacion(){
    var pregunta = confirm("Deseas visitar Google.com y buscar fotos de perritos?")
    if (pregunta){
        alert("Te enviare rapidamente")
        window.location = "https:www.google.com";
    }
    else{
        alert ("No hay problema, nos vemos luego")
    }
}

//getElementByID

function cambiarColor(nuevoColor){
    var elem = document.getElementById ("parrafo");
    elem.style.color = nuevoColor;
}

function Accion (Tipo){
    var elem = document.getElementById ("DivBotones");
    if (Tipo == "Ocultar")
    elem.style.display = 'none';
    else
    elem.style.display = ''; 
}
