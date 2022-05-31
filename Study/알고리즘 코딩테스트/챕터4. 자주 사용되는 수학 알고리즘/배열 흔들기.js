/*
배열에서 쉬프트 연산관련 문제를 풀때
생각해보면 인덱스가 순환하는 것이므로,
배열의 첫 원소의 인덱스만 알고 있다면 상대적인 위치로 다른 원소의 위치들도 쉽게 알 수 있다.
( ex) 원소가 모두 왼쪽으로 한칸 이동 => 첫번째 원소의 기준점이 오른쪽으로 한칸 이동하는 것과 같다. )
=> 따라서 매 번 실제로 원본 배열을 이동사키지 않고, '이동 후 가장 왼쪽 원소가 될' 원소의 인덱스만 관리해도 충분하다! 

( idx (+ 혹은 -) shift연산값 + 배열길이 ) % 배열길이 => shift연산 했을 때 0번째의 idx값이 나옴
*/
function solution(input) {

}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))