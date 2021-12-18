import { updatePointPosition, turnArrayValue } from "../utils.js"

console.log('updatePointPosition("200", 1)', updatePointPosition("200", 1));
console.log('updatePointPosition("20.01", 1)', updatePointPosition("20.01", 1));
console.log('updatePointPosition("0.3", 1)', updatePointPosition("0.3", 1));
console.log('updatePointPosition("0.33", 1)', updatePointPosition("0.33", 1));
// console.log('turnArrayValue([1,2,3], [0,2])', turnArrayValue([1,2,3], [0,2]));
// console.log('turnArrayValue([1,2,3], [1,2])', turnArrayValue([1,2,3], [1,2]));
// console.log('turnArrayValue([1,2,3], [0,1])', turnArrayValue([1,2,3], [0,1]));