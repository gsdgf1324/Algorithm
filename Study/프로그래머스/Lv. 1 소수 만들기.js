function solution(nums) {
    let answer = 0;
    let combineList = getCombination(nums, 3);

    combineList.forEach((dr) => {
        let isDiv = false;
        for (let i = 2; i <= Math.floor(dr / 2); i++) {
            if (dr % i == 0) {
                isDiv = true;
                break;
            }
        }
        if (!isDiv) {
            answer += 1
        }

    });

    return answer
}

function getCombination(arrs, combineNum) {
    let result = [];
    if (combineNum == 1) {
        return arrs.map((dr) => [dr]);
    }
    arrs.forEach((fixed, idx, origin) => {
        let rest = origin.slice(idx + 1);
        let combineList = getCombination(rest, combineNum - 1);
        let attachList = combineList.map((dr) => Number(fixed) + Number(dr));
        result.push(...attachList);
    });
    return result
}

let nums = [1, 2, 3, 4];
console.log(solution(nums));