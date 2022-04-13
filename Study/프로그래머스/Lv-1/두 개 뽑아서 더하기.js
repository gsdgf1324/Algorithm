function solution(numbers) {
    var answer = [];

    // 1번 방법
    getCombination(numbers, 2).forEach((dr) => {
        let sums = dr[0] + dr[1];
        if (!answer.includes(sums)) {
            answer.push(sums)
        }
    });
    answer.sort((a, b) => a - b);

    // 2번 방법
    answer = [...new Set(getCombination(numbers, 2).map((dr) => dr[0] + dr[1]))].sort((a, b) => a - b);

    return answer;
}

function getCombination(arr, comNum) {
    let result = [];

    if (comNum == 1) {
        return arr.map((dr) => [dr]);
    }

    arr.forEach((fixed, idx, origin) => {
        let rest = origin.slice(idx + 1);
        let combinations = getCombination(rest, comNum - 1);
        let mergeDt = combinations.map((dr) => [fixed, ...dr]);
        result.push(...mergeDt);
    });

    return result
}

let numbers = [2, 1, 3, 4, 1];
console.log(solution(numbers));
