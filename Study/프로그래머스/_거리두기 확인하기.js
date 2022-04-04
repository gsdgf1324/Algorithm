function solution(places) {
    var answer = [];

    for (let i = 0; i < places.length; i++) {

        let isPush = false;
        let dr = places[i];

        outer: for (let j = 0; j < 5; j++) {
            let case1 = '';
            let case2 = '';
            let case3 = '';
            let case4 = '';
            let case5 = '';
            let case6 = '';

            for (let k = 0; k < 5; k++) {

                case1 = `${dr[j][k]}${dr[j][k + 1] ? dr[j][k + 1] : 'X'}${dr[j][k + 2] ? dr[j][k + 2] : 'X'}`;
                case2 = `${dr[j][k]}${dr[j + 1] ? dr[j + 1][k] : 'X'}${dr[j + 2] ? dr[j + 2][k] : 'X'}`;
                case3 = `${dr[j][k]}${dr[j][k + 1] ? dr[j][k + 1] : 'X'}${dr[j + 1] ? dr[j + 1][k + 1] ? dr[j + 1][k + 1] : 'X' : 'X'}`
                case4 = `${dr[j][k]}${dr[j + 1] ? dr[j + 1][k] : 'X'}${dr[j + 1] ? dr[j + 1][k + 1] ? dr[j + 1][k + 1] : 'X' : 'X'}`
                case5 = `${dr[j][k + 1] ? dr[j][k + 1] : 'X'}${dr[j + 1] ? dr[j + 1][k + 1] ? dr[j + 1][k + 1] : 'X' : 'X'}${dr[j + 1] ? dr[j + 1][k] : 'X'}`;
                case6 = `${dr[j][k + 1] ? dr[j][k + 1] : 'X'}${dr[j][k]}${dr[j + 1] ? dr[j + 1][k] : 'X'}`;

                if (check(case1) || check(case2) || check(case3) || check(case4) || check(case5) || check(case6)) {
                    answer.push(0)
                    isPush = true;
                    break outer;
                }
            }
        }
        if (!isPush) { answer.push(1) }


    }

    return answer;
}

function check(dr) {
    if (dr[0] == 'P') {
        if (dr[1] == "P") { return true }
        else { if (dr[1] == 'O' && dr[2] == 'P') return true }
    } else {
        if (dr[1] == 'P' && dr[2] == 'P') { return true }
    }

    return false
}

let places = [[
    "OOPOO",
    "OPOOO",
    "OOOOO",
    "OOOOO",
    "OOOOO"]]

console.log(solution(places))

// 00 01 02
// 10 11
// 21