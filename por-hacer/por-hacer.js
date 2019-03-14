const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion.toUpperCase() === descripcion.toUpperCase());
    if (index < 0) {
        listadoPorHacer.push(porHacer);
        guardarDB();
        return porHacer;
    }
    console.log("La tarea ya se encuentra guardada");
    return false;

}

const listar = (completo) => {
    cargarDB();
    if (completo === undefined)
        return listadoPorHacer;
    else {
        if (completo) {
            return listadoPorHacer.filter(tarea => tarea.completado);
        } else if (!completo) {
            return listadoPorHacer.filter(tarea => !tarea.completado);
        } else
            console.log('Filtro no válido')
    }
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;


}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    }
    return false;
}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}