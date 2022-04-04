function solution(clothes) {
    var answer = 1;

    let clothObj = new Object();
    clothes.forEach((dr) => {
        clothObj[`${dr[1]}`] = clothObj[`${dr[1]}`] ? clothObj[`${dr[1]}`].concat([`${dr[0]}`]) : [`${dr[0]}`];
    })

    for(var key in clothObj){
        answer *= (clothObj[key].length+1);
    }

    return answer-1;
}

let clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
console.log(solution(clothes))


// best
// function solution(clothes) {
//     return Object.values(clothes.reduce((obj, t)=> {
//         obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
//         return obj;
//     } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
// }
