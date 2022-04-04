function solution(input) {
    let cur = 666;
    let cnt = 1;

    while (true) {
        if (cnt == Number(input)) break;

        cur++;
        if (`${cur}`.includes('666')) cnt += 1;
    }

    return cur
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n')[0];
console.log(solution(input));