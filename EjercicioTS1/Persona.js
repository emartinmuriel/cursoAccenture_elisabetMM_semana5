var Persona = /** @class */ (function () {
    /**
     * Todo párámetro pasado en el constructor creará un un atributo con su mismo nombre en la clase en
     * el momento de transcribir a JS, aunque no esté definido. Como en el caso del parametro"telefono"
     * @param nombre
     * @param edad
     * @param telefono
     */
    function Persona(nombre, edad, telefono) {
        this.edad = 0;
        this.nombre = "";
        this.edad = edad;
        this.nombre = nombre;
    }
    Object.defineProperty(Persona.prototype, "g_edad", {
        get: function () {
            return this.edad;
        },
        set: function (edad) {
            this.edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
var pepi = new Persona("pepita", 60, "3456789");
pepi.g_edad = 60;
console.log(pepi);
console.log(pepi.g_edad);
