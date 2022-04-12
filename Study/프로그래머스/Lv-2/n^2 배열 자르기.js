function solution(n, left, right) {
    var answer = [];

    let cnt = 0;
    out: for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (cnt < left) {
                cnt += 1;
                continue
            } else {
                if (i >= j) {
                    answer.push(i)
                } else {
                    answer.push(j)
                }
                cnt += 1;
            }

            if (cnt > right) {
                break out
            }

        }
    }

    return answer
}

// 1234
// 2234
// 3334
// 4444

let n = 4;
let left = 7;
let right = 14;
console.log(solution(n, left, right));

// 좌표로 풀기