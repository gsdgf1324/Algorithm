function solution(dartResult) {
    let nList = [];
    let cNum = '';
    let answer = 0;

    for (let i = 0; i < dartResult.length; i++) {

        // S,D,T 가 나온 경우 제곱 값을 계산, nList에 계산한 값을 넣어준다.
        // nList는 최대길이가 2이므로 넘어가면 맨 앞 데이터 제거한다.
        // cNum 숫자체크 초기화.
        if (['S', 'D', 'T'].includes(dartResult[i])) {

            cNum = Number(cNum);

            if (dartResult[i] == 'S') {
                // 
            } else if (dartResult[i] == 'D') {
                cNum = cNum ** 2;
            } else if (dartResult[i] == 'T') {
                cNum = cNum ** 3;
            }
            answer += cNum;

            nList.push(cNum);
            if (nList.length > 2) nList.shift();

            cNum = '';

        } 
        // * 가 나온 경우 nList의 값만큼 더해준다. (*은 곱하기 2 임에도 더해주는 이유는 위 조건에서 한번 더해주기 때문)
        // nList의 값을 *2 한 수로 최산화 해준다. (*가 연속 2번 이상 나오는 경우가 있기 때문)
        else if (dartResult[i] == '*') {
            answer += nList.reduce((acc, cur) => acc += cur, 0);
            nList = nList.map((dr)=> dr*2);
        } 
        // #이 나온 경우는 배열의 마지막 값을 *2 하여 빼준다. (#은 -임에도 -*2를 하는 이유는 첫번째 조건에서 값을 더해주기 때문)
        else if (dartResult[i] == '#') {
            answer -= nList[nList.length - 1] * 2
            nList[nList.length - 1] = -1 * nList[nList.length - 1];
        } 
        // 숫자일 시 계속 문자열을 더해준다. (10인 경우가 있기 때문에)
        else {
            cNum += dartResult[i];
        }

    }

    return answer
}

let dartResult = "1S*2T*3S";
console.log(solution(dartResult));