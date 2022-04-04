function solution(input) {
    let answer = 1;
    let eTime = 0;

    input = input.slice(1).map((dr) => dr.split(' ').map((dr) => Number(dr)));
    input.sort((a, b) => {
        if (a[1] - b[1] == 0) {
            return a[0] - b[0];
        }
        return a[1] - b[1]
    });

    console.log(input);
    eTime = input[0][1];
    for (let i = 1; i < input.length; i++) {
        if (eTime <= input[i][0]) {
            answer += 1;
            eTime = input[i][1];
        }
    }

    return answer
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));