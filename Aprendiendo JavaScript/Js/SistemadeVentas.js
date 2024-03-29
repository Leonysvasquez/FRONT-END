
class Producto{
    static contadorProductos=0;

    constructor(nombre,precio){
        this._idProducto =++Producto.contadorProductos;
        this._nombre= nombre;
        this._precio=precio;
    }

    get idProducto(){
       return this._idProducto;
    }

    get nombre(){
        return this._nombre
    }

    get precio(){
        return this._precio
    }
    set nombre(nombre){
        return this._nombre=nombre;
    }
    set precio(precio){
        return this._precio=precio;
    }
    toString(){
        return `idPruducto: ${this._idProducto} ,nombre: ${this._nombre} ,precio: ${this._precio}`;
    }

}

let producto1= new Producto('Jean', 20)
let producto2= new Producto('T-shirt', 15)
let producto3= new Producto('Shoes', 30)

console.log(producto3.toString())

class Orden  {
    static contadorProductos=0;
    static contadorOrdenes=0;
    static get MAX_PRODUCTOS(){
        return 5;
    };

    constructor(){
        this._idOrden=++Orden.contadorOrdenes;
        this._productos =[];
        this._contadorProductosAgregados=0;
    }
    get idOrden(){
        return this.idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto)
            //this._productos[this._contadorProductosAgregados++]=producto;
        }
        else{
            console.log('No se pueden agregar mas productos');
        }
    }
    calcularTotal(){
        let totalVenta=0;
        for(let producto of this._productos){
            totalVenta+= producto.precio
        }
        return totalVenta;
    }
    mostrarOrder(){
        let productoOrden='';
        for(let producto of this._productos){
            productoOrden+='\n' + producto.toString()+ ' ';
        }
        console.log(`Orden: ${this._idOrden} Total :$ ${this.calcularTotal()}, Productos: ${productoOrden}`)
    }
}

let orden1= new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3)

orden1.mostrarOrder();

