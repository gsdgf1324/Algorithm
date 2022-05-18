/* [ Sliding Window Method ] 
 => 언제 적용 될 수 있는지 ?
    1. 윈도우 사이즈가 상수여야함
    2. 모든 윈도우를 순회해야함 
    3. 연속한 두 윈도우 사이에 효율적인 갱신방법
 => 크기가 일정한 범위들을 한 방향으로 순서대로 조회하는 방법
 => 교집합의 정보를 공유하고, 차이가 나는 약쪽 끝 원소만 갱신하는 방법
 */

function solution(input) {
    let N = Number(input[0].split(' ')[0]); // 종이컵의 수
    let K = Number(input[0].split(' ')[1]); // 선택할 종이컵의 수
    let numArr = input[1].split(' ').map((dr) => Number(dr)); // 적힌 숫자들

    /* case1. 시간 복잡도 : O(N**2);

    for (let i = 0; i + K - 1 < N; i++) {
        // i 번쨰 범위 : data[i] ~ data[i+k-1] 범위를 나타낸다. 

        // 각 범위에 대해 합을 구한 후 짝수인지 체크
        let sum = 0;
        for (let j = i; j <= i + K - 1; j++) {
            sum += numArr[j];
        }

        if (sum % 2 == 0) {
            return 'YES'
        }
    }
    
    // ==> Sliding Window Method 기법 사용
    */

    /* case2. 시간복잡도 : O(n)번 
     => 반복문 하나만 가지고 구현해보기
     => deque를 사용해서 구현해보기
    */
    let sum = 0;
    for (let i = 0; i < K; i++) {
        sum += numArr[i];
    }
    if (sum % 2 == 0) {
        return "YES"
    }

    for (let i = 1; i + K - 1 < N; i++) {

        // numArr[i - 1] : 빠져나갈 왼쪽 값
        // numArr[i + K - 1] : 들어오는 오른쪽 값
        sum = sum - numArr[i - 1] + numArr[i + K - 1];

        if (sum % 2 == 0) {
            return "YES"
        }
    }

    return "NO"
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))