# Semana #1 - Manipulación de archivo

La siguiente aplicación esta desarrollada para la manipulación de archivos,
en los cuales usted podra realizar multiples acciones, entre las siguientes:

* Agregar un nuevo archivo.
* Reemplazar cadenas dentro de el archivo a manipular, de forma individual o de varias cadenas a la vez.
* Visualizar el contenido de cualquier archivo que se encuentre en el directorio.

Para instalar y descargar todas las dependencias necesarias deben ejecutar el siguiente comando:
```linux
$ npm install
```
## Agregar un nuevo archivo
Para poder agregar un nuevo archivo al directorio de la aplicación debera ejecutar el comando sed continuo al nombre del archivo con su respectiva extensión, seguido de la opcion **--newLine** o su shortcut **-n** con un valor de texto sin espacios, si desea cadena con espacio encierre el contenido en comillas dobles o simples.
```linux
$ node app sed archivo.txt -n 'Mi primer linea en el documento'
```

## Reemplazar cadenas
Para poder reemplazar cadena dentro del archivo se utilizara la opción **--rep** o su shortcut **-e**, con esta opción nosotros reemplzar la cadena1 por la cadena2, agregando dos condiciones que serian i & g, i nos servira para ignorar mayusculas o minisculas en la busqueda de la cadena1 en el documento y la opción g, nos servira para especificar si reemplazara la primer coincidencia o si reemplazara todas las coincidencias en el archivos, las opciones i & g son opciones, por lo que su ausencia buscara coincidencia exacta y reemplazara solamente la primer coincidencia. Esta opción de **--rep(-e)** también permite varias busquedas a la vez el cual se debera volver a definir acontinuación del primer valor.
Un busqueda
```linux
$ node app sed archivo.txt -e 'ig/cadena1/cadena2'  
```
Multiples cambios
```linux
$ node app sed archivo.txt -e 'ig/cadena1/cadena2' -e '/cadena1_2/cadena2_2'
```
## Visualizar archivo
La aplicación brinda una opción para que el usuario pueda visualizar el contenido de un archivo existente en el directorio de la aplicación. El uso de este comando es simple, seguido del nombre del archivo debe especificar la opcion **--view** o su shortcut **-v**.
```linux
$ node app sed archivo.txt --r
```
Dentro de la aplicación tambien cuenta con la opción de ayuda, a través del comando **--help**
```linux
$ node app sed --help
```
