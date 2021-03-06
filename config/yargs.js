const options = {
  rep: {
    alias : 'r',
    description: 'Reemplazar \'[g|i|gi]\' Usa g para reemplazar todas las coincidencias, i para ignorar mayusculas/minisculas. Si no define ninguna por defecto reemplazara solo la primer coincidencia y la coincidencia debe ser exacta. cadena1 por cadena2,  -r \'[opt]\/cadena1\/cadena2\/\'. \nEjemplo: sed -r \'g\/cadena1\/cadena2\/\'',
  }
}

const argv = require('yargs')
  .command(
    'sed',
    'Permite modificar el contenido de las diferentes líneas de un fichero en base a una serie de comandos o un fichero de comandos (-f fichero_comandos).',
    options,
  )
  .fail((msg,err,yargs) =>{
    if(err) throw err
    console.error('You broke it!')
    console.error(msg)
    console.error('You Should be doing', yargs.help())
    process.exit(1)
  })
  .help()
  .argv;

module.exports = {
  argv,
}
