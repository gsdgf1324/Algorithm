function solution(input) {
    let answer = 0;
    let N = input[1].split(' ').map((dr) => Number(dr)), M = input[3].split(' ').map((dr) => Number(dr));

    N.sort((a, b) => b - a);
    M.sort((a, b) => b - a);

    while (true) {
        if (N[0] < M[0]) {
            return -1;
        }

        answer += 1;
        for (let i = 0; i < N.length; i++) {
            if (M.length > 0) {
                let fIdx = M.findIndex((dr) => dr <= N[i]);
                if (fIdx != -1) {
                    M = [...M.slice(0, fIdx), ...M.slice(fIdx + 1)]
                }
            }
        }

        if (M.length == 0) break
    }

    return answer
}
// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));