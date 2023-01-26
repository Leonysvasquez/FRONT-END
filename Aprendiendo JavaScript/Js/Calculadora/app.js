
function sumar(){
    const forma= document.getElementById('forma');
    let operadoA = forma['OperandoA'];
    let operandoB= forma['OperandoB'];
    let resultado = parseInt(operadoA.value)+ parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado= 'La operacion no incluye numeros'
    document.getElementById('resultado').innerHTML=`Resultado: ${resultado}`;
}