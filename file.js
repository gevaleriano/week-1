const fs = require('fs');

class FileReader {
  file;
  fileInfo = [];
  constructor(fileName) {
    this.file = fileName;
  }

  loadFile(){
    try{
      return fs.readFileSync(this.file, 'utf8');
    }catch(err){
      return [];
    }
  }

  getFile(){
    return this.loadFile().toString().split('\n');
  }

  viewFile(){
    return this.loadFile();
  }

  saveFile(file){
    fs.writeFileSync(this.file, file.join('\n'), (err) => {
      if (err) throw new Error('No se pudo grabar', err);
    });
  }

  replaceText(regex){
    try{
      this.values = regex.split('/');
      this.cadena1 = new RegExp(this.values[1],this.values[0]);
      this.cadena2 = this.values[2];
      this.fileInfo = this.loadFile();
      this.temp = this.fileInfo.toString().replace(this.cadena1,this.cadena2);
      this.saveFile(this.temp.toString().split('\n'));

      return 'Acción con exito';
    }catch(err){
      return 'No se puedo reemplazar cadena';
    }

    
  }



}

module.exports = {
  FileReader,
};
