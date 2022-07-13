function solution(input) {

    let stacks = [];
    let answer = 0;

    input = input.split('');

    for (let i = 0; i < input.length; i++) {
        let dr = input[i];

        /*
            현재 값 ( 다음값 ) 이면 괄호를 닫는 부분이므로 레이저 발사 
            레이저 발사하면 스텍의 길이 만큼 잘리므로 이를 더해주고
            i+1 해줌 => 다음 값인 ) 는 이미 검사했으므로 그 다음 값을 검사하기 위해
         */
        if (dr == '(' && input[i + 1] == ')') {
            answer += stacks.length;
            i += 1;
        }
        // 현재 값이 ( 이면 쇠막대기가 시작하는 부분이므로 스텍이 쌓아줌
        else if (dr == '(') {
            stacks.push('(');
        }
        // 현재 값이 ) 이면 쇠막대기가 닫히는 부분이므로 스텍에서 빼주고
        // 1을 더해줌 => 쇠막대기가 닫히면서 닫힌 쇠막대기 한개(잘린 기준 맨오른쪽)가 남아있으므로
        else {
            stacks.pop();
            answer += 1;
        }

    }

    return answer;

}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n')[0];
console.log(solution(input));