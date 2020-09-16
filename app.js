const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
//const { listarTabla } = require('./multiplicar/multiplicar');



//let base = 'abc';

//let argv2 = process.argv;

let parametro = argv._[0];

console.log(argv);

switch (parametro) {

    case 'crear':
        crearArchivo(argv.b, argv.l).then(nombre => console.log(nombre))
            .catch(err => console.log(err))
        break;

    case 'listar':
        listarTabla(argv.b, argv.l);
        break;

    default:
        'No selecciono ninguna opcion';

}

/* console.log(argv.base);
console.log(argv.limite); */
//console.log(argv2);

/*let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base);

crearArchivo(base).then(nombre => console.log(nombre))
    .catch(err => console.log(err))*/