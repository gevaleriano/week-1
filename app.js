const argv = require('./config/yargs').argv;
const fileReader = require('./file/file').FileReader;
const colors = require('colors');

const expValidarFileName = new RegExp('^[a-zA-Z0-9_,\s-]+\.[A-Za-z]{2,4}$');

if(!expValidarFileName.test(argv._[1]))
  return console.error('Introduzca un nombre de archivo valido'.red);

if(argv._.length<2)
  return console.error('Debe especificar el nombre del archivo a manipular'.magenta);

if(argv._.length>2)
  return console.error('Verifique comando.\nSolamente esta habilitado el comando sed, para ayuda use --help'.red);
 
switch(argv._[0]){
  case 'sed':
    const filename = './files/' + (argv._[1]?argv._[1]:'test.txt');
    const file = new fileReader(filename);

    if(argv.hasOwnProperty('rep') && argv.rep.length)
    {
      console.log(file.replaceText(argv.rep).cyan);
    }
    else if(argv.hasOwnProperty('newln') && argv.newln){
      console.log(file.newLine(argv.newln).cyan);
    }
    console.log(`${argv._[1]}*\n${ file.viewFile().green }`);
    break;
  default:
    console.log('Comando no existe, Para mas información use --help.');
}
