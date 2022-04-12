function solution(N, stages) {

    let answer = [];
    let mData = new Map();
    let totalNom = 0; // 이전 스테이지까지 통과하지 못한 수

    for (let i = 1; i <= N; i++) {
        let nonPass = stages.filter((dr) => dr <= i).length;
        let nonPassRate = (nonPass - totalNom) / (stages.length - totalNom);
        mData.set(i, nonPassRate);
        totalNom = nonPass;
    }

    let mapToArray = [...mData] // 2중 배열로 변환 
    mapToArray.sort((a, b) => b[1] - a[1]); //정렬
    mapToArray.map((dr) => answer.push(dr[0])) //키값만 넣어주기

    return answer;
}

let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N, stages));

// 실패율 : 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

// 전체 스테이지의 개수 N, 
// 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return