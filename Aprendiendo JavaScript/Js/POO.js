//sobrescritura

class Empleado{
    constructor(nombre,sueldo){
        this.nombre=nombre;
        this.sueldo=sueldo;
       
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre} ,sueldo: ${this.sueldo}`;
    }

}



class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this.departamento=departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}

//POLIMORFISMO

function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        return console.log('Es un objecto de tipo Gerente')
    }
    else if(tipo instanceof Empleado){
        console.log('Es un objecto de tipo Empleado')
    }
    else if(tipo instanceof Object){
        console.log('Es un tipo Object')
    }
  }
let empleado1= new Empleado('Leonys',20000)

let Gerente1= new Gerente('Carlos',50000,'Sistema')

console.log(empleado1.obtenerDetalles())

determinarTipo(Gerente1)

determinarTipo(empleado1) 

