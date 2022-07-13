function solution(input) {
    input = input.split('>');

    let answer = "";

    input.forEach((dr) => {
        // 테그
        if (dr[0] == '<') {
            answer += `${dr}>`
        }
        // 테그 + 문자열 포함
        else {
            dr = dr.split('<');

            // 문자열
            answer += convert(dr[0]);

            // 테그부분
            if (dr[1]) {
                answer += `<${dr[1]}>`;
            }
        }
    });

    return answer
}

function convert(data) {

    if (!data) {
        return ''
    }

    let answer = '';
    data = data.split(' ');

    data.forEach((dr, idx) => {
        if (idx == 0) {
            answer += dr.split('').reverse().join('');
        } else {
            answer += ` ${dr.split('').reverse().join('')}`;
        }
    });

    return answer;
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n')[0];
console.log(solution(input));