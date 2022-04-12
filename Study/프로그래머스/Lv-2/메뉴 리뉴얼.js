// function solution(orders, course) {
//     var answer = [];

//     orders.forEach((dr) => {
//         dr = dr.split("").sort().join("")
//     });

//     orders.forEach((dr) => {
//         for (let i = 0; i < course.length; i++) {
//             let check = getCombination(dr.split(""), course[i]);

//             check.forEach((ch) => {
//                 let filters = orders.filter((or) => {
//                     let check = true;
//                     for (let i = 0; i < ch.length; i++) {
//                         if (!or.includes(ch[i])) {
//                             check = false;
//                             break;
//                         }
//                     }

//                     return check
//                 });

//                 if (filters.length >= 2) {
//                     console.log(filters);
//                     if (!answer.filter((ans) => ans == ch).length >= 1) {
//                         answer.push(ch)
//                     }
//                 }
//             })
//         }
//     });


//     return answer;
// }

// function getCombination(arr, cbNum) {
//     let result = [];

//     if (cbNum == 1) {
//         return arr.map((dr) => [dr])
//     }

//     arr.forEach((fixed, idx, origin) => {
//         let rest = origin.slice(idx + 1);
//         let combination = getCombination(rest, cbNum - 1);
//         let attached = combination.map((br) => [fixed, ...br].join(''));
//         result.push(...attached);
//     })

//     return result
// }

// let orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
// let course = [2, 3, 4];
// console.log(solution(orders, course))

// S.T.O.P....