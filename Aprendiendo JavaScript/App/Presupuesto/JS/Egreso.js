class Egreso extends Dato{
    static conttadorEgreso=0;
    constructor(descripcion, valor){
        super(descripcion,valor);
        this._id= ++Egreso.conttadorEgreso;
    }
    get id(){
        return this._id;
    }

}
