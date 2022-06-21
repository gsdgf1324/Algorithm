function solution(n, t, m, p) {
    var answer = '';

    var tubeT = Array.apply(null, Array(t)).map((a, i) => i * m + p - 1);

    console.log(tubeT)
    // p = p == m ? 0 : p;
    // let cnt = 0;
    // let total = '';
    // let num = 0;

    // while (total.length < m * t) {
    //     total += num.toString(n);
    //     num++;
    // }

    // for (let i = 0; i < total.length; i++) {

    //     if (cnt == t) break;

    //     if ((i + 1) % m == p) {
    //         answer += total[i].toUpperCase();
    //         cnt++;
    //     }

    // }

    return answer;
}

// let [n, t, m, p] = [16, 16, 2, 1];
// let [n, t, m, p] = [2, 4, 2, 1];
let [n, t, m, p] = [16, 16, 2, 1];
console.log(solution(n, t, m, p));

// 진법 n
// 미리 구할 숫자의 갯수 t
// 게임에 참가하는 인원 m
// 튜브의 순서 p