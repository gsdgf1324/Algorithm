function solution(input) {
    let resultMn = Number(input[0].split(' ')[1]);
    let answer = 0;
    input = input.slice(1);
    input = input.map((dr) => Number(dr)).sort((a, b) => b - a);

    for (let i = 0; i < input.length; i++) {
        answer += Math.floor(resultMn / input[i]);
        resultMn = resultMn % input[i];
        if (resultMn == 0) break;
    }

    return answer
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))