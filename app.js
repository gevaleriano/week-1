const argv = require('./config/yargs').argv;
const fileReader = require('./file').FileReader;

const filename = './files/' + (argv._[1]?argv._[1]:'test.txt');

const file = new fileReader(filename);

if(argv._.length<2)
  return console.error('Debe especificar el nombre del archivo a manipular');

if(argv._.length>2)
  return console.error('Solamente esta habilitado el comando sed, consulte --help');
 
switch(argv._[0]){
  case 'sed':
    if(argv.hasOwnProperty('rep') && argv.rep.length)
    {
      file.replaceText(argv.rep);
    }
    else if(argv.hasOwnProperty('newln') && argv.newln){
      file.newLine(argv.newln);
    }
    console.log(file.viewFile());
    break;
  default:
    console.log('Comando no existe, Para mas información use --help.');
}
