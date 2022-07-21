function solution(input) {
    input = input.map((dr) => Number(dr)).sort((a, b) => a - b);

    let total = input.reduce((acc, cur) => acc += cur, 0); // 전체 합

    let sIdx = 0; // 시작 idx
    let eIdx = input.length - 1; // 끝 idx

    while (true) {
        let temp = total - (input[sIdx] + input[eIdx]); // 두 수를 뺀 값이

        // 100보다 크면 더 큰수를 빼줘야하므로 sIdx++
        if (temp > 100) {
            sIdx += 1;
        }
        // 100보다 작으면 더 작은수를 빼줘야하므로 eIdx--
        else if (temp < 100) {
            eIdx -= 1;
        } else {
            break;
        }
    };

    input.splice(sIdx, 1);
    input.splice(eIdx - 1, 1); //sIdx를 삭제했으므로 인덱스가 한칸씩 밀림

    return input.join('\n');
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));