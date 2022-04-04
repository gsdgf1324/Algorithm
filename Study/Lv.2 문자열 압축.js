function solution(s) {

    let reNum = Math.floor(s.length / 2); //중복 문자열을 찾는것이므로 분자열 절반까지 반복하면서 얼마나 반복되는지 확인하는것이 최소 반복 
    let resultList = [];

    for (let i = 1; i <= reNum; i++) {

        let cur = s.substr(0, i); //i단위로 잘랐을때 첫번째 값 
        let cnt = 1; //중복 수
        let sLen = s.length;

        for (let j = i; j <= s.length; j += i) { //자르고 남은 문자열을 반복하며 중복 값 찾음 
            let next = s.substr(j, i); //다음 i단위로 잘랐을때의 값
            if (cur == next) {
                cnt++;
            } else {
                sLen = cnt > 1 ? sLen - (cnt - 1) * i + cnt.toString().length : sLen 
                // 다른경우 2번이상 중복되면 압축된 문자열의 길이를 구함, cnt의 문자열의 길이를 더하는 것은 중복 수가 10,100,1000 등 자리수가 달라질 수 있으므로

                cnt = 1; // 초기화
                cur = next //중복 체크 데이터를 바꿔줌(다른경우 다음 문자열부터는 다른 값으로 비교하기 때문)
            }
        }

        resultList.push(sLen);
    }

    return resultList.length == 0 ? 1 : Math.min(...resultList);
}


let s = "a";
console.log(solution(s));