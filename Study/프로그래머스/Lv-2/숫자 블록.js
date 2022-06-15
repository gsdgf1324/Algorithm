function solution(begin, end) {
    var answer = [];
    for (let i = begin; i <= end; i++) {
        if (i == 1) {
            answer.push(0);
        } else {
            answer.push(getGD(i));
        }
    }
    return answer;
}

// num의 약수 중 가장 큰 수 (1,자기자신 제외)
function getGD(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        let div = num / i;
        if (num % i == 0 && div <= 10000000) {
            return i > div ? i : div;
        }
    }

    return 1;
}

let begin = 1;
let end = 10;
console.log(solution(begin, end));