function solution(a, b) {
    const monthOfDay = [31,29,31,30,31,30,31,31,30,31,30,31];

    // 1월1일이 금요일 이므로 7로 나누었을때 나머지 값 즉 인덱스 1이 금요일인 기준으로 요일배열을 정해줌
    let dayName = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];

    let dayCnt = b;
    for (let i = 0; i < a-1; i++) {
        dayCnt += monthOfDay[i];
    }

    return dayName[dayCnt % 7]
}

let a = 5;
let b = 24;
console.log(solution(a, b));

// Date를 써서 풀기 가능 