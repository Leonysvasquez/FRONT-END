//

let miPromesa = new Promise((resolver,rechazar) => {
    let expresion= true;
    if(expresion)
        resolver('Resolvio correcto');
    else 
        rechazar('Se produjo un error')
});

miPromesa.then(valor => console.log(valor), error => console.log(error))

let promesa = new Promise((resolver) =>{
    setTimeout(()=> resolver('saludos con promesa '),3000);
})


promesa.then(valor => console.log(valor));

//async indica que una funcion regresa un promesa

async function miFuncionConpromesa(){
    return 'saludos com promesa y async'
}

miFuncionConpromesa().then(valor => console.log(valor))

//asynic /await

async function funcionPromseaAwait(){
    let miPromesa = new Promise(resolver =>{
        resolver('Promesa con await')
    });
    console.log(await miPromesa)
}

funcionPromseaAwait();

async function funcioConPromesaAwaitTimeOut(){

    let miPromesa= new Promise(resolver =>{
        setTimeout(()=> resolver('Promesa con await y timeout'),3000)
    });
    console.log(await miPromesa);
}

funcioConPromesaAwaitTimeOut()