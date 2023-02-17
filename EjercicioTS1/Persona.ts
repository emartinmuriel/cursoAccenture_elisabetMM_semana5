class Persona{
    private edad:number =0;
    private nombre:string ="";

    /**
     * Todo párámetro pasado en el constructor creará un un atributo con su mismo nombre en la clase en
     * el momento de transcribir a JS, aunque no esté definido. Como en el caso del parametro"telefono"
     * @param nombre 
     * @param edad 
     * @param telefono 
     */
    constructor(nombre:string,edad:number, telefono:String){ 
        this.edad= edad;
        this.nombre= nombre
    }

    get g_edad(){
        return this.edad;
    }

    set g_edad(edad:number){
        this.edad=edad;
    }

    
}

let pepi = new Persona("pepita",60,"3456789");
pepi.g_edad=60;
console.log(pepi);
console.log(pepi.g_edad);



/**
 * Tomando valores de un objeto
 */
let lista = {
    c1: "Peugeot",
    c2:"mercedes",
    c3:"Volvo"
}

let listaMia {c1,c3:sinonimo,c4="Citroen"} =  lista;
