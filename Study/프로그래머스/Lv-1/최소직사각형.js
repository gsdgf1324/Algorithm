function solution(sizes) {
    let answer = 0;

    // x는 idx 0의 값, y는 idx 1의 값

    let x = sizes[0][0]; //현재 x값 (처음 x값으로 초기화)
    let y = sizes[0][1]; //현재 y값 (처음 y값으로 초기화)

    for (let i = 1; i < sizes.length; i++) {

        let cur = sizes[i]; //현재 배열
        let revers = [sizes[i][1], sizes[i][0]] //현재 배열의 x,y => y,x로 바꾼 배열

        //만일 현재 x, y값이 다음 배열의 x, y 값과 비교 시 하나라도 작을 시
        //즉, 현자 x,y 값으로 다음 명함값을 수납하지 못할때.
        if (x < cur[0] || y < cur[1]) {

            let case1 = Math.max(x, cur[0]) * Math.max(y, cur[1]); //현재 배열과 기존 x,y 값의 최대값의 곱
            let case2 = Math.max(x, revers[0]) * Math.max(y, revers[1]); //바꾼 배열과 기존 x,y 값의 최대값의 곱

            //case1, 2 두 값 중 작은 값의 x, y로 바꿔줌
            //(case1, 2 둘다 현재까지 모든 명함을 포함 할 수 있으므로 작은 값으로 넣어줌)
            if (case1 < case2) {
                x = Math.max(x, cur[0]);
                y = Math.max(y, cur[1]);
            } else {
                x = Math.max(x, revers[0]);
                y = Math.max(y, revers[1]);
            }

        }

    }

    answer = x * y;

    return answer;
}

let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
console.log(solution(sizes));

// 다른 사람 정답 보고 문제 한번 더 이해해보기!