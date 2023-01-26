

function imprimir(mensaje){
    console.log(mensaje)
}

function sumar(op1,op2, funcionCallback){
    let res= op1+ op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5,3,imprimir)


//Llamadas asincronicas con uso setTimiout

function miFuncioncallback(){
    console.log('saludos despues de 3')
}

setTimeout(miFuncioncallback ,3000);


//FUNCTION SETINTERVAL

let Reloj = () =>{
    let fecha= new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

//setInterval(Reloj,60000)