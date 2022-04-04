// function solution(s) {
//     var answer = 0;

//     while (true) {

//         let isDel = false;
//         for (let i = 0; i < s.length - 1; i++) {
//             if (s[i] == s[i + 1]) {
//                 s = s.substring(0, i) + s.substring(2 + i, s.length);
//                 isDel = true;
//                 break;
//             }
//         }

//         if (!isDel) break;

//     }

//     return s.length == 0 ? 1 : 0;
// }


// 다른 사람 풀이 참고해서 풀었다 ㅠㅠ
function solution(s) {

    if (s % 2 == 1) return 0 //문자열이 홀수 인 경우 절대로 문자열 모두 제거 못함
    let pList = []; //문자열 중복을 체크하여 중복제거 못한 값들을 넣어주는 배열

    for (let i = 0; i < s.length; i++) {
        if (s[i] == pList[pList.length - 1]) {
            //만약 현재 문자열 값과 pList의 마지막값을 비교(연속된 두 값 비교)하여 같을경우 pList의 마지막값을 제거 후 다시 반복
            pList.pop();
            continue;
        }

        pList.push(s[i]);
    }

    return pList.length > 0 ? 0 : 1

}

let s = 'baabaa';
console.log(solution(s));