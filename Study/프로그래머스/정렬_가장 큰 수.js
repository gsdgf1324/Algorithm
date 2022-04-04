function solution(numbers) {
    var answer = '';
    let checkSum = 0;

    numbers.sort((a, b) => { return Number(`${b}${a}`) - Number(`${a}${b}`) })
    numbers.forEach((dr) => {
        answer += `${dr}`
        checkSum += dr;
    })

    if (checkSum == 0)
        answer = '0'

    return answer;
}

let numbers = [3, 30, 34, 5, 9];
console.log(solution(numbers))

// console.log(solution(numbers));