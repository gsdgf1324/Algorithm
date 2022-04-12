function getDivNum(num) {
    let cnt = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) cnt++;
    }
    return cnt
}

function solution(left, right) {
    var answer = 0;

    for (let i = left; i <= right; i++) {
        if (getDivNum(i) % 2 == 0) {
            answer += i
        } else {
            answer -= i
        }
    }
    return answer;
}

let left = 13;
let right = 17;
console.log(solution(left, right));