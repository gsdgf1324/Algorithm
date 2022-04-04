function solution(input) {
    let max = -1000000000;
    let min = 1000000000;

    let signs = ['+', '-', '*', '/'];
    let singArr = Array.from(input[2].split(' ').map((dr, idx) => { return dr = signs[idx].repeat(dr) }).join(''));
    let numArr = input[1].split(' ').map((dr) => Number(dr));

    console.log(singArr, numArr);
}

'/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
solution(input);

// dfs bfs 