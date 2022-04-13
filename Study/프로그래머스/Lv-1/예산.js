function solution(d, budget) {
    let answer = 0;
    let dSum = 0;

    d.sort((a, b) => a - b).some((dr) => {
        dSum += dr;
        if (dSum <= budget) {
            answer+=1;
        }else{
            return true
        }
    });

    return answer;
}

let d = [2,2,3,3];
let budget = 10;
console.log(solution(d, budget));