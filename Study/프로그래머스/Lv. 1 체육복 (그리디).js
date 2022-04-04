function solution(n, lost, reserve) {

    let dellost = lost.filter(x => !reserve.includes(x));
    reserve = reserve.filter(x => !lost.includes(x))

    dellost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    let cnt = dellost.length;
    for (let i = 0; i < dellost.length; i++) {
        let delNum = -1;
        if (reserve.includes(dellost[i] - 1)) {
            delNum = dellost[i] - 1;
        } else if (reserve.includes(dellost[i] + 1)) {
            delNum = dellost[i] + 1;
        }
        if (delNum != -1) {
            cnt -= 1;
            reserve.splice(reserve.indexOf(delNum), 1)
        }
    }

    return n - cnt;
}

let n = 8;
let lost = [1, 2, 4, 6]
let reserve = [1, 2, 4, 6]
console.log(solution(n, lost, reserve));