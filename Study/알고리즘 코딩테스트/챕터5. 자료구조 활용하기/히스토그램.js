/*
2 1 4 5 1 3 3
=> 8

히스토그램 양쪽끝에 0 을 넣어서 하면 예외처리 할 필요가 없어 편함
 */

class Histogram {
    constructor(idx, height) {
        this.height = height; // 높이
        this.leftX = idx; // 인덱스 혹은 왼쪽 변의 x 좌표
        this.rightX = idx + 1; // 오른쪽 변의 x 좌표
    }
}

function solution(input) {
    input = input[0].split(' ').map((dr) => Number(dr));
    let answer = 0;
    let n = input.length;
    let curHistogran = [];

    curHistogran.push(new Histogram(-1, 0));

    for (let i = 0; i < n + 1; i++) {
        let h = null;

        if (i < n) {
            h = new Histogram(i, input[i]);
        } else { // i == n, 마지막 원소 즉 가상의 원소는 높이가 0인 히스토그램으로 넣어줌
            h = new Histogram(n, 0);
        }


        // 기존에 있던 히스토그램이 더 이상 우측으로 확장을 하지 못할때, 해당 히스토그램을 기준으로 한 넓이를 구해줌 
        while (curHistogran.length > 0 && curHistogran[curHistogran.length - 1].height >= h.height) {

            let lh = curHistogran.pop(); // 스택의 마지막 원소를 삭제 후 할당
            let bh = curHistogran[curHistogran.length - 1];

            // 오른쪽으로는 h(현재값)의 바로 왼쪽까지 확장 가능하며
            // 왼쪽으로는 스택에 남아있는 마지막 막대기의 바로 오른쪽까지 확장 가능
            let width = (h.leftX - bh.rightX);
            let height = lh.height;
            let area = width * height;
            answer = Math.max(area, answer);
        }

        curHistogran.push(h);

        console.log(curHistogran)
    }


    return answer
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))