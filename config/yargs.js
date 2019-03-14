const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    type: Boolean,
    default: true
}

const completo = {
    alias: 'c',
    type: Boolean
}


const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea por hacer', { descripcion })
    .command('actualizar', 'Modifica tareas actuales', { descripcion, completado })
    .command('borrar', 'Eiminar alguna tarea especifica', { descripcion })
    .command('listar', 'Muestra las tareas por hacer', { completo })
    .help()
    .argv;

module.exports = {
    argv
}