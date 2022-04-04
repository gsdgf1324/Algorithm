function solution(numbers, hand) {
    var answer = '';

    let cur_left = 10;
    let cur_right = 11;

    let phone = {
        0: [1, 2, 3],
        1: [4, 5, 6],
        2: [7, 8, 9],
        3: [10, 0, 11],
    }

    numbers.forEach((dr) => {
        if ([1, 4, 7].includes(dr)) {
            answer += 'L';
            cur_left = dr;
        } else if ([3, 6, 9].includes(dr)) {
            answer += 'R';
            cur_right = dr;
        } else {
            let input = closeHand(phone, dr, cur_left, cur_right, hand);
            answer += input;
            if (input == 'R') {
                cur_right = dr;
            } else {
                cur_left = dr;
            }
        }
    })

    return answer;
}

function closeHand(phone, insertNum, cur_left, cur_right, hand) {
    let curLineX = Object.keys(phone).findIndex((dr) => phone[dr].includes(insertNum));
    let curLineY = phone[curLineX].findIndex((dr) => dr == insertNum);

    let lLineX = Object.keys(phone).findIndex((dr) => phone[dr].includes(cur_left));
    let lLineY = phone[lLineX].findIndex((dr) => dr == cur_left);

    let rLineX = Object.keys(phone).findIndex((dr) => phone[dr].includes(cur_right));
    let rLineY = phone[rLineX].findIndex((dr) => dr == cur_right);

    let leftDis = Math.abs(lLineX - curLineX) + Math.abs(lLineY - curLineY);
    let rightDis = Math.abs(rLineX - curLineX) + Math.abs(rLineY - curLineY);

    if (leftDis > rightDis) {
        return 'R'
    } else if (rightDis > leftDis) {
        return 'L'
    } else {
        return hand == 'left' ? 'L' : 'R'
    }
}

let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2] "left" / LRLLRRLLLRR
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] "right" / LLRLLRLLRL
let hand = "right";


console.log(solution(numbers, hand))
