function solution(numbers) {
    var answer = 0;
    let numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let filterData = numList.filter((dr) => !numbers.includes(dr))
    filterData.map((dr) => answer += dr)
    return answer;
}

let numbers = [1, 2, 3, 4, 6, 7, 8, 0];
console.log(solution(numbers))

// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값)
// return 45 - numbers.reduce((cur, acc) => cur + acc, 0);