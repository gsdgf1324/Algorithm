function solution(input) {
    let result = [];
    let originArr = input[1].split(' ').map((dr) => Number(dr)).sort((a, b) => a - b);
    let findArr = input[3].split(' ').map((dr) => Number(dr));

    findArr.forEach((dr) => {
        result.push(binarySearch(originArr, dr));
    });

    console.log(result.join('\n'))
}

function binarySearch(originArr, findValue) {
    let sIdx = 0;
    let eIdx = originArr.length - 1;
    let mid = Math.floor((sIdx + eIdx) / 2);
    while (eIdx - sIdx >= 0) {
        // 탐색값이 같으면 종료
        if (originArr[mid] == findValue) {
            return 1
        }
        // 탐색값이 크면 왼쪽으로
        else if (originArr[mid] > findValue) {
            eIdx = mid - 1;
        }
        // 탐색값이 작으면 오른쪽으로
        else {
            sIdx = mid + 1;
        }

        mid = Math.floor((sIdx + eIdx) / 2);
    }

    return 0
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
solution(input);