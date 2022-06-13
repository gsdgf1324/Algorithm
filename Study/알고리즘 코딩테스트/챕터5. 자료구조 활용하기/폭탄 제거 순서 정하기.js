/*
7 5
1 2
2 3
3 4
4 5
6 7
=> 5 4 3 2 1 7 6

PriorityQueue(Heap) 이해하기 !
- 우선순위 큐(PriorityQueue)는 여러 데이터 중 가장 우선순위가 높은 데이터에 대한 빠른 갱신과 접근이 가능할 떄 사용
- 비교 가능한 데이터는 자유롭게 추가
- 접근/삭제가 가능한 원소는 '저장된 전체 데이터들 중'에 가장 우선순위가 높은 데이터
- 일반적으로 Heap구조로 구현, 배열과 Linked List로도 구현 가능
- N개의 데이터를 차례로 삽입 후, 차례로 모두 Pop하면 정렬된 상태로 꺼내 올 수 있음
- push,pop 시간복잡도 O(log2N)

Heap 
- 완전 이진트리 구조로 데이터를 관리
- 부모 노드는 양 자식 노드보다 높은 우선순위를 가짐 
*/

function solution(input) {
    let settings = input.shift();
    let N = settings[0];
    let M = settings[2];
}

function compareTo(a, b) {
    return a > b
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));