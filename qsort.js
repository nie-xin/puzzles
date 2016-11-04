/*
 * Ceci est une ardoise JavaScript.
 *
 * Saisissez du code JavaScript, puis faites un clic droit ou sélectionnez à partir du menu Exécuter :
 * 1. Exécuter pour évaluer le texte sélectionné (Cmd-R),
 * 2. Examiner pour mettre en place un objet Inspector sur le résultat (Cmd-I), ou,
 * 3. Afficher pour insérer le résultat dans un commentaire après la sélection. (Cmd-L)
 */

function qsort(arr) {
  if (arr.length < 2) {
    return arr
  }
  
  const [ pivot, ...rest ] = arr
  const less = rest.filter(elm => elm < pivot)
  const greater = rest.filter(elm => elm > pivot)
  
  return [ ...qsort(less), pivot, ...qsort(greater) ]
}

console.log(qsort([10, 5, 2, 3]))