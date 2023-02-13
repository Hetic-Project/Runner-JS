import menu from './functions/Edit/menu.js'
import {runLevel} from './functions/Running/runLevel.js'

menu()
const easy = fetch("../config/easy.json")
  .then((res) => res.json())
  .then((data) => {
    const A = data.blocks[0].type
    const B = data.blocks[1].type
    const C = data.blocks[2].type
    runLevel(A, B, C)
});

