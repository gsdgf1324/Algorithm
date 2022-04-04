function solution(input) {
    input.forEach((dr) => {
        dr = Number(dr);
        let eNum = Math.floor(dr / 2);

        for (let i = eNum; i >= 2; i--) {
            if (isPrime(i) && isPrime(dr - i)) {
                console.log(`${i} ${dr - i}`);
                break
            }
        }
    })
}

function isPrime(num) {
    if (num == 2) return true

    for (let i = 2; i <= Math.floor(num / 2); i++) {
        if (num % i == 0) {
            return false
        }
    }

    return true
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
solution(input);