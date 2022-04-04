function solution(input) {
    let convertArr = input[0].split('-').map((dr) => convertEval(dr));
    let minValue = convertArr[0];

    for (let i = 1; i < convertArr.length; i++) {
        minValue -= convertArr[i];
    }

    return minValue
}

function convertEval(calcStr) {
    let result = 0;
    let plusArr = calcStr.split('+');
    plusArr.forEach((dr)=>{
        result += Number(dr);
    });
    return result
    // return (new Function("return " + calcStr))();
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));