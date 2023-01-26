 




let nombre=" Leonys Vasquesz";

let edad=18;

let resultado = "Nombre:"+ nombre;
 

if (edad > 17) {
    /*alert("Buen dia")
    alert("Puedes entrar a la disco");*/
}
else if(edad =>13){
    alert('Puedes entrar con un adulto');
}

else{
    alert("No puedes entrar a la disco");
}

addContent("<h2>"+nombre+"</h2>")



for(let edad1=0; edad1 <=10; edad1++){
    console.log(edad1)

}
for(let edad1=0; edad1 <=100; edad1+=20){
    console.log(edad1)
}


for(let edad=0; edad <=10 ; edad++){
   addContent("<h2>La edad de"+nombre+" es "+edad+" </h2>");
}

/* FUNTION QUE ANADE CONTENIDO AL ELEMENTO QUE ASIGNE*/

function addContent(newContent){
    console.log(newContent)

}



addContent("HOLA CHICA")



/* LAS CONSTANTES SE PONEN EN MAYUCULAS BUENA PRACTICA*/
const COLOR_ROJO="#FF000";

let nombres=["Leonys ","Ricardo ","Julio ","Asheley"];


let edades=[ 20, 50, 234, 45];
console.log(edades[0]);


for (let i = 0; i< edades.length; i++){
    addContent("<h2>La edad de "+nombre+" es "+edades[i]+"</h2>");
}



//COMPARACION JS CON VARIABLES

let a = 19 ,b=18 , c=19 

    let z= a==c;
    console.log(z);

    z= a!=b;
    console.log(z);


//OPERADOR AND JS// REGRESA TRUE SOLO SI AMBOS OPERANDOS SON VERDADEROS

let aa=5;
let valMin =0 , valMax =10;

if (a >= valMin && a <= valMax){
    console.log("Dentro de rango");
}
else {
    console.log("Furea de rango")
}

///

//OPERADOR OR JS// REGRESA TRUE SI CUALQUIER OPERADOR ES TRUE 

let vacaciones = false , diaDescanso =false

if (vacaciones || diaDescanso){
    console.log("Padre puede asistir al juego del hijo");
}
else {  
    console.log("Esta Ocupado")
}

//OPERADORS TEMERARIOS

let resultadoa= (3>2) ? "verdadero" : "falso" ;
console.log('3 es mayor q 2 '+ resultadoa);


//CONVERTIR STRING TO NUMBER//           

let miNumero= "10";

/*console.log(miNumero) ;*/

let edada = Number(miNumero);
console.log(edada)

if (edada >= 18){
    console.log('Puede Votar');
}
else{
    console.log('No puede votar');
}


let Edades = (edada >= 18) ? "Puede Votar" : "  No  Puede Votar";
console.log("Usted: " + edades);


//FUNCIOON ISNAN

let numero= "18";
let edad4= Number(numero);
console.log(typeof edad); 


if (isNaN (edad4)){
    console.log("No es un numero");
}

else{
    if(edad4 >= 18){
    console.log("Puede Votar");
}
else{
    console.log("No puede votar");
}
}

/// EJEMPLO DE PROCEDENCIA DE OPERADORES EN JS

let x= 5;
let y= 10;
let p= ++x + y--;

console.log(x);
console.log(y);
console.log(p);



let operacion = 4+ 5*6 /3  //4 + (5*6)=30 /3= 10 + 4

console.log(operacion);


///SENTENCI IF / ELSE

let condition =true;

if (condition){
    console.log("Condition verdadera");
}

else{
    console.log("Condition false");
}

///SENTENCI IF / IFELSE
 
let numero1= 3;

if (numero1 ==1){
    console.log("Numero 1");
}
else if(numero1 ==2){
    console.log("Numero 2");
}
else if(numero1 ==3){
    console.log("Numero 3");
}

else if(numero1 ==4) {
    console.log("Numero 4");
}

else{
    console.log("Numero desconocido");
}

let mes =5;
let estacion;

if (mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera"
}

else if (mes == 6 || mes == 7|| mes == 8){
    estacion = "Verano"
}

else if (mes == 9 || mes == 10|| mes == 11){
    estacion = "Otono"
}

else if (mes == 1 || mes == 2|| mes == 12){
    estacion = "Invierno"
}

else{
    estacion = "No existe"; 
}

console.log(estacion);

let horaDia= 12;
let mensaje;

if (horaDia >= 6 && horaDia <=11){
    console.log("Buen dia");
}

else if (horaDia >= 12 && horaDia <=18){
    console.log("Buenas Tardes")
}
else if (horaDia >=19 && horaDia <=23){
    console.log("Buneas ncohes")
}

else{
    console.log("No existe");
}

//SWITCH 

let numero5 = 2;

let numeroTexto= "Valor desconocido";

switch  (numero5){
    case 1:
        numeroTexto = "Numero uno";
        break;
    case 2:
        numeroTexto = "Numero dos"; 
        break;
    default:
        numeroTexto='Numero no encontrado'
}
console.log(numeroTexto);


//CICLO WHILE 

let contador= 0;

while (contador <= 3){
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo While");


do{
    console.log(contador);
    contador++;
}while (contador < 3);
console.log("Fin de ciclo while");

//CICLO FOR'

for(let contador = 0; contador<=10; contador++){
    if (contador % 2 ==0){
        console.log(contador); 
        break;
    }
  

}

//
for(let contador = 0; contador<=10; contador++){
    if (contador % 2 !==0){
        continue;  
    }
    console.log(contador); 
}

//ETIQUETAS DE LABEL 

incio:
for(let contador = 0; contador<=10; contador++){
    if (contador % 2 !==0){
        continue incio;  
    }
    console.log(contador); 
}


//ARREGLOS 

const autos =["a", "b", "c", "d", "e",] 
console.log(autos);
console.log(autos [3]);


for (let i =0 ; i < autos.length ; i++){
    console.log(autos[i]);
}

//MODIFICAR ARREGLO
autos.push("Audi")




//FUNCTION 


function miFuncion (a, b)
{
    console.log("Suma : " + (a + b));
}

miFuncion(20,5);

function suma(a , b)
{
   return a + b;
}

let resultadoSuma= suma(20,5);
console.log(resultadoSuma);


//FUNCTION CON OBJECT 


function miFuncion(a, b){
    console.log(arguments.length)
    return a + b;
}

//FUNCTION FLECHA 

const sumarFunccionTipoFlecha= (a,b)=> a + b;

resultado = sumarFunccionTipoFlecha(3,190)
console.log(resultado);


//ARGUMENTOS Y PARAMETROS 

let sumaa= function(a=120,b=140){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
};
resultado =sumaa();
console.log(resultado)

let resultado1 = sumarTodo(5,4,3,3,2,2);


function sumarTodo(){
    let suma2 =0;
    for(let i=0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma2;
}
console.log(resultado1);



//FUNCION PASANDO UN VALOR
let o = 10;


function cambiarValor(a){
    a =20;
}

cambiarValor(x);
console.log(x);

//PASO POR REFERNCIA EN FUNCIONES MODIFCAR OBJECTO MEDIANTE FUNCTION 
const persona ={
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjecto(p1){
    p1.nombre = 'Leonys';
    p1.apellido = 'Vasquez'
}

cambiarValorObjecto(persona);
console.log(persona);

//OBEJTOS EN JS Y AGREGAR METODOS AL OBJECTO
let persona1 ={
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'leonys@gmail.com',
    edad: 19,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona1);
console.log(persona1.nombre)
console.log(persona1.nombreCompleto());


///CREACION DE OBJECTO EN JS

let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.apellido ='Saturno';
persona2.tel='55543234'


console.log(persona2);

///ACCEDER A LAS PROPIEDADES DE JS

for (propiedad in persona2){
    console.log(propiedad);
    console.log(persona2 [propiedad]);
}

//AGREGAR Y ELMINAR OBJECTOS 

persona2.apellido = 'Vasquez';
persona2.dirreccion = 'Cacique Calle turey ';
persona2.hobby = 'Basktballs';

delete persona2.hobby

persona2.hobby = 'Basktballs';

console.log(persona2);

//FORMAS DE IMPRIMIER VALORES DE LOS OBJECTOS

console.log(persona2.nombre + " " + persona2.apellido);

for(propiedad in persona2){
    console.log(persona2 [propiedad])
}

let personaArray = Object.values(persona2);
console.log(personaArray);

let personaString = JSON.stringify(persona2);
console.log(personaString);


//METODO GET 
let persona3 ={
    nombre: 'Leonys',
    apellido: 'Vasquez',
    email: 'leonys@gmail.com',
    edad: 19,
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona3.nombreCompleto);


//METODO SET 

let persona4 ={
    nombre: 'Leonys',
    apellido: 'Vasquez',
    email: 'leonys@gmail.com',
    edad: 19,
    idioma: 'es',
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    },
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
}

persona4.lang = 'en';
console.log(persona4.idioma);

//FUNTION CONSTRUTOR DE OBJETOS 

function Persona(nombre,apellido,email,edad,){
    this.nombre = nombre;
    this.apellido =apellido;
    this.email = email;
    this.edad = edad;
}



let leonys = new Persona('Leonys', 'Vasquez','leonys@mail.com', 19);
console.log(leonys);

let Asheley = new Persona('Asheley', 'Lorenzo','asheley@mail.com', 19);
console.log(Asheley);


//DISTINTAS FORMAS DE CREAR OBJECTOS EN JS

///USO DE PROTOTYPE EN JS


Persona.prototype.tel='2232332'
leonys.tel='8098644847'

console.log(leonys.tel)



//USO DE CALL PARA USAR 
let persona10={
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto:function(titulo ,tel){
        return titulo + ':' + this.nombre  + " " + this.apellido + ',' + tel;
    }
}

let persona11={
    nombre: 'Carlos',
    apellido: 'VAsquez',
}
 console.log(persona10.nombreCompleto('Lic','344646546'))

 console.log(persona10.nombreCompleto.call(persona11))

 console.log(persona10.nombreCompleto.call(persona11 , 'Ing', '5555555555'))


 //USO APPLY


let arreglo= ['Ing' ,'8098644847']
console.log(persona10.nombreCompleto.apply(persona11 ,arreglo))

//CLASES  EN JS 

