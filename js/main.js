import menu from './functions/Edit/menu.js'
<<<<<<< HEAD
import subMenuEdition from './functions/Edit/subMenuEdition.js'
import subMenuPause from './functions/Edit/subMenuPause.js'
menu()
// subMenuEdition()
subMenuPause()
=======
import runLevel from './functions/Running/runLevel.js';
menu()

const easy = fetch("../config/easy.json")
  .then((res) => res.json())
  .then((data) => {
    const A = data.blocks[0].type
    const B = data.blocks[1].type
    const C = data.blocks[2].type
    runLevel(A, B, C)
});

>>>>>>> bee23c0b13e622de49296951fe24f167c711ab14

