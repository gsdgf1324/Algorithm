function solution(arr1, arr2) {
    var answer = [];

    for (let i = 0; i < arr1.length; i++) {
        let sum = 0;
        let newList = [];

        for (let j = 0; j < arr2[0].length; j++) {
            for (let k = 0; k < arr1[i].length; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            newList.push(sum);
            sum = 0;
        }

        answer.push(newList)
        newList = []
    }

    return answer;
}

let arr1 = [
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4]
]

let arr2 = [
    [5, 4],
    [2, 4],
    [3, 1]
]

console.log(solution(arr1, arr2))