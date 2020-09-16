const fs = require('fs');
const color = require('colors');



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(`El valor ${ base} no es numero.`);
            return;
        }


        let data = ''

        for (let i = 1; i <= limite; i++) {

            data += ` ${ base }  * ${ i } =  ${ base * i}\n`;


        }


        fs.writeFile(`tables/tabla-${ base }.txt`, data, (err) => {
            if (err) rejects(err)
            else
                resolve(`tabla-del- ${ base }.txt `.green);
        });



    })



}

let listarTabla = (base, limite) => {

    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(`El valor ${ base} no es numero.`);
            return;
        }

        console.log('================================='.green);
        console.log(`Tabla del ${ base }`.green);
        console.log('================================='.green);

        let data = ''

        for (let i = 1; i <= limite; i++) {

            console.log(` ${ base }  * ${ i } =  ${ base * i}\n`);



        }
    })
}

module.exports = { crearArchivo, listarTabla }