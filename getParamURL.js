/*Con esta función podemos tomar los valores pasados por URL ver el console.log de la línea 2758 de el archivo app.js console.log( getParamURL("txtNombre") );*/

function getParamURL(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}