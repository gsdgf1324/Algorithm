function solution(n) {

    //나머지가 1이 되는 최대경우는 주어진 값의 -1 한 값.
    let answer = n - 1;

    for (let i = 2; i < n - 2; i++) {
        if (n % i == 1 && answer > i) {
            answer = i;
        }
    }

    return answer;
}

let n = 12;
console.log(solution(n))