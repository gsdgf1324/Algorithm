function solution(input) {
    input = input.slice(1);

    input.forEach((dr) => {
        dr = dr.split(' ');
        let x = Number(dr[0]);
        let y = Number(dr[1]);

        let filtered = input.filter((v) => {
            v = v.split(' ')
            let vx = Number(v[0]);
            let vy = Number(v[1]);
            return vx != x && vy < y
        }).reduce((acc, cur) => {
            return acc + Number(cur.split(' ')[1])
        }, 0);

        console.log(filtered)
    })

}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
solution(input);

// 시간초과..