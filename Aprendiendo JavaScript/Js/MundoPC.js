class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._TipoEntrada=tipoEntrada;
        this._Marca=marca;
    }
    get tipoEntrada(){
    return this._TipoEntrada
    }
    set tipoEntrada(tipoEntrada){
        this._TipoEntrada=tipoEntrada;
    }
    get marca(){
        return this._Marca
        }

    set marca(marca){
        this._Marca=marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca)
        this._idRaton=++Raton.contadorRatones;
       
    }
    get idRaton(){
        return this._idRaton;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        return this._TipoEntrada=tipoEntrada;
    }
    get marca(){
        return this._Marca
        }

    set marca(marca){
        this._Marca=marca;
    }
    toString(){
        return `ID Raton: ${this._idRaton} , Tipo Entrada: ${this._TipoEntrada} , Marca: ${this._Marca}`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado=0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca)
        this._idTeclado=++Teclado.contadorTeclado;
        
    }
    get idTeclado(){
        return this._idTeclado;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        return this._TipoEntrada=tipoEntrada;
    }
    get marca(){
        return this._Marca
        }

    set marca(marca){
        this._Marca=marca;
    }

    toString(){
        return `ID Teclado: ${this._idTeclado} , Tipo Entrada: ${this._TipoEntrada} , Marca: ${this._Marca}`;
    }
}
let teclado1= new Teclado('USB','HP')
let mouse1= new Raton('USB','HP')
console.log(teclado1.toString())
console.log(mouse1.toString())
class Monitor{
    static contadorMonitores=0;
    constructor(marca,tamano,){
        this._idMonitor=++Monitor.contadorMonitores;
        this._marca=marca;
        this._tamano=tamano
    }
    get idMonitor(){
        return this._idMonitor
    }

    get marca(){
        return this._marca
    }

    set marca(marca){
        return this._marca=marca;
    }
    get tamano(){
        return this._tamano
    }

    set tamano(tamano){
        return this._tamano=tamano;
    }
    toString(){
        return `ID Monitor: ${this._idMonitor}  , Marca: ${this._marca} Tamano: ${this._tamano} Pulgadas`;
    }
}

let monitor1 = new Monitor('HP',22)
console.log(monitor1.toString())

class Computadora{
    static contadorComputadores=0;
    constructor(nombre,Monitor,Teclado,Raton)
    {   
        this._idComputadora=++Computadora.contadorComputadores;
        this._nombre=nombre;
        this._Monitor=Monitor;
        this._Teclado=Teclado;
        this._Raton=Raton;
    }
    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre
    }
    
    set nombre(nombre){
        return this._nombre=nombre;
    }
    get Monitor(){
        return this._Monitor
    }
    
    set Monitor(Monitor){
        return this._Monitor=Monitor;
    }
    get Teclado(){
        return this._Teclado
    }
    
    set Teclado(Teclado){
        return this._Teclado=Teclado;
    }
    get Raton(){
        return this._Raton
    }
    
    set Raton(Raton){
        return this._Raton=Raton;
    }
    toString()
    {
    return `Computadora: ${this._idComputadora} \n Nombre: ${this._nombre} \n Monitor: ${this._Monitor}\n Teclado: ${this._Teclado} \n Mouse: ${this._Raton}`;
    }
}

let Comptadora1= new Computadora('DELL 301O',monitor1,teclado1,mouse1)
console.log(Comptadora1.toString())



class Orden{
    static contadorOrden=0;
    constructor(){
        this._idOrden=++Orden.contadorOrden;
        this._computadoras=[];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadoraOrden='';
        for (let computadora of this._computadoras){
            computadoraOrden+=`\n ${computadora}`;
        }
        console.log(`Orden:${this._idOrden} Computadora: ${computadoraOrden}`);
    }
}

let orden1 = new Orden();

orden1.agregarComputadora(Comptadora1)

orden1.mostrarOrden();