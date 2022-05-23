/* 피보나치 수열
이전 두 값을 더해 현재 값을 만들어 나가는 수열 
0 1 1 2 3 5 8 13 21 . . .

// => 배열 없이 변수 3개만 사용해서 구현해보기 !! (성능 생가하지 말고!)

* 정적 데이터 캐싱하기 필요!
=> 캐싱 ? : 이미 계산된 데이터를 기준으로 계산된 값을 가져다 쓰는 것

=> 이 문제에서는 구해야할 가장 높은 값을 기준으로 데이터를 만들고 만든 데이터에서 값을 가져다 쓰자!
 */

function solution(input) {
    let answer = [];

    input = input.slice(1).map((dr) => Number(dr));

    let maxNum = Math.max(...input);
    let fiboArr = getFibo_2(maxNum);

    for (let i = 0; i < input.length; i++) {
        answer.push(fiboArr[input[i]]);
    }

    return answer
}

// 재귀 함수로 N번째 값만 구하기
function getFibo_1(num) {
    if (num <= 2) {
        return 1
    } else {
        return (getFibo_1(num - 1) + getFibo_1(num - 2) % 100000000)
        // overflow 방지
    }
}

// 배열을 통한 구현 (점화식)
function getFibo_2(num) {

    if (num == 0) return [0];
    else if (num == 1) return [0, 1];

    let fib = [0, 1];
    for (let i = 2; i <= num; i++) {
        fib.push((fib[i - 1] + fib[i - 2]) % 100000000); //overflow 방지
    }

    return fib
}

// '/dev/stdin'
let input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))