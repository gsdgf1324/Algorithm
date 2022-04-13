function solution(n) {
    return Number(String(n).split('').sort((a,b)=>Number(b)-Number(a)).join(''))
}

let n = 118372;
console.log(solution(n));