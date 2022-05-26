/*
10 5
2 4 6 8 10 12 14 16 18 20
6 7 8 9 10
=> 8 10

선택해야 할 카드가 많아져서, 반복문으로 푸는 것은 힘듬.
모든 카드는 중복해서 선택해도 상관이 없다.
카드를 선택함에 중요한 것은 합
=> 카드를 꼭 한 장, 한 장씩 선택할 필요가 있을까?

p+q+r+s = k
X(p,q를 더한 값)+Y(r,s를 더한 값) = k


class CardPair {
    constructor() {
        this.card1;
        this.card2;
        this.sumOfCards; // 두 카드의 합
    }

    // 두 카드의 정보를 알 떄
    CardPair(card1, card2) {
        this.card1 = card1;
        this.card2 = card2;
        this.sumOfCards = this.card1 + this.card2;
    }

    // 두 카드의 정보를 모르고 합만 알 때
    CardPair(sumOfCards) {
        this.card1 = -1;
        this.card2 = -1;
        this.sumOfCards = sumOfCards;
    }

    // 두 카드의 합으로 짝들의 대소 관계를 정의한다.
    compareTo(CardPairs) {
        return this.sumOfCards - CardPairs.sumOfCards;

    }
}

*/

function solution(input) {
    let answer = [];
    let [N, M] = input.shift().split(' ').map((dr) => Number(dr)); // N:카드 수, M:당첨 번호 수
    let cardArr = input.shift().split(' ').map((dr) => Number(dr)).sort((a, b) => a - b); // 카드 번호 리스트
    let winArr = input.shift().split(' ').map((dr) => Number(dr)); // 당첨 번호 리스트

    let pairs = [];

    for (let i of cardArr) {
        for (let j of cardArr) {
            pairs.push(i + j);
        }
    }

    pairs.sort((a, b) => a - b);

    for (let i of winArr) {
        for (let j of pairs) {
            let r_plus_s = i - j;
            if (binary(pairs, 0, pairs.length - 1, r_plus_s) == 1) {
                answer.push(i);
                break;
            }
        }
    }

    return answer.length == 0 ? "NO" : answer.join('\n')
}

function binary(arr, sIdx, eIdx, findValue) {
    if (sIdx <= eIdx) {
        let mid = Math.floor((sIdx + eIdx) / 2);
        if (arr[mid] == findValue) {
            return 1
        } else if (arr[mid] > findValue) {
            return binary(arr, sIdx, mid - 1, findValue);
        } else {
            return binary(arr, mid + 1, eIdx, findValue);
        }
    }

    return 0
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input))