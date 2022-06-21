/*
0 0
10 10
89 76
97 79
86 84
94 87
53 14
54 27
40 15
41 28
=> 170.00

* 정사각형의 넓이
인접한 두 개의 점 A,B를 결정하면 선분 AB가 포함되는 정사각형은 두개 뿐이다. 
=> 정사각형을 이루기 위한 나머지 두 점은 수학적 성질을 이용해 계산할 수 있다.
 */

function solution(input) {

}

// 점의 정렬 방법
function compareTo(p1, p2) {
    if (p1.x != p2.x) {
        return p1.x - p2.x;
    }

    return p1.y - p2.y;
}
// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));