function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    let bridge = Array.from({ length: bridge_length }, (dr) => 0); 
    //현재 다리 배열, 이 배열의 길이는 항상 bridge_length를 유지해야함

    let curW = 0; //현재 다리의 트럭 무게의 합
    let curL = 0; //현재 다리의 트럭 수

    while (truck_weights.length != 0) { //올라갈 트럭이 없을때까지 반복
        answer++; //1시간 지날때마다
        
        let shifts = bridge.shift(); //bridge의 맨 앞 데이터를 빼주고
        if (shifts > 0) { //해당 데이터가 0보다 크면, 즉 트럭이 다리를 통과했으면
            curW -= shifts; //무게의 합 재계산
            curL -= 1; //트럭 수 재계산
        }

        // 현재 다리의 트럭수가 다리에 올라갈 수 있는 트럭 수보다 적고 && 현재 다리의 트럭 무게가 다리가 견딜 수 있는 무게보다 작을 때
        if (curL < bridge_length && curW + truck_weights[0] < weight) {
            let input = truck_weights.shift(); //트럭 배열의 첫번째 값, 즉 다리에 올라갈 트럭
            curW += input; //무게 합 재계산
            curL += 1; //트럭 수 재계산
            bridge.push(input); //다리에 트럭을 넣어줌
        } else {
            bridge.push(0); //트럭이 올라가지 못하는 경우 0을 넣어줌
        }

    }

    answer += bridge_length; 
    //위 반복문을 지나면 마지막 트럭이 다리에 올라갈때 끝남, 따라서 트럭이 다리를 나올때까지 걸리는 시간을 더해주어야함.

    return answer;
}

let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6];
console.log(solution(bridge_length, weight, truck_weights));

// 다리에 올라갈 수 있는 트럭 수 bridge_length
// 다리가 견딜 수 있는 무게 weight
// 트럭 별 무게 truck_weights