const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {


    console.log('========================'.green);
    console.log(`TABLA DE MULTIPLICAR ${ base }`.green);
    console.log('========================'.green);



    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${ limite } no es un número.`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            let multiplicar = base * i;
            //console.log(`${base} * ${i} = ${multiplicar}`);
            data += `${base} * ${i} = ${multiplicar}\n`;
        }

        resolve(data);

    });
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let multiplicar = base * i;
            //console.log(`${base} * ${i} = ${multiplicar}`);
            data += `${base} * ${i} = ${multiplicar}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
            //console.log('el archivo ha sido creado!');
        });
    });
}

// module.exports.crearArchivo
module.exports = {
    crearArchivo,
    listarTabla
}