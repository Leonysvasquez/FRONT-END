

class Persona{
    static contadorPersona=0;
    static get MAX_OBJECT(){
        return 2;
    }
    constructor(nombre , apellido , edad){
        this._idPersona= ++Persona.contadorPersona;
        this._nombre= nombre;
        this._apellido= apellido;
        this._edad= edad;
    if ( Persona.contadorPersona <Persona.MAX_OBJ){
        this._idPersona=++Persona.contadorPersona;
    }  
    else{
        console.log('se ha llegado el limite de creacion de objetos NO SE PUDEN CREAE MAS PERSONAS')
    }

    }
    get idPersona(){
        return this._idPersona
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }

    get edad(){
        return this._edad
    }
    set edad(edad){
        return this._edad=edad;
    }
    toString(){
        return`${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}


class Empleado extends Persona{
    static contadorEmpleados=0;
    
    constructor(nombre, apellido , edad, Departamento,Sueldo){
        super(nombre,apellido, edad)
      this._idEmpleado=++ Empleado.contadorEmpleados;
      this._Departamento=Departamento;
      this._Sueldo=Sueldo;
    }
   get idEmpleado(){
    return this._idEmpleado
   }

   get Departamento(){
    return this._Departamento
   }

   set departamento(Departamento){
    return this._Departamento=Departamento;
   }

   get Sueldo(){
    return this._Sueldo
   }

   set Sueldo(Sueldo){
    return this._Sueldo=Sueldo;
   }

   toString(){
    return `${super.toString()} ${this._idEmpleado}  ${this._Departamento} ${this._Sueldo}`;
   }
}

class Cliente extends Persona{
    static contadorClientes=0;

    constructor(nombre, apellido , edad,fechaRegistro){
        super(nombre,apellido,edad)
        this._idCliente =++Cliente.contadorClientes;
        this._fechaRegistro=fechaRegistro;

    }

    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        return this._fechaRegistro=fechaRegistro;
    }
    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

//CREACION DE PERSONAS
let leonys = new Persona('Leonys','Vasquez Reyes',19);

console.log(leonys.toString())

let Asheley = new Persona('Asheley','Reyes Reyes',19);
console.log(Asheley.toString())



//CREACION DE EMPLEADOS

let empleado1= new Empleado('Leonys','Vasquez Reyes',19,'Ing.Sistema',15000);

console.log(empleado1.toString())

//CREACION DE CLIENTES

let Cliente1= new Cliente('Leonys','Vasquez Reyes',19, new Date());

console.log(Cliente1.toString())