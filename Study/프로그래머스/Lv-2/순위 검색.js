// function solution(info, query) {
//     var answer = [];

//     query.forEach((dr) => {
//         dr = dr.split(' and ');
//         dr.splice(dr.length - 1, 1, ...dr[dr.length - 1].split(' '));
//         let case1 = ''; // 언어
//         let case2 = ''; // 직군
//         let case3 = ''; // 경력
//         let case4 = ''; // 소울푸드
//         let case5 = Number(dr[dr.length - 1]); // 점수
//         for (let i = 0; i < dr.length - 1; i++) {
//             if (['cpp', 'java', 'python'].includes(dr[i])) {
//                 case1 = dr[i];
//             } else if (['backend', 'frontend'].includes(dr[i])) {
//                 case2 = dr[i];
//             } else if (['junior', 'senior'].includes(dr[i])) {
//                 case3 = dr[i];
//             } else if (['chicken', 'pizza'].includes(dr[i])) {
//                 case4 = dr[i];
//             }
//         }

//         let cnt = 0;
//         for (let i = 0; i < info.length; i++) {
//             let infos = info[i].split(' ');
//             if ((case1 == '' || case1 == infos[0]) && (case2 == '' || case2 == infos[1]) && (case3 == '' || case3 == infos[2]) && (case4 == '' || case4 == infos[3]) && case5 <= Number(infos[4])) {
//                 cnt += 1;
//             }
//         }
//         answer.push(cnt);
//     });

//     return answer;
// }

// function solution(info, query) {
//     let answer = [];

//     query.forEach((q) => {

//         q = q.split(' ').filter((dr) => dr != 'and' && dr != '-');
//         let score = Number(q.pop());

//         /*
//          .every()는 배열의 모든 원소가 조건에 맞는지 검사, 하나라도 만족하지 않으면 false를 반환
//          .match(/\d/g) 정규식으로 숫자인 값들을 배열로 뽑아와 .join()하여 점수를 가져올 수 있음
//          */
//         let cnt = info.filter((dr) =>
//             q.every((qDetail) => dr.includes(qDetail))
//             &&
//             Number(dr.match(/\d/g).join('')) >= score
//         );

//         answer.push(cnt.length);

//     });

//     return answer
// }

// function solution(info, query) {
//     let answer = [];

//     query.forEach((q) => {

//         q = q.split(' ').filter((dr) => dr != 'and' && dr != '-');
//         let score = Number(q.pop());

//         /*
//          .every()는 배열의 모든 원소가 조건에 맞는지 검사, 하나라도 만족하지 않으면 false를 반환
//          .match(/\d/g) 정규식으로 숫자인 값들을 배열로 뽑아와 .join()하여 점수를 가져올 수 있음
//          */

//         let infoFilter = info.filter((dr) => q.every((qDetail) => dr.includes(qDetail))).sort((a, b) => {
//             let aNum = Number(a.match(/\d/g).join(''));
//             let bNum = Number(b.match(/\d/g).join(''));
//             return aNum - bNum;
//         });

//         let sIdx = binarySearch(infoFilter, score);
//         answer.push(infoFilter.length - sIdx);
//     });

//     return answer
// }


function solution(info, query) {
    let answer = [];

    info.forEach((dt) => {
        dt = dt.split(' ');
        dt.unshift('-');
        let score = Number(dt.pop());
        console.log(getCombination(dt, 5));
    })

    return answer
}

function binarySearch(arr, findValue) {
    let sIdx = 0;
    let eIdx = arr.length - 1;
    let mid = Math.floor((sIdx + eIdx) / 2);
    while (sIdx <= eIdx) {
        let midNum = Number(arr[mid].match(/\d/g).join(''));
        if (midNum < findValue) {
            sIdx = mid + 1;
        } else {
            eIdx = mid - 1;
        }

        mid = Math.floor((sIdx + eIdx) / 2);
    }
    return sIdx
}

function getCombination(arr, combineNum) {
    let result = [];

    if (combineNum == 1) {
        return arr.map((dr) => [dr]);
    }

    arr.forEach((fixed, idx, origin) => {
        let rest = origin.slice(idx);
        let combination = getCombination(rest, combineNum - 1);
        let attached = combination.map((dr) => [fixed, ...dr]);
        result.push(...attached);
    });

    return result
}

let info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"];
let query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"];
console.log(solution(info, query));

// .every()는 배열의 모든 원소가 조건에 맞는지 검사하는 메서드입니다.모든 원소가 조건을 만족하면 true, 하나라도 만족하지 않으면 false를 반환합니다.