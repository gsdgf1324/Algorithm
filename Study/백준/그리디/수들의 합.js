/*
1. 1~입력받은 값까지 순서대로 더하며 더한 개수만큼 카운트를 체크한다.
2. 더한 값이 입력받은 값보다 커지는 경우 break 걸고 그때가 N의 최대값

 문제 예시와 같이 200의 경우 
 1+2+3+…+17+18+19 = 190 (count 19)
 위 값에 20을 더하면 200을 초과하니 break에 걸려 반복문을 빠져나온다. 
*/
function solution(input) {
    input = Number(input[0]);
    let answer = 0;
    let sums = 0;

    for (let i = 1; i <= input; i++) {
        sums += i;
        if (sums < input) { // 합이 입력받은 값보다 작으면
            answer += 1;
        } else if (sums == input) { // 합이 입력받은 값이 같으면
            answer += 1
            break;
        } else { // 합이 입력받은 값보다 커지면
            break;
        }
    }

    return answer
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))