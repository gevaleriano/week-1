const argv = require('./config/yargs').argv;
const fileReader = require('./file').FileReader;

const file = new fileReader('./files/test.txt');

switch(argv._[0]){
  case 'sed':
    if(argv.rep.length)
    {
      file.replaceText(argv.rep);
      console.log(file.viewFile());
    }
    break;
  default:
    console.log('Comando no existe, Para mas información use --help.');
}