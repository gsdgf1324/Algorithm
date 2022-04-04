function solution(input) {
    input = input[0].split(' ')
    let A = Number(input[0]), B = Number(input[1]), V = Number(input[2]);
    return 1 + Math.ceil((V - A) / (A - B))
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))

// 달팽이가 하루(낮,밤)에 A-B만큼 올라감.
// 정상에 올라간 후에는 미끄러지지 않으므로 최초로 정상에 올라간 날은 무조건 낮 시간대 
// 따라서 하루 기준으로 V-A 만큼 올라가면 정상에 올라갔다고 볼 수 있음