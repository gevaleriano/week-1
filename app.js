const argumentList = require("./config/yargs").argv;
const fileReader = require("./file/file").FileReader;
const colors = require("colors");

const expValidarFileName = new RegExp("^[a-zA-Z0-9_,s-]+.[A-Za-z]{2,4}$");

if (!expValidarFileName.test(argumentList._[1]))
  return console.error("Introduzca un nombre de archivo valido".red);

if (argumentList._.length < 2)
  return console.error(
    "Debe especificar el nombre del archivo a manipular".magenta
  );

if (argumentList._.length > 2)
  return console.error(
    "Verifique comando.\nSolamente esta habilitado el comando sed, para ayuda use --help"
      .red
  );

switch (argumentList._[0]) {
  case "sed":
    const filename =
      "./files/" + (argumentList._[1] ? argumentList._[1] : "test.txt");
    const file = new fileReader(filename);

    if (argumentList.hasOwnProperty("rep") && argumentList.rep.length) {
      console.log(file.replaceText(argumentList.rep).cyan);
    } else if (argumentList.hasOwnProperty("newLine") && argumentList.newLine) {
      console.log(file.newLine(argumentList.newLine).cyan);
    }
    console.log(`${argumentList._[1]}*\n${file.viewFile().green}`);
    break;
  default:
    console.log("Comando no existe, Para mas información use --help.");
}
