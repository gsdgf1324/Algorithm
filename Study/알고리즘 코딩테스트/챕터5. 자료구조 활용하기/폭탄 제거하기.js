/*
7 7
1 2
2 3
3 4
4 5
3 7
7 6
6 2
=> NO

7 5
1 2
2 3
3 4
4 5
6 7
=> YES

그래프와 인접 리스트
- 그래프는 여러 정점 간의 1:1관계를 표현한 모양이다
- 대표적인 비선형 자료구조
- 하나 이상의 정점(node, vertex)을 가진다.
- 두 정점 사이를 잇는 선을 간선 이라고 한다. (단방향, 양방향)
 */

function solution(input) {
    let settings = input.shift();
    let N = settings[0];
    let M = settings[2];

    let bombGraph = {}; // 폭탄 간 그래프
    let removedList = []; // 제거한 폭탄
    let removeableList = []; // 제거할 수 있는 폭탄

    // 주어진 데이터를 통해 폭탄간의 관계를 그래프 데이터로 만들기
    for (let node of input) {
        let p = node[0];
        let c = node[2];

        bombGraph[p] = bombGraph[p] ? [...bombGraph[p], c] : [c];
    }


    // 삭제해도 연쇄폭발이 일어나지 않는 폭탄 넣어주기 (연결된 노드가 없는  경우)
    for (let i = 1; i <= N; i++) {
        if (!bombGraph[i]) {
            removeableList.push(`${i}`);
        }
    }

    // 삭제할 수 있는 폭탄이 있다면
    while (removeableList.length > 0) {

        let delBomb = removeableList.pop(); // 삭제한 폭탄
        removedList.push(delBomb);

        for (let bomb of Object.keys(bombGraph)) {

            // 만약 연결된 폭탄 리스트 중 삭제한 폭탄이 있다면 해당 폭탄을 배열에서 삭제 후, 길이가 0이면 삭제할 수 있는 폭탄으로 넣어줌
            if (bombGraph[bomb].includes(delBomb)) {
                bombGraph[bomb] = bombGraph[bomb].filter((dr) => dr != delBomb);

                if (bombGraph[bomb].length == 0) {
                    removeableList.push(bomb);
                }

            }

        }

    }

    return N == removedList.length ? 'YES' : 'NO'

}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))