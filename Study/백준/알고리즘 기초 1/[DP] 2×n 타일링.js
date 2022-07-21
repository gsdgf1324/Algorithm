function solution(input) {
    input = Number(input[0]);
    return fibo(input);
}

function fibo(num) {
    /* 배열 */
    // let fiboArr = Array.from({ length: num }).fill(0);
    // fiboArr[0] = 1;
    // fiboArr[1] = 2;
    // let checkCnt = 2;

    // while (checkCnt < num) {
    //     fiboArr[checkCnt] = (fiboArr[checkCnt - 1] + fiboArr[checkCnt - 2]) % 10007;
    //     checkCnt++;
    // }

    // return fiboArr[num - 1];

    /* 객체 */
    let fiboObj = { 1: 1, 2: 2 };

    for (let i = 3; i <= num; i++) {
        fiboObj[i] = (fiboObj[i - 1] + fiboObj[i - 2]) % 10007;
    }

    return fiboObj[num]

}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));