/* 
7 3
=> 3 6 2 7 5 1 4

큐를 사용해서 풀기!
게임에서 제외해야 할 플레이어라면 pop하고
그렇지 않다면 pop한 후 나온 데이터를 push해주면 된다.
*/

function solution(input) {
    let N = Number(input[0].split(' ')[0]);
    let M = Number(input[0].split(' ')[1]);
    let user = Array.from({ length: N }, (dr, idx) => idx + 1); // 1~N
    let answer = [];

    for (let i = 0; i < N; i++) {

        let jump = 1 + (M - 1) % user.length; // 1based 나머지

        // jump(지목)전까지는 shift한 데이터를 다시 push 해줌 => 순환
        for (let j = 0; j < jump - 1; j++) {
            let p = user.shift();
            user.push(p);
        }

        // jump(지목)당한 데이터를 빼주고
        let dead = user.shift();

        // 정답 배열에 넣어줌
        answer.push(dead);
    }

    return answer

}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))