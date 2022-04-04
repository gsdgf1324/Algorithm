// function checkCount(count) {
//     switch (count) {
//         case 6: return 1
//         case 5: return 2
//         case 4: return 3
//         case 3: return 4
//         case 2: return 5
//         default: return 6
//     }
// }
// function solution(lottos, win_nums) {
//     var answer = [];
//     let count = 0;
//     let zeroCount = 0;

//     lottos.sort((a, b) => b - a)

//     for (let i = 0; i < lottos.length; i++) {
//         if (lottos[i] == 0) {
//             zeroCount += 1;
//         }
//         else if (win_nums.includes(lottos[i])) {
//             count += 1;
//         }
//     }

//     answer = [checkCount(count + zeroCount), checkCount(count)]

//     return answer;
// }

function solution(lottos, win_nums) {

    // 순위  당첨    내용
    // 1    6개    번호가 모두 일치
    // 2    5개    번호가 일치
    // 3    4개    번호가 일치
    // 4    3개    번호가 일치
    // 5    2개    번호가 일치
    // 6    (낙첨)	 그 외

    let answer = [];
    let rank = [6, 6, 5, 4, 3, 2, 1]; //맞춘 개수별 순위

    let count = lottos.filter((dr) => win_nums.includes(dr)).length; //맞은 로또 개수의 수
    let zeroCnt = lottos.filter((dr) => dr == 0).length; //틀린 로또 개수의 수수

    answer = [rank[count + zeroCnt], rank[count]];

    return answer
}
let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];
console.log(solution(lottos, win_nums));