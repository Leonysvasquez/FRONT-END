//CLASES EN JAVASCRIP 
"use strict"
class Persona{
    static contodorPersona = 0;
    static get MAX_OBJ(){
        return 5;
    }
    constructor(nombre , apellido ,edad , dirreccion){
        this._nombre= nombre;
        this._apellido= apellido;
        this._edad= edad;
        this._dirreccion= dirreccion;
        this.idPersona= ++Persona.contodorPersona;
        if (Persona.contodorPersona < Persona.MAX_OBJ){
            this.idPersona=++Persona.contodorPersona;
        }
        else{
            console.log('Se ha superado el maximo de objetos')
        }
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        return this._apellido;
    }

    get edad(){
        return this._edad;
    }
    set edad(edad){
        return this._edad;
    }
    get dirreccion(){
        return this._dirreccion;
    }
    set dirreccion(dirreccion){
        return this._dirreccion;
    }

    nombreCompleto(){
        return 'ID:' +this.idPersona +', nombre:'+ this._nombre + ',Apellido:' + this._apellido + ',Edad:'+ this.edad + ',Dirrecion:'+ this.dirreccion 
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('hola baby')
    }
    
}



let leonys = new Persona('Leonys', 'Vasquez Reyes', 19, 'Cacique');

let Asheley = new Persona('Asheley ', 'Reyes', 19, 'Villa mella');

let Julio = new Persona('Julio', 'Ramirez ', 40, 'Villa Duarte');

let Brandol = new Persona('Brandol', 'Mora ', 16, 'Villa Francisca');

let Antonio = new Persona('Brandol', 'Mora ', 16, 'Villa Francisca');

let elvis = new Persona('Brandol', 'Mora ', 16, 'Villa Francisca');

let Francisco = new Persona('Brandol', 'Mora ', 16, 'Villa Francisca');
console.log(leonys);

//METODO GET Y SET 
leonys._nombre='Leonys Cristopher'

console.log(leonys._nombre)
console.log(leonys)


//HERENCIA
class Empleado extends Persona{
   
    constructor(nombre , apellido , edad , dirreccion ,departamento ,sueldo){
        super(nombre , apellido , edad , dirreccion)
        this._departamento =departamento;
        this._sueldo= sueldo;
    }

    get departamento(){
        return this._departamento
    }

    set departamento(departamento){
        this._departamento
    }
    get sueldo(){
        return this._sueldo
    }

    set sueldo(sueldo){
        this._sueldo
    }
    //SOBREESCRITURA
    nombreCompleto(){
        return super.nombreCompleto() +', Departamento:'+ this._departamento +',Sueldo:'+ this._sueldo;
    }
   
}

let empleado1= new Empleado('Asheley','Reyes',19, 'Villa mella' ,'Ingeneria Sistema' ,'15,000');
console.log(empleado1)
console.log(empleado1.nombreCompleto())

let empleado2 = new Empleado('Leonys' ,'Vasquez Reyes',19, 'Cacique' ,'Ingeneria Sistema' ,'15,000')
console.log(empleado2)
console.log(empleado2.nombreCompleto());


//CLASE OBJECT , METODO toSTRING ,SOBREESCRUTURA , POLIMORFISMO

console.log(empleado1.toString())

///PALABRAS STACTI EN JS

//Persona1.saludar(); ; no es posible llmar un metodo stactic desde un ibjecto PERO SI CON LA CLASE

Persona.saludar(leonys);

//ATRIBUTOS ESTATICOS

console.log(Persona.contodorPersona);

console.log(Empleado.contodorPersona);

console.log(leonys.toString())
console.log(Asheley.toString())
console.log(empleado1.toString())
console.log(empleado2.toString())

//  CONVERSION STACTICA CONST

console.log(Persona.MAX_OBJ)
console.log(Persona.MAX_OBJ)


console.log(Francisco.toString())



//USE SCTRICT TE DICE EL ERROR AL NO DECLARAR UNA VARIABLE O FUNCION

let x=10;
console.log(x)




