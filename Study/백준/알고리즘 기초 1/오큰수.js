// function solution(input) {
//     let stackArr = [];
//     let curTop = 0;
//     input = input[1].split(' ').map((dr) => Number(dr));
//     for (let i = input.length - 1; i >= 0; i--) {
//         if (i == input.length - 1) {
//         } else {
//         }
//         console.log(stackArr);
//     }
// }

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));