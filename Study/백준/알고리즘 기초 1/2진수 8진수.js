// toString() 진법 변환 공부하기~

function solution(input) {

    let answer = '';
    input = input[0].split('');

    while (input.length >= 3) {
        let spliceData = input.splice(input.length - 3, 3).join('');
        answer = `${parseInt(spliceData, 2).toString(8)}${answer}`;
    }

    if (input.length > 0) {
        answer = `${parseInt(input.join(''), 2).toString(8)}${answer}`;
    }

    return answer
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));