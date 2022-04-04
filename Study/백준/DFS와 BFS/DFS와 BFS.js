function solution(input) {
    let info = input.slice(0, 1)[0].split(' ')[2];
    let innerArr = new Object();

    input.slice(1).forEach((dr) => {
        dr = dr.split(' ');

        let key = dr[0];
        let value = dr[1];

        if (innerArr[`${key}`]) {
            innerArr[`${key}`] = [...innerArr[`${key}`], value].sort((a, b) => a - b);
        } else {
            innerArr[`${key}`] = [value];
        }

        if (innerArr[`${value}`]) {
            innerArr[`${value}`] = [...innerArr[`${value}`], key].sort((a, b) => a - b);
        } else {
            innerArr[`${value}`] = [key];
        }

    });

    console.log(DFS(innerArr, info));
    console.log(BFS(innerArr, info));

}

// 깊이 우선 탐색
function DFS(innerArr, curNode) {
    let visitedArr = [];
    let needArr = [curNode];

    while (needArr.length !== 0) {
        let node = needArr.shift();
        if (!visitedArr.includes(node)) {
            visitedArr.push(node);
            needArr = innerArr[`${node}`] ? [...innerArr[`${node}`], ...needArr] : [...needArr];
        }
    }
    return visitedArr.join(' ')
}

// 너비 우선 탐색
function BFS(innerArr, curNode) {
    let visitedArr = [];
    let needArr = [curNode];

    while (needArr.length !== 0) {
        let node = needArr.shift();
        if (!visitedArr.includes(node)) {
            visitedArr.push(node);
            needArr = innerArr[`${node}`] ? [...needArr, ...innerArr[`${node}`]] : [...needArr];
        }
    }

    return visitedArr.join(' ')
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
solution(input);

// https://devuna.tistory.com/32
// https://suyeon96.tistory.com/32
// https://velog.io/@sangbooom/JS-BFS-DFS

/* DFS (깊이우선탐색 - 최대한 깊이 탐색한 후 더 이상 갈 곳이 없으면 옆으로 이동)
1. 모든 노드를 방문하고자 하는 경우에 이 방법을 선택함
2. 깊이 우선 탐색(DFS)이 너비 우선 탐색(BFS)보다 좀 더 간단함
3. 검색 속도 자체는 너비 우선 탐색(BFS)에 비해서 느림
4. 스택 또는 재귀함수로 구현 (현재 정점에서 갈 수 있는 점들까지 들어가면서 탐색)
*/

/* BFS (너비우선탐색 - 최대한 넓게(인접한) 탐색한 후 더 이상 갈 곳이 없으면 아래로 이동)
1. 주로 두 노드 사이의 최단 경로를 찾고 싶을 때 이 방법을 선택함
2. 큐를 이용해서 구현 (현재 정점에 연결된 가까운 점들부터 탐색)
*/

/* DFS와 BFS의 시간복잡도
두 방식 모두 조건 내의 모든 노드를 검색한다는 점에서 시간 복잡도는 동일합니다.
DFS와 BFS 둘 다 다음 노드가 방문하였는지를 확인하는 시간과 각 노드를 방문하는 시간을 합하면 됩니다.

-인접 리스트
(그래프의 각 정점에 인접한 정점들을 연결리스트(vector의 배열)로 표현하는 방법, 즉 정점의 개수만큼 인접리스트가 존재) : O(N+E)
-인접 행렬
(그래프의 연결 관계를 이차원 배열로 나타내는 방식): O(N²)

=> 일반적으로 E(간선)의 크기가 N²에 비해 상대적으로 적기 때문에 인접 리스트 방식이 효율적
*/

/* DFS, BFS 활용한 문제 유형/응용
1. 그래프의 모든 정점을 방문하는 것이 주요한 문제
=> DFS, BFS 두 가지 방법 중 어느 것을 사용하셔도 상관없음
2. 경로의 특징을 저장해둬야 하는 문제
=> 예를 들면 각 정점에 숫자가 적혀있고 a부터 b까지 가는 경로를 구하는데 경로에 같은 숫자가 있으면 안 된다는 문제 등,
   각각의 경로마다 특징을 저장해둬야 할 때는 DFS를 사용(BFS는 경로의 특징을 가지지 못함)
3. 최단거리 구해야 하는 문제
=> 미로 찾기 등 최단거리를 구해야 할 경우, BFS가 유리합니다.
   (깊이 우선 탐색으로 경로를 검색할 경우 처음으로 발견되는 해답이 최단거리가 아닐 수 있지만, 
   너비 우선 탐색으로 현재 노드에서 가까운 곳부터 찾기 때문에경로를 탐색 시 먼저 찾아지는 해답이 곧 최단거리)
*/


/*
const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"],
};

const DFS = (graph, startNode) => {
    const visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들

    needVisit.push(startNode); // 노드 탐색 시작

    while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
        const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
        if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
            visited.push(node);
            needVisit = [...graph[node], ...needVisit];
        }
    }
    return visited;
};

const BFS = (graph, startNode) => {
    const visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들

    needVisit.push(startNode); // 노드 탐색 시작

    while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
        const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
        if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
            visited.push(node);
            needVisit = [...needVisit, ...graph[node]];
        }
    }
    return visited;
};
*/