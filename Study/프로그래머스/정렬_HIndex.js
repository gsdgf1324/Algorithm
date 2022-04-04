function solution(citations) {
    var answer = 0;
    citations.sort((a, b) => { return b - a })

    for (let i = 0; i < citations.length; i++) {
        let curValue = i;
        let highNum = 0;
        let lowNum = 0;

        citations.forEach((dr) => {
            if (curValue >= dr) {
                highNum += 1;
            }
            if (curValue <= dr) {
                lowNum += 1;
            }
        });

        if (highNum >= curValue && lowNum <= curValue && curValue > answer) {
            answer = curValue;
        }

    }

    return answer;
}


let citations = [3, 0, 6, 1, 5];
console.log(solution(citations));