function solution(absolutes, signs) {
    var answer = 0;
    signs.forEach((dr,idx) => dr ? answer += absolutes[idx] : answer -= absolutes[idx])
    return answer;
}

let absolutes = [4, 7, 12];
let signs = [true, false, true];
console.log(solution(absolutes, signs));