function solution(n, arr1, arr2) {
    let answer = [];
    let n1 = ''; //첫번째 배열의 2진수 값을 저장할 변수
    let n2 = ''; //두번째 배열의 2진수 값을 저장할 변수

    for (let i = 0; i < n; i++) {

        let mergeN = ''; //첫,두번째 배열의 2진수의 겹치는 값을 저장할 변수

        //2진수로 변경(padStart를 해주는 이유는 자리수마다 비교해야 하므로 기본 값이라도 넣어줘야 하기 때문)
        n1 = arr1[i].toString(2).padStart(n, '0');
        n2 = arr2[i].toString(2).padStart(n, '0');

        //n1, n2 같은 인덱스에 하나라도 1인 경우 1로 넣어줌
        for (let j = 0; j < n; j++) {
            mergeN += (n1[j] == '1' || n2[j] == '1') ? '1' : '0';
        }

        //nodeJS의 경우 replaceAll 기본 제공함수가 없으므로 정규식을 이용한 값 변경
        //.replace(/문자열에서 바꾸고자하는 값/g,'바꿔줄 값') => g를 붙여주면 해당하는 모든 값을 바꿔줌 
        mergeN = mergeN.replace(/1/g, '#');
        mergeN = mergeN.replace(/0/g, ' ');

        answer.push(mergeN);

    }

    return answer;
}

// 지도의 한 변 크기 n 과 2개의 정수 배열 arr1, arr
let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];
console.log(solution(n, arr1, arr2));