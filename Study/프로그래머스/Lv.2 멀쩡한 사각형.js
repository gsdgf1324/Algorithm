function solution(w, h) {
    let lessNum = w > h ? h : w
    let GCF = 1; // 최대공약수 
    for (let i = 1; i <= lessNum; i++) {
        if (w % i == 0 && h % i == 0 && i > GCF) {
            GCF = i
        }
    }

    return w * h - (w + h - GCF);
}

let w = 8;
let h = 12;
console.log(solution(w, h))

// 대각선이 지나는 사각현 갯수를 구하는 공식 : 사각형의 가로 + 사각형의 세로 - (사각형의 가로, 세로 최대공약수)
// W + H - (W, H의 최대 공약수) 