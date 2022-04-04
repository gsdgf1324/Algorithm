function solution(info, query) {
    var answer = [];

    info.map((dr, idx) => {
        info[idx] = dr.split(" ");
    })

    for (let i = 0; i < query.length; i++) {
        let dr = query[i]

        let splitDr = dr.split(" and ")
        let condition = [];

        for (let i = 0; i < splitDr.length; i++) {
            if (i == splitDr.length - 1) {
                condition.push(splitDr[i].split(" ")[0]);
                condition.push(splitDr[i].split(" ")[1]);
            } else {
                condition.push(splitDr[i]);
            }
        }

        answer.push(checkCount(info, condition))
    }
    
    return answer;
}

function checkCount(info, condition) {
    let cnt = 0;
    for (let i = 0; i < info.length; i++) {
        let allPass = true;
        for (let j = 0; j < 5; j++) {
            if (j == 4 && Number(info[i][j]) >= Number(condition[j])) { }
            else if (condition[j] != '-' && info[i][j] == condition[j]) { }
            else if (condition[j] == '-') { }
            else { allPass = false; break; }
        }
        if (allPass) cnt += 1;
    }

    return cnt
}

let info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"];
let query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"];
console.log(solution(info, query));

// 효울성 0점..

// 개발언어는 cpp, java, python 중 하나입니다.
// 직군은 backend, frontend 중 하나입니다.
// 경력은 junior, senior 중 하나입니다.
// 소울푸드는 chicken, pizza 중 하나입니다.
// 점수는 코딩테스트 점수를 의미하며, 1 이상 100,000 이하인 자연수입니다.

// 언어	직군	경력	소울 푸드	점수
// java	backend	junior	pizza	150
// python	frontend	senior	chicken	210
// python	frontend	senior	chicken	150
// cpp	backend	senior	pizza	260
// java	backend	junior	chicken	80
// python	backend	senior	chicken	50

