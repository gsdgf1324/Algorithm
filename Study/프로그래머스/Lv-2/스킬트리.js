function solution(skill, skill_trees) {
    let answer = 0;

    skill_trees.forEach((dr) => {

        let checkArr = []; // 스킬트리가 정상인지 체크하기 위한 배열
        let isBreak = false; // 반복문이 중간에 break 했는지 여부, true일 경우 정상적이지 않은 스킬트리

        for (let i = 0; i < dr.length; i++) {
            let containIdx = skill.indexOf(dr[i]); // 스킬에서 현재 배우고자하는 스킬트리의 idx

            // 현재 배우고자하는 스킬이 있을 때만 유효성 여부를 검사
            if (containIdx != -1) {
                /*
                정상인 경우 : 배울 스킬 idx가 0보다 큰 경우 현재 checkArr의 마지막 값에는 무조건 이전 배운 스킬트리의 idx가 저장되어 있어야함. (단 checkArr가 비어있고, 배울 스킬 idx가 0인 경우는 정상)

                따라서 비정상인 경우는

                    - 기본 Default
                    배울 스킬 idx가 0보다 큰 경우 (0인 경우는 비교할 값이 없으므로 정상임)
                    - 조건 1 or 조건 2
                    1. checkArr의 마지막 값이 배울 스킬 idx-1 이 아니거나 (높은 idx의 스킬을 배우기 위해서는 무조건 바로 전 단계 스킬을 배워야하기 떄문에)
                    2.checkArr의 길이가 0인 경우이다. (조건1과 똑같은 이유)

                */
                if (containIdx > 0 && (checkArr[checkArr.length - 1] != containIdx - 1 || checkArr.length == 0)) {
                    isBreak = true;
                    break;
                } else {
                    checkArr.push(containIdx);
                }
            }
        }

        if (!isBreak) answer++; //break하지않았다면 정상인 경우

    });

    return answer;
}

let skill = "CBD";
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
console.log(solution(skill, skill_trees));