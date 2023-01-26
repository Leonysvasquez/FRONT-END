const ingresos=[
    new ingresos('Salario',2100,00),
    new ingresos('Venta Coche',1500)
];

const egresos=[
    new egresos('Renta departamento',900.00),
    new egresos('Comida',400)
];


let cargarApp= ()=>{
    cargarCabecero();
}

let totalIngresos=()=>{
    let totalIngresos=0;
    for(let ingreso of ingresos){
        totalIngresos+=ingreso.valor;
    }
    return totalIngresos;
}

let totalEgresos =() =>{
    let totalEgreso=0;
    for(let egreso of egresos){
        totalIngresos+=egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = ()=>{
  let presupuesto = totalIngresos()- totalEgresos();
  let porcentajeEgreso=totalEgresos()/totalIngresos();
  document.getElementById('presupuesto').innerHTML=formatoMoneda(presupuesto);
  document.getElementById('porcentaje').innerHTML=porcentajeEgreso;
  document.getElementById('ingresos').innerHTML=formatoMoneda(totalIngresos());
  document.getElementById('egresos').innerHTML=formatoMoneda(totalEgresos());
}

const formatoMoneda=(valor)=>{
    valor.toLocaleString('en-US',{style:'currency', currency: 'USD' ,minimumFractionDigits:2})
}


const fomatoPorcentaje= ()=> {
    return valor.toLocaleString('en-US',{style:'percent',minimumFractionDigits:2})
}