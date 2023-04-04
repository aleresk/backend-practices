class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    static especie = 'Humano';

    saludar = () => {
        console.log(`Hola soy ${this.nombre}`);
    }

    obtenerEspecie = () => {
        console.log(`Soy ${Persona.especie}`);
    }
}