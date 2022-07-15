function solution(input) {

    let stacks = [];
    let cntObj = {};

    let answer = [];

    input = input[1].split(' ').map((dr) => Number(dr));

    answer = Array.from({ length: input.length }).fill(-1);

    for (let item of input) {
        if (cntObj[item]) {
            cntObj[item] += 1;
        } else {
            cntObj[item] = 1;
        }
    }

    input.forEach((dr, idx) => {

        // 시간복잡도 안좋음 => filter O(n)이므로 여러번 호출하면 [ 호출하는 수 * O(n)] 만큼이므로
        // if (!cntObj[dr]) {
        //     let cnt = input.filter((item) => item == dr);
        //     cntObj[dr] = cnt.length;
        // }

        while (stacks.length > 0 && cntObj[input[stacks[stacks.length - 1]]] < cntObj[dr]) {
            let insertIdx = stacks.pop();
            answer[insertIdx] = dr;
        }

        stacks.push(idx);
    });

    return answer.join(' ');
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));