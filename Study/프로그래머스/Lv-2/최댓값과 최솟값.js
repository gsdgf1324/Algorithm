function solution(s) {
    s = s.split(' ').map((dr) => Number(dr)).sort((a, b) => a - b);
    return `${s[0]} ${s[s.length - 1]}`;
}

let s = "-1 -2 -3 -4";
console.log(solution(s));