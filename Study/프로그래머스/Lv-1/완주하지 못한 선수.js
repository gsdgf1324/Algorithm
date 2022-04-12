function solution(participant, completion) {
    const mapData = new Map();
    let answer = '';
    for (let i = 0; i < participant.length; i++) {
        let a = participant[i],
            b = completion[i];

        mapData.set(a, (mapData.get(a) || 0) + 1);
        mapData.set(b, (mapData.get(b) || 0) - 1);
    }

    for(let entry of mapData){
        if(entry[1]>=1){
            answer = entry[0]
            break
        }
    }

    return answer
}

let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];
console.log(solution(participant, completion))