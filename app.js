const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarArchivo(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


// console.log(process);

let argv2 = process.argv;

// let parametro = argv[2];
//let base = parametro.split('=')[1];