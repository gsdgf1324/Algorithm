// 조합
function getCombinations(arr, combineNum) {
    let result = [];

    if (combineNum == 1) {
        return arr.map((dr) => [dr]);
    }

    arr.forEach((fixed, idx, origin) => {
        let rest = origin.slice(idx);
        let combination = getCombinations(rest, combineNum - 1);
        let attached = combination.map((br) => [fixed, ...br]);
        result.push(...attached);
    });

    return result
}

const example = ['A', 'B', 'C'];
console.log(getCombinations(example, 3));

// 수열
// function getCombinations2(arr, combineNum) {
//     let result = [];

//     if (combineNum == 1) {
//         return arr.map((dr) => [dr]);
//     }

//     arr.forEach((fixed, idx, origin) => {
//         let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
//         let combination = getCombinations2(rest,combineNum-1);
//         let attached = combination.map((br)=>[fixed,...br]);
//         result.push(...attached);
//     });

//     return result
// }

// const example2 = [1, 2, 3, 4];
// console.log(getCombinations2(example2, 3));