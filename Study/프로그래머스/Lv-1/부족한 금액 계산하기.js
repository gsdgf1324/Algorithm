function solution(price, money, count) {
    var answer = 0;

    //1~count까지 배열을 만든다.
    let cArr = Array.from({ length: count }, (dr, idx) => idx + 1);
    //필요금액 * 모든 count의 합을 곱해준다 == count까지 타는데 필요한 필요금액 
    let requestM = price * cArr.reduce((acc, cur) => acc += cur, 0);
    
    // * 가우스 공식
    // requestM = price * count * (count + 1) / 2;

    //필요금액이 현재 가진 금액보다 크면 뺀 값을, 작으면 0 값을 리턴한다.
    answer = requestM - money > 0 ? requestM - money : 0;

    return answer
}

let price = 3;
let money = 20;
let count = 4;
console.log(solution(price, money, count));