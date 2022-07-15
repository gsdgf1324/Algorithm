// CASE 1 
// function solution(input) {

//     let answer = [];
//     let stacks = [];
//     let engReg = /^[A-Z]+$/; //영어 정규식 체크 (대문자만)

//     input = input[0].split('');

//     while (input.length > 0) {
//         let curData = input.shift();

//         // 영어 알파벳인 경우
//         if (engReg.test(curData)) {
//             answer.push(curData);
//         }
//         // 부호인 경우
//         else {

//             switch (curData) {

//                 // ( 괄호 시작인 경우
//                 case "(":
//                     stacks.push("(");
//                     break;

//                 // ) 괄호가 닫히는 경우는 스택에 ( 가 나올때까지 pop하며 넣어줌
//                 case ")":
//                     while (stacks.length > 0) {
//                         let popData = stacks.pop();
//                         if (popData == '(') break;

//                         answer.push(popData);
//                     }
//                     break;

//                 // *, / 인 경우 연산자 우선순위가 높으므로 
//                 case "*":
//                 case "/":
//                     while (stacks.length > 0) {
//                         let lastData = stacks[stacks.length - 1];
//                         if (['*', '/'].includes(lastData)) {
//                             answer.push(stacks.pop());
//                         } else {
//                             break;
//                         }
//                     }

//                     stacks.push(curData);
//                     break;
//                 // +, - 인 경우 연산자 우선순위가 낮음
//                 case "+":
//                 case "-":
//                     while (stacks.length > 0) {
//                         let lastData = stacks[stacks.length - 1];
//                         if (lastData == '(') break;

//                         answer.push(stacks.pop());
//                     }
//                     stacks.push(curData);
//                     break;
//             }

//         }

//     }

//     if (stacks.length > 0) {
//         while (stacks.length > 0) {
//             answer.push(stacks.pop());
//         }
//     }

//     return answer.join('');

// }
//

// CASE 2
function solution(input) {

    let answer = [];
    let stacks = [];
    let engReg = /^[A-Z]+$/; //영어 정규식 체크 (대문자만)

    input = input[0].split('');

    while (input.length > 0) {
        let curData = input.shift();

        // 영어 알파벳인 경우
        if (engReg.test(curData)) {
            answer.push(curData);
        }
        // 부호인 경우
        else {

            switch (curData) {

                // ( 괄호 시작인 경우
                case "(":
                    stacks.push("(");
                    break;

                // ) 괄호가 닫히는 경우는 스택에 ( 가 나올때까지 pop하며 넣어줌
                case ")":
                    while (stacks.length > 0) {
                        let popData = stacks.pop();
                        if (popData == '(') break;

                        answer.push(popData);
                    }
                    break;

                // 연산자 부호인 경우 stacks에 쌓인 부호의 우선순위를 따져 높은 우선순위라면 푸시 낮은 우선순위이면 종료
                // (, )를 만날때에도 종료해야함.
                case "+":
                case "-":
                case "*":
                case "/":
                    let curHigh = getHigher(curData);
                    while (stacks.length > 0 && getHigher(stacks[stacks.length - 1]) >= curHigh) {
                        answer.push(stacks.pop());
                    }
                    stacks.push(curData);
                    break;
            }

        }

    }

    if (stacks.length > 0) {
        while (stacks.length > 0) {
            answer.push(stacks.pop());
        }
    }

    return answer.join('');

}

function getHigher(dt) {
    if (dt == '+' || dt == '-') {
        return 1;
    } else if (dt == '*' || dt == "/") {
        return 2;
    } else {
        // (, ) 인 경우 여기까지 검사하고 종료해야 하므로 우선순위를 가장 낮게 잡아줌
        return 0;
    }
}
//

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));

/*

연산자 우선순위 

+ -
* /

 */