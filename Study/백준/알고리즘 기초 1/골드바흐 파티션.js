function solution(input) {

    input = input.slice(1).map((dr) => Number(dr));
    let answer = [];
    let pArr = primeArr(Math.max(...input));

    input.forEach((dr) => {
        let cnt = 0;

        for (let i = 0; i <= Math.floor(dr / 2); i++) {
            if (pArr[i] && pArr[dr - i]) {
                cnt++;
            }
        }

        answer.push(cnt);
    });

    return answer.join('\n');
}

function primeArr(num) {
    let arr = Array.from({ length: num + 1 }).fill(true);

    // 0,1은 소수가 아님
    arr[0] = false;
    arr[1] = false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (arr[i] == false) continue;

        for (let j = i * i; j <= num; j += i) {
            arr[j] = false;
        }
    }

    return arr
}


// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));