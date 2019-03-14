//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;

const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.listar(argv.completo);
        let titulo = '=====  Tarea  ====='.yellow;
        let cadena = '==================='.yellow;
        if (argv.completo == 'false') {
            titulo = '==== Por hacer ===='.green;
            cadena = '==================='.green;
        } else if (argv.completo == 'true') {
            titulo = '====== Hecho ======'.red;
            cadena = '==================='.red;
        }

        for (let tarea of listado) {
            console.log(titulo);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log(cadena);
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log("Comando no es reconocido");
        break;
}