function solution(input) {
    input = Number(input[0].split(' ')[0]);
    console.log(getTotal(input-1));
}

function getTotal(num) {
    if(num<=1){
        return 1
    }else{
        return getTotal(num-1) + getTotal(num-2)
    }
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
solution(input);

// 1 1 2 3 5 8 13 21 34 55