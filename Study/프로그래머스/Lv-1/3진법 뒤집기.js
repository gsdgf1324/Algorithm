function solution(n) {
    // toString(3) 3진법으로 변환
    // split('') 문자열 배열로 변경
    // reverse() 배열 뒤집기
    // join('') 문자열로 변경
    // parseInt(~,3) ~값을 3진법으로 계산하여 리턴
    return parseInt(n.toString(3).split('').reverse().join(''),3);
}


let n = 45;
console.log(solution(n));