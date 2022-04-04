function solution(numbers) {
    var answer = [];
    let numberList = numbers.split('');
    for (let i = 1; i <= numberList.length; i++) {
        let combination = makeCombination(numberList, i);
        combination.forEach((dr) => {
            let row = 0;
            for(let j =0; j<i; j++){
                row += `${dr[j]}`
            }
            row = Number(row)

            if (isPrime(row) && !answer.includes(row)) {
                answer.push(row);
            }
        })
    }

    return answer.length;
}

function isPrime(num) {

    if (num == 0 || num == 1) {
        return false;
    }

    for (let i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            return false
        }
    }

    return true
}

function makeCombination(arr, comNum) {

    let result = [];

    if (comNum == 1) {
        return arr.map((dr) => [dr]);
    }

    arr.forEach((fixed, idx, origin) => {
        let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
        let recursion = makeCombination(rest, comNum - 1);
        let combine = recursion.map((br) => [fixed, ...br]);
        result.push(...combine);
    });

    return result
}

console.log(solution("17"))