function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
  var str1 = str1.length
  var str2 = str2.length
  if(str1 === str2){
    return true;
  } else {
    return false;
  }
}

module.exports = tienenMismaLongitud;