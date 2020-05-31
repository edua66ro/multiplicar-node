//requireds
//const fs = require('fs'); //propio de node, solo se define y no hay que hacer nada más
//const fs = require('express'); //paqutes que no son nativos de node
//const fs = require('./fs'); //son archivos que nosotros mismos hemos creado.
// const multiplicar = require('./multiplicar/multiplicar'); forma uno


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //destructuración de archivo.
const argv = require('./config/yargs').argv;
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado -> ${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

// let base = '8';

//module,multiplicar
//console.log(module);

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];



//console.log(argv.limite);