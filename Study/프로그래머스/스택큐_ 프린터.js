function solution(priorities, location) {
    var answer = 0;

    while (true) {
        let popItem = priorities.shift();
        let isHigh = priorities.findIndex(value => value > popItem);
        if (isHigh != -1) {
            priorities.push(popItem);
            if (location == 0) {
                location = priorities.length - 1;
            } else {
                location -= 1;
            }
        } else {
            answer+=1;
            if (location == 0) {
                break
            } else {
                location -= 1;
            }
        }

    }

    return answer;
}

let priorities = [2, 1, 3, 2]	
let location = 2;
console.log(solution(priorities,location))