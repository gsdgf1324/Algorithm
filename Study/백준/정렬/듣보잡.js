function solution(input) {
    let answer = [];
    let NMlist = input.splice(0, 1);
    let N = Number(NMlist[0][0]);

    let NList = input.splice(0, N);
    let MList = input;

    NList.forEach((dr) => {
        if (MList.includes(dr)) {
            answer.push(dr);
        }
    });

    answer = answer.sort((a, b) => {
        if (a < b) return -1;
        else if (a == b) return 0;
        else return 1
    });

    return `${answer.length}\n${answer.join('\n')}`;
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));

// ??? 왜?