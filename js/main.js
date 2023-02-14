import menu from './functions/Edit/menu.js'
//import runLevel from './functions/Running/runLevel.js';
import easy from '../config/easy.json' assert {type : "json"}
import { createLevel } from './functions/Edit/createLevel.js';
import { importLevel } from './functions/Edit/importLevel.js';
menu()
const A = easy.blocks[0].type
const B = easy.blocks[1].type
const C = easy.blocks[2].type
//runLevel(A, B, C)
createLevel(A,B,C)


