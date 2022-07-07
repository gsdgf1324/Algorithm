function solution(input) {
    input = Number(input[0]);

    let answer = "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.\n";
    let firstText = "_";

    for (let i = 0; i <= input; i++) {

        let cnt = getFibo(i);

        if (i != input) {
            answer += `${firstText.repeat(cnt)}"재귀함수가 뭔가요?"\n${firstText.repeat(cnt)}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n${firstText.repeat(cnt)}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n${firstText.repeat(cnt)}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."\n`
        } else {
            answer += `${firstText.repeat(cnt)}"재귀함수가 뭔가요?"\n${firstText.repeat(cnt)}"재귀함수는 자기 자신을 호출하는 함수라네"\n`
        }

    }

    for (let i = input; i >= 0; i--) {

        let cnt = getFibo(i);

        answer += `${firstText.repeat(cnt)}라고 답변하였지.\n`
    }

    return answer;

}

function getFibo(cnt) {

    if (cnt == 0) return 0;
    if (cnt == 1) return 4;

    return getFibo(cnt - 1) + 4
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));