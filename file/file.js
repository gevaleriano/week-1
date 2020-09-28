const fs = require("fs");

class FileReader {
  file;
  fileInfo = [];
  constructor(fileName) {
    this.file = fileName;
  }

  loadFile() {
    try {
      return fs.readFileSync(this.file, "utf8");
    } catch (error) {
      console.log("error");
      return [];
    }

    return [];
  }

  getFile() {
    return this.loadFile().toString().split("\n");
  }

  viewFile() {
    return this.loadFile();
  }

  saveFile(file) {
    fs.writeFileSync(this.file, file.join("\n"), (error) => {
      if (error) throw new Error("No se pudo grabar", error);
    });
  }

  replaceText(regularExpression) {
    try {
      this.range = [];
      if (typeof regularExpression === "string") {
        this.range.push(regularExpression);
      } else {
        this.range = regularExpression;
      }

      this.range.forEach((req) => {
        this.fileInfo = this.loadFile();

        this.values = req.split("/");
        this.wordToFind = new RegExp(this.values[1], this.values[0]);
        this.wordToReplace = this.values[2].toString();

        this.saveFile(
          this.fileInfo
            .toString()
            .replace(this.wordToFind, this.wordToReplace)
            .toString()
            .split("\n")
        );

        return "Acción con exito";
      });
    } catch (error) {
      return "No se puedo reemplazar cadena";
    }
  }

  newLine(content) {
    try {
      content = content === true ? " " : content;

      this.fileInfo = this.loadFile();

      const splittedFile =
        this.fileInfo.length > 0
          ? [this.fileInfo.toString().split("\n"), content]
          : [content];
      this.saveFile(splittedFile);

      return "Acción con exito";
    } catch (err) {
      return `No se puedo modificar el archivo: ${this.file}`;
    }
  }
}

module.exports = {
  FileReader,
};
