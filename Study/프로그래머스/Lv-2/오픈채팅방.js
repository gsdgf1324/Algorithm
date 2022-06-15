function solution(record) {
    let answer = [];
    let changeStr = { Enter: "들어왔습니다.", Leave: "나갔습니다." };
    let idObj = {};

    record.forEach((dr) => {
        let [str, id, name] = dr.split(' ');
        if (name) {
            idObj[id] = name;
        }
        if (str !== "Change") {
            answer.push(`${id}님이 ${changeStr[str]}`);
        }
    });

    answer = answer.map((dr) => {
        let [id, Str] = dr.split('님이');
        return `${idObj[id]}님이${Str}`;
    });

    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));