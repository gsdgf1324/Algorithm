function solution(input) {

    // 'a'.charCodeAt() => 97
    // 'z'.charCodeAt() => 122

    let answer = Array.from({ length: 26 }).fill(-1);
    input = input[0].split('');

    input.forEach((dr, idx) => {
        let insertIdx = dr.charCodeAt() - 97;
        if (answer[insertIdx] == -1) {
            answer[insertIdx] = idx;
        }
    });

    return answer.join(' ');
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));