/*

5
6 9 5 7 4
=> 0 0 2 2 4

*/

function solution(input) {
    input = input[0].split(' ').map((dr) => Number(dr));
    let towers = [];
    let answer = [];

    for (let i = 0; i < input.length; i++) {
        let t = input[i];

        // t보다 높이가 높은 데이터들이 들어가 있음.
        while (towers.length > 0 && towers[towers.length - 1] < t) {
            towers.pop();
        }

        if (towers.length > 0) {
            answer.push(input.indexOf(towers[towers.length - 1]) + 1);
        } else {
            answer.push(0);
        }

        towers.push(input[i]);

    }

    return answer
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))