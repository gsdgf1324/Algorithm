function solution(genres, plays) {
    var answer = [];

    let sumObj = genres.reduce((obj, dr, idx) => {
        let inputObj = {};
        inputObj[`${idx}`] = plays[idx];

        if (obj[`${dr}`]) {
            obj[`${dr}`]['total'] += plays[idx];
            obj[`${dr}`] = { ...obj[`${dr}`], ...inputObj }
        } else {
            inputObj['total'] = plays[idx];
            obj[`${dr}`] = inputObj;
        }

        return obj
    }, {})

    sumObj = Object.entries(sumObj).sort((a, b) => {
        return b[1].total - a[1].total
    })

    sumObj.forEach((dr) => {
        delete dr[1].total
        Object.entries(dr[1]).sort((a, b) => {
            return b[1] - a[1]
        }).forEach((dr, idx) => {
            if (idx < 2)
                answer.push(Number(dr[0]))
        })
    });

    return answer;
}

let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500, 100];
console.log(solution(genres,plays))