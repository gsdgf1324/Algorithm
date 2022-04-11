function solution(input) {

    let result = [];
    let cnt = input.splice(0, 1)[0]; //반복할 총 수

    for (let i = 0; i < cnt; i++) {
        let answer = "YES";
        let n = input.splice(0, 1)[0] //전화번호 수 
        
        // 아래와 같이 숫자형으로 정렬하면 전화번호 리스트에서 한 값을 다른 데이터와 모두 비교하여야함
        // let nList = input.splice(0, n).sort((a, b) => Number(a) - Number(b));

        // 전화번호 배열, 문자열로 정렬필요 

        console.log(input.splice(0, n).sort());

        let nList = input.splice(0, n).sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            if (a === b) return 0;
            else return -1;
        });

        console.log(nList);

        for (let j = 0; j < nList.length - 1; j++) {

            // 전화번호 배열을 숫자형으로 정렬 했을 때 아래와 같이 모든 데이터와 비교가 필요하다 => 불필요 비교가 늘어남
            // let filterd = nList.slice(j + 1, nList.length).filter((dr) => dr.startsWith(nList[j])).length;
            // if (filterd > 0) {
            //     answer = 'NO';
            //     break;
            // }
            
            // startsWith/endsWith (특정 문자로 시작하거나 끝나는지 체크)
            if (nList[j + 1].startsWith(nList[j])) {
                answer = 'NO';
                break;
            }
        }

        result.push(answer);
    }

    return result
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input).join('\n'));

// 문자열 정렬은 아래 링크 참고
// https://velog.io/@1106laura/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AC%B8%EC%9E%90%EC%97%B4-%EC%88%AB%EC%9E%90-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0