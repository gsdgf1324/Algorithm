function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = Array.from({ length: bridge_length }, (dr) => 0);
    let curW = 0;
    let curL = 0;

    while (truck_weights.length != 0) {
        answer++;
        

        let shifts = bridge.shift();
        if (shifts > 0) {
            curW -= shifts;
            curL -= 1;
        }

        if (curL < bridge_length && curW + truck_weights[0] <= weight) {
            let input = truck_weights.shift();
            curW += input;
            curL += 1;
            bridge.push(input);
        } else {
            bridge.push(0);
        }
    }

    answer += bridge_length;

    return answer;
}

let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6];
console.log(solution(bridge_length, weight, truck_weights));

// 다리에 올라갈 수 있는 트럭 수 bridge_length
// 다리가 견딜 수 있는 무게 weight
// 트럭 별 무게 truck_weights