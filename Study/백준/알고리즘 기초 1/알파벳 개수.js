function solution(input) {

    // 'a'.charCodeAt() => 97
    // 'z'.charCodeAt() => 122

    let answer = Array.from({ length: 26 }).fill(0);
    input = input[0].split('');

    input.forEach((dr) => {
        let idx = dr.charCodeAt() - 97;
        answer[idx] += 1;
    });

    return answer.join(' ');
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));