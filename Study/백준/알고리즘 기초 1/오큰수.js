function solution(input) {
    let stacks = [];

    input = input[1].split(' ').map((dr) => Number(dr));

    let answer = Array.from({ length: input.length }).fill(-1);

    input.forEach((dr, idx) => {

        // 비어있으면 비교할 값이 없으므로 무조건 인덱스 값 넣어서 저장
        if (stacks.length == 0) {
            stacks.push(idx);
        } else {

            // 스텍에 값이 있고 
            // 마지막 스텍인덱스가 가리키는 값보다 현재 값이 더 크면 스텍인덱스보다 큰 수중 가장 왼쪽에 있는 값이므로
            // 스텍인덱스의 위치에 현재 값을 넣어주고
            // 이를 반복
            while (stacks.length > 0 && input[stacks[stacks.length - 1]] < dr) {
                let insertIdx = stacks.pop();
                answer[insertIdx] = dr;
            }

            stacks.push(idx); // 검사 종료 후 현재 인덱스는 비교할 대상이 없으므로 무조건 넣어줌

        }
    });

    return answer.join(' ');

}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));

// 참고한 글  : https://minse5k.github.io/boj-17298/ 