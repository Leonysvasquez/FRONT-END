miFuncion()

function miFuncion(){
    console.log('saludos')
}



let miFuncionFlecha= () =>{
    console.log('saludos desde mi funcion flecha')
}

miFuncionFlecha()

const saludar = () => 'saludos jajaj'

console.log(saludar())

//const saludar = () =>{
    //return 'saludos'
//}

const funcionConparametros = (mensaje) => console.log(mensaje)
funcionConparametros('Saludos con paramentros')

const funcionConvariosParamentros1 = (op1,op2) => op1 + op2; console.log(funcionConvariosParamentros1(3,5))

const funcionConvariosParamentros = (op1,op2) =>{
    let resultado= op1 + op2;
    return resultado;
};

console.log(funcionConvariosParamentros(3,5))