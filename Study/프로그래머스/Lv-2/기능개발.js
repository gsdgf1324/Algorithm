function solution(progresses, speeds) {
    var answer = [];

    let mineList = [];
    progresses.map((dr, idx) => {
        return mineList.push(((100 - dr) % speeds[idx]) == 0 ? ((100 - dr) / speeds[idx]) : parseInt((100 - dr) / speeds[idx]) + 1);
        // Math.ceil() 왜 못 썻징?
    });

    let compare = mineList[0];
    let num = 1;
    for (let i = 1; i < mineList.length; i++) {

        if (compare >= mineList[i]) {
            num += 1;
        } else {
            compare = mineList[i]
            answer.push(num)
            num = 1;
        }

        if (i == mineList.length - 1) {
            answer.push(num)
        }

    }

    return answer;
}

let progresses = [93, 30, 55];
let speeds = [1, 30, 5];

console.log(solution(progresses, speeds))