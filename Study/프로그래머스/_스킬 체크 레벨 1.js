// let number = [2, 1, 3, 4, 1];
// function getCombination(arr, comNum) {
//     let restult = [];
//     if (comNum == 1) return arr.map((dr) => [dr]);
//     arr.forEach((fix, idx, origin) => {
//         let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
//         let combineArr = getCombination(rest, comNum - 1);
//         let mergeArr = combineArr.map((dr) => [fix, ...dr]);
//         restult.push(...mergeArr);
//     });
//     return restult
// }
// function solution(numbers) {
//     var answer = [];
//     let numArr = getCombination(numbers, 2);
//     numArr = numArr.map((dr) => dr[0] + dr[1]);
//     return [...new Set(numArr)].sort((a, b) => a - b);
// }
// console.log(solution(number))


/*
1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권
순위	당첨 내용
1	6개 번호가 모두 일치
2	5개 번호가 일치
3	4개 번호가 일치
4	3개 번호가 일치
5	2개 번호가 일치
*/
// let lottos = [0, 0, 0, 0, 0, 0];
// let win_nums = [31, 10, 45, 1, 6, 19];

// function solution(lottos, win_nums) {
//     var answer = [];
//     let rankArr = [6, 5, 4, 3, 2];

//     let maxC = lottos.filter((dr) => win_nums.includes(dr) || dr == 0).length;
//     let minC = lottos.filter((dr) => win_nums.includes(dr)).length;

//     maxC = rankArr.indexOf(maxC) != -1 ? rankArr.indexOf(maxC) + 1 : 6;
//     minC = rankArr.indexOf(minC) != -1 ? rankArr.indexOf(minC) + 1 : 6;
//     answer.push(maxC, minC)

//     return answer;
// }

// console.log(solution(lottos, win_nums));
