function solution(clothes) {
    var answer = 1;

    let clothObj = new Map();

    clothes.forEach((dr) => {
        clothObj.set(`${dr[1]}`, clothObj.get(`${dr[1]}`) ? [...clothObj.get(`${dr[1]}`), ...[`${dr[0]}`]] : [`${dr[0]}`])
    });
    // 의상의 종류를 키로 의상의 이름을 배열 값으로 해시테이블을 만든다. 

    for (let entry of clothObj) {
        answer *= (entry[1].length + 1);
    }
    // 해시테이블의 Entry(각 데이터)를 돌며 배열 값의 길이 + 1을 곱해준다. 
    // 1을 더해서 곱하는이유는 자기자신도 즉, 하나만 입는 경우의 수도 존재하기 때문이다.

    answer-=1;
    // 결과값에 1을 빼줘야함(아무것도 선택안한경우는 제외해야하므로)

    return answer
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
