function solution(n, times) {
    times = times.sort((a, b) => a - b);

    let answer = n * times[times.length - 1];
    let sTime = 0;
    let eTime = n * times[times.length - 1]; //최대로 걸리는 시간
    let mid = Math.floor((sTime + eTime) / 2);

    while (eTime - sTime >= 0) {
        let count = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

        if (count >= n) {
            answer = Math.min(answer, mid);
        }

        if (count > n) {
            eTime = mid - 1;
        } else {
            sTime = mid + 1;
        }

        mid = Math.floor((sTime + eTime) / 2);
    }

    return answer;
}

let n = 6;
let times = [7, 10];
console.log(solution(n, times))