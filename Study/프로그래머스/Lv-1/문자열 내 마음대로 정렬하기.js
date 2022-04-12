// 문자열 정렬의 경우 >, < 연산이 가능
// return -1 => a를b보다 낮은 인덱스로 정렬 a, b
// return 0  => a, b 변경하지 않음
// return 1  => b를a보다 낮은 인덱스로 정렬 b, a  

function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] < b[n]) {
            return -1
        } else if (a[n] == b[n]) {
            if (a < b) {
                return -1
            } else if (a == b) {
                return 0
            } else {
                return 1
            }
        } else {
            return 1
        }
    })
}

let strings = ["sun", "bed", "car"];
let n = 1;
console.log(solution(strings, n))