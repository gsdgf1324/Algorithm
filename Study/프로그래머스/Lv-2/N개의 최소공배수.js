function solution(arr) {
    let result = arr[0];
    arr.sort((a, b) => a - b);

    for (let i = 1; i < arr.length; i++) {
        result = result * arr[i] / GCD(result, arr[i])
    }

    return result;
}

function GCD(n1, n2) {
    let answer = 1;

    if (n1 == n2) return n1

    for (let i = 2; i <= n1; i++) {
        if (n1 % i == 0 && n2 % i == 0) {
            answer = i;
        }
    }

    return answer
}

let arr = [3, 4, 9, 16];
console.log(solution(arr));