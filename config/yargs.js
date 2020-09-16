const opts = {
    base: { demand: true, alias: 'b' },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs').command('listar', 'Imprime en consola tabla de multiplicar', opts)
    .command('crear', 'Genera tabla con base y limite como parametros', opts)
    .help()
    .argv

module.exports = {
    argv
}