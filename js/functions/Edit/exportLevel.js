
function createLevel() {
    const level = 
      {
        "title": "titleInput.value",
        "creator": "nameinput.value",
        "difficulty": "difficultinput.value",
        "blocks": [
        {"type": "A"},
        {"type": "B"},
        ...
        ]
       }
       
    };
    return level;
  
  
  // Appeler la fonction pour créer le level
  const level = createLevel();
  
  // Convertir l'objet level en une chaîne de caractères JSON
  const levelJSON = JSON.stringify(level);
  
  // Créer un objet Blob avec la chaîne de caractères JSON
  const blob = new Blob([levelJSON], { type: 'application/json' });
  
  // Créer un élément <a> pour télécharger le fichier
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = 'level.jmpr';
  
  // Cliquer sur l'élément <a> pour télécharger le fichier
  downloadLink.click();
  
  // Confirmer que le level a été enregistré
  console.log('Le level a été enregistré avec succès dans un fichier JPMR !');
  