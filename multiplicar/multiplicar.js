// requireds 

const fs = require('fs');
const colors = require('colors');


let listarArchivo = (base, limite = 10) => {
    if (!Number(base)) {
        console.log(`El valor introducido ${ base } no es un número`);
        return;
    }

    console.log(`Tabla de Multiplicar del ${base}`.green);
    console.log(`==========================`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${base * i}`.yellow);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        data = `Tabla de Multiplicar del ${base}\n`;
        data += `==========================\n`;

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${base * i}\n`;
        }

        // const data = new Uint8Array(Buffer.from('Hola mundo'));
        fs.writeFile(`tablas/tabla-del-${base}-al${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-del-${ base }-al-${ limite }.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarArchivo
}