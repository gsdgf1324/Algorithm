function solution(a, b) {
    let answer = 0;
    a.forEach((dr, idx) => answer += (a[idx] * b[idx]));
    return answer;
}

let a = [1, 2, 3, 4];
let b = [-3, -1, 0, 2];
console.log(solution(a,b));

// a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]