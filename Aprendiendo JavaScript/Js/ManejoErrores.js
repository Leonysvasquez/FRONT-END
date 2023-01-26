'use strict'

try{
   let  x= 10;
}
catch(error){
    console.log(error)
}
finally{
    console.log('Termina la revisiom de errores')
}

console.log('continuamos')


let resultado='';
try{
    //x=10;
   if(isNaN(resultado)) throw 'No es un numero';
   else if (resultado=== '') throw 'Es una cadena vacia'
   else if (resultado < 0) throw 'Es un valor negativo'
   else if (resultado >= 0) throw 'Es un valor Positivo'
 }
 catch(error){
     console.log(error);
     //console.log(error.name)
     //console.log(error.message)
 }
 finally{
     console.log('Termina la revision  de errores')
 }
 
 

 
 

