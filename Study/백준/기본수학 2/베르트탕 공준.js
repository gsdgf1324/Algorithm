function solution(input) {

    input.forEach((dr) => {

        dr = Number(dr);

        if (dr != 0) {
            let primeList = Array.from({ length: dr * 2 + 1 }, (dr) => true);
            primeList[0] = false, primeList[1] = false; // 0,1은 소수가 아님

            // 에라토스테네스의 체 활용
            for (let i = 2; i <= dr * 2; i++) {
                if (primeList[i]) {
                    for (let j = 2 * i; j <= dr * 2; j += i) {
                        if (primeList[j]) {
                            primeList[j] = false
                        }
                    }
                }
            }
            //

            primeList = primeList.slice(Math.ceil(primeList.length / 2))
            console.log(primeList.filter((dr) => dr == true).length)
        }

    })
}

// 에라토스테네스의 체 활용하여 풀기
// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
solution(input);