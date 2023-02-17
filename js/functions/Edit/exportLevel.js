import createLevel from "./createLevel.js";
import subMenuEdition from "./subMenuEdition.js";
function exportLevel(){
var levelData =  {
  "title": titre,
  "creator": nameCreateur,
  "difficulty": difficult,
  "blocks": [
  {"type A": typeA},
  {"type B": TypeB},
  {"type C": TypeC}

]
 }; 

// Créez un objet blob à partir des données
var blob = new Blob([JSON.stringify(levelData, null, 2)], {type: 'application/json'});

// Créez un lien de téléchargement pour le fichier JPMR
var link = document.createElement('a');
link.href = window.URL.createObjectURL(blob);
link.download = 'mon_niveau.jpmr';

// Ajoutez le lien de téléchargement à la page et cliquez dessus pour déclencher le téléchargement
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
  
}
 
export default exportLevel;