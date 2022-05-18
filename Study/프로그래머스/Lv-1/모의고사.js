function solution(answers) {
    var answer = [];

    let type1 = [1, 2, 3, 4, 5];
    let type2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let type3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let answer1 = 0;
    let answer2 = 0;
    let answer3 = 0;

    answers.forEach((dr, idx) => {
        if (dr == type1[idx >= 5 ? idx - 5 * Math.floor(idx / 5) : idx]) {
            answer1 += 1;
        }
        if (dr == type2[idx >= 8 ? idx - 8 * Math.floor(idx / 8) : idx]) {
            answer2 += 1;
        }
        if (dr == type3[idx >= 10 ? idx - 10 * Math.floor(idx / 10) : idx]) {
            answer3 += 1;
        }
    });

    let maxNum = Math.max(answer1, answer2, answer3);
    if (answer1 >= maxNum) {
        answer.push(1);
    }
    if (answer2 >= maxNum) {
        answer.push(2);
    }
    if (answer3 >= maxNum) {
        answer.push(3);
    }

    return answer;
}

console.log(solution([1, 2, 3, 4]));