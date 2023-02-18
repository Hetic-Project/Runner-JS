import createLevel from "./createLevel.js";
import subMenuEdition from "./subMenuEdition.js";
import { blocks } from "./createLevel.js";
function exportLevel(title,creator,difficulty){
var levelData =  {
  "title": title.value,
  "creator": creator.value,
  "difficulty": difficulty.value,
  "blocks": [...blocks]
 };


var blob = new Blob([JSON.stringify(levelData, null, 2)], {type: 'application/json'});

var link = document.createElement('a');
link.href = window.URL.createObjectURL(blob);
link.download = 'mon_niveau.jmpr';

document.body.appendChild(link);
link.click();
document.body.removeChild(link);

}

export default exportLevel;