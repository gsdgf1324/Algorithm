function solution(brown, yellow) {
    var answer = [];

    for (let i = 1; i <= Math.floor(Math.sqrt(yellow)); i++) {
        if (yellow % i == 0) {
            let q = yellow / i;
            if (2 * (i + 2) + 2 * q == brown) {
                answer = i >= q ? [i + 2, q + 2] : [q + 2, i + 2];
                break;
            }
        }
    }

    return answer;
}

console.log(solution(24,24))