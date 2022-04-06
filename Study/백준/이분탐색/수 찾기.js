function solution(input) {
    let result = [];
    let originArr = input[1].split(' ').map((dr) => Number(dr)).sort((a, b) => a - b);
    let findArr = input[3].split(' ').map((dr) => Number(dr));

    let strIdx = 0;
    let endIdx = originArr.length - 1;

    findArr.forEach((dr) => {
        // result.push(binarySearch(originArr, dr));
        result.push(binarySearch(originArr, strIdx, endIdx, dr));
    });

    console.log(result.join('\n'))
}

function binarySearch(arr, sIdx, eIdx, findValue) {
    let mid = Math.floor((sIdx + eIdx) / 2);

    if (eIdx - sIdx >= 0) {
        if (arr[mid] == findValue) {
            return 1
        } else if (arr[mid] > findValue) {
            return binarySearch(arr, sIdx, mid - 1, findValue);
        } else {
            return binarySearch(arr, mid + 1, eIdx, findValue);
        }
    }

    return 0
}

// function binarySearch(originArr, findValue) {
//     let sIdx = 0;
//     let eIdx = originArr.length - 1;
//     let mid = Math.floor((sIdx + eIdx) / 2);
//     while (eIdx - sIdx >= 0) {
//         // 탐색값이 같으면 종료
//         if (originArr[mid] == findValue) {
//             return 1
//         }
//         // 탐색값이 크면 왼쪽으로
//         else if (originArr[mid] > findValue) {
//             eIdx = mid - 1;
//         }
//         // 탐색값이 작으면 오른쪽으로
//         else {
//             sIdx = mid + 1;
//         }

//         mid = Math.floor((sIdx + eIdx) / 2);
//     }

//     return 0
// }

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
solution(input);