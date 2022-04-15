/*
//1. 입력받은 숫자를 문자열 배열로 바꾼 후 내림차순으로 정렬한다.
//2. 정렬한 배열의 모든 조합 리스트를 구한다. (=> 내림차순으로 정렬 후 조합하였기때문에 뽑힌 데이터도 내림차순을 정렬된 데이터)
//3. 조합 리스트를 돌며 최초 30으로 나누어 떨어지는 값을 리턴
//=> 이렇게 풀면 예제들에 대해 정답은 나오나 수가 커지면 메모리 초과, 시간초과가 나옴

function solution(input) {
    input = input[0].split('').sort((a, b) => Number(b) - Number(a))

    let combineArr = getCombination(input, input.length);

    for (let i = 0; i < combineArr.length; i++) {
        if (Number(combineArr[i].join('')) % 30 == 0) {
            return Number(combineArr[i].join(''));
        }
    }

    return -1
}
function getCombination(arr, comNum) {
    if (comNum == 1) return arr.map((dr) => [dr]);
    let result = [];
    arr.forEach((fixed, idx, origin) => {
        let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)]
        let combineArr = getCombination(rest, comNum - 1);
        let attachArr = combineArr.map((dr) => [fixed, ...dr]);
        result.push(...attachArr);
    });

    return result
}
*/

/*
1. 30의 배수의 특징에 대해 생각해보자.
3*10 이므로 3, 10으로 나누어 떨어지는 공통적인 특징이 있어야한다.
 -3의 배수의 특징은 각 자리 숫자의 합이 3의 배수여야 한다.
 -10의 배수의 특징은 마지막 숫자가 0이어야한다.
따라서 종합해보면 입력받은 값에 0이 포함되어 있어야 하며, 각 자리 수의 합은 3의 배수인 수를 찾아 내림차순 정렬하면 된다!
*/
function solution(input) {
    input = input[0].split('');

    if (input.includes('0')) { // 0포함 여부
        let sums = input.reduce((acc, cur) => acc += Number(cur), 0);
        if (sums % 3 == 0) { // 자리 수의 합이 3의 배수 일때
            return input.sort((a, b) => Number(b) - Number(a)).join('')
            //최대 자리수가 10만이므로 Number()로 감싸면 표현 오류가 나기때문에 문자열로 리턴
        }
    }

    return -1;
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))