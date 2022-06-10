/*

((()()(()))(((())))()
()()()()(()()())()
=>
NO
YES

stack
순차적으로 데이터를 저장하며, 가장 마지막 원소의 접근이 가능한 자료구조
*/
function solution(input) {
    input = input[0];

    let rest = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == '(') {
            rest.push('(');
        } else if (input[i] == ')') {
            let popData = rest.pop();
            if (popData != '(') {
                return false
            }
        }
    }

    if (rest.length > 0) {
        return false;
    }

    return true;
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))