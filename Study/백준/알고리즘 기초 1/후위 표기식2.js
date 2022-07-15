function solution(input) {
    input = input.slice(1);

    let calcObj = {};
    let calcStack = [];
    let stack = input.shift().split('');

    for (let i = 0; i < input.length; i++) {
        calcObj[String.fromCharCode(65 + i)] = input[i];
    }

    stack.forEach((dr) => {
        // 알파벳이 들어온 경우
        if (calcObj[dr]) {
            calcStack.push(calcObj[dr]);
        }
        // 연산 기호가 들어온 경우
        else {
            let n1 = Number(calcStack.pop()); // 뒷 수 
            let n2 = Number(calcStack.pop()); // 앞 수
            let insert = 0;

            switch (dr) {
                case '+':
                    insert = n1 + n2;
                    break;
                case "-":
                    insert = n2 - n1;
                    break;
                case "*":
                    insert = Math.floor((n1 * n2) * 100) / 100;
                    break;
                case "/":
                    insert = Math.floor((n2 / n1) * 100) / 100;
                    break;
            }

            calcStack.push(insert);
        }

    });

    let answer = String(calcStack[0]).split('.');
    if (answer.length > 1) {
        answer = `${answer[0]}.${answer[1].padEnd(2, '0')}`;
    } else {
        answer = `${answer[0]}.00`;
    }

    return answer;
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));