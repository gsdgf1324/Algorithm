function solution(people, limit) {
    let answer = 0;

    people.sort((a, b) => a - b); //오름차순 정렬

    while (people.length > 0) {

        let min = people[0];
        let max = people.pop();

        answer += 1;

        if (min + max <= limit) {
            people.shift();
        }

    }

    return answer;
}

let people = [70, 50, 80, 50];
let limit = 100;
console.log(solution(people, limit));