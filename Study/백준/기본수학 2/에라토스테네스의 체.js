// function solution(input) {
//     input = input[0].split(' ')
//     let N = Number(input[0]), K = Number(input[1]);
//     let primeList = Array.from({ length: N + 1 }, (v) => true);
//     primeList[0] = false; // 0 
//     primeList[1] = false; // 1

const { pipeline } = require('stream');

//     let cnt = 0;
//     let answer = 0;

//     out: for (let i = 2; i < primeList.length; i++) {
//         if (primeList[i] && isPrime(i)) {
//             cnt += 1
//             primeList[i] = false;
//             if (cnt == K) {
//                 answer = i;
//                 break out
//             }
//             for (let j = i + 1; j < primeList.length; j++) {
//                 if (primeList[j] && j % i == 0) {
//                     cnt += 1
//                     primeList[j] = false;
//                     if (cnt == K) {
//                         answer = j;
//                         break out
//                     }
//                 }
//             }
//         }
//     }


//     return answer
// }

// function isPrime(num) {
//     let answer = true; //소수임

//     if (num == 2 || num == 3) return true

//     for (let i = 2; i <= Math.floor(num / 2); i++) {
//         if (num % i == 0) {
//             answer = false; //소수가아님
//             break;
//         }
//     }
//     return answer;
// }

// '/dev/stdin'
// const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
// console.log(solution(input))


// https://junkim.netlify.app/posts/programmers0807
// 참고해서 다시 푼 결과
function solution(input) {

    let cnt = 0;
    let N = Number(input[0]), K = Number(input[1]);
    let primeList = Array.from({ length: N + 1 }, (dr) => true);
    primeList[0] = primeList[1] = false;

    for (let i = 2; i <= N; i++) {
        if (primeList[i]) {
            for (let j = i; j <= N; j += i) {
                if (primeList[j]) {
                    cnt += 1;
                    primeList[j] = false;

                    if (cnt == K) {
                        return j
                    }
                }
            }
        }
    }

    return -1
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n')[0].split(' ');
console.log(solution(input))