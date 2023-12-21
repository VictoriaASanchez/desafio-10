/* PUNTO 2 --------------------------------------------------------------------------- */

class Libro {
    constructor (titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.oracion = `${this.titulo}, de ${this.autor.toUpperCase()}`;
    }

    /* 
    mostrarDatosEnConsola() {
        console.log(`${this.title}, de ${this.author.toUpperCase()}`);
    }

    mostrarDatosEnAlert() {
        alert(`${this.title}, de ${this.author.toUpperCase()}`);
    } */

    mostrarDatosEnConsola() {
        console.log(this.oracion);
    }

    mostrarDatosEnAlert() {
        alert(this.oracion);
    }

    get getTitulo() {
        return this.titulo;
    }

    mostrarDatosEnAlert2() {
        alert(tituloDelNuevoLibro);
    }

    mostrarDatos(medio = 'console') {
        if (medio === 'alert') {
            this.mostrarDatosEnAlert();
        } else {
            this.mostrarDatosEnConsola();
        }
    }
}

const unLibro = new Libro('Ángeles y Demonios','Dan Brown');

console.log(unLibro);

/* PUNTO 3 --------------------------------------------------------------------------- */

unLibro.mostrarDatosEnConsola()

/* PUNTO 4 --------------------------------------------------------------------------- */

unLibro.mostrarDatosEnAlert()

/* PUNTO 5 --------------------------------------------------------------------------- */

const nuevolibro = new Libro('Fuego y Sangre', 'George R. R. Martin');

const tituloDelNuevoLibro = nuevolibro.getTitulo;

unLibro.mostrarDatosEnAlert2();

/* PUNTO 6 --------------------------------------------------------------------------- */

nuevolibro.mostrarDatos('alert');

nuevolibro.mostrarDatos('console');

nuevolibro.mostrarDatos();