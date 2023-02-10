import menu from './functions/Edit/menu.js'
import easy from '../config/easy.json' assert { type: "json" };
import {runLevel} from './functions/Running/runLevel.js'

menu()
const A = easy.blocks[0].type
const B = easy.blocks[1].type
const C = easy.blocks[1].type
runLevel(A, B, C)