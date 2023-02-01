const ingresos = [
    new Ingreso('Sueldo',2000),
    new Ingreso('Venta coche',2500),
    new Ingreso('Venta Moto',1500)
];

const egresos=[
    new Egreso('Renta departaßmento',900.00),
    new Egreso('Comida',400)
];


let cargarApp= ()=>{
    cargarCabecero();
    cargarIngreso();
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

const formatoMoneda = (valor)=>{
    return valor.toLocaleString('en-US',{style:'currency', currency: 'USD' ,minimumFractionDigits:2})
 }
 
 
let cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso=totalEgresos()/ totalIngresos();
    document.getElementById('presupuesto').innerHTML=formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML=fomatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML=formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML=formatoMoneda(totalEgresos());
}


const fomatoPorcentaje= ()=> {
    return valor.toLocaleString('en-US',{style:'percent',minimumFractionDigits:2})
}


const cargarIngreso=()=>{
    let ingresosHTML='';
    for(let ingreso of ingresos){
        ingresosHTML+= crearIngresosHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML =ingresosHTML;
}

const crearIngresosHTML =(ingreso)=>{
    let ingresosHTML=`<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_porcentaje">21%</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>`;
    return ingresosHTML;
}