import add from "./add";
// Because add is a DEFAULT export, it doesn't need to be destructured. 

import { subtract } from "./subtract";
// Subtract is not a default export, but it is a NAMED export. To receive it in the destination file, take the name of the named export, and put it in curly braces to denote that it refers to a named export. 

import * as multiplyAndDivide from "./multiplyAndDivide";

const multiply = multiplyAndDivide.multiply;
const divide = multiplyAndDivide.divide;