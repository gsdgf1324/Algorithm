function solution(id_list, report, k) {
    var answer = [];
    let reportNames = []
    let reportNamesObj = new Object();
    let checkObj = new Object();

    report = report.map((dr) => {
        dr = dr.split(' ');

        let keyList = Object.keys(checkObj);

        if (keyList.includes(dr[0])) {
            let valueList = checkObj[`${dr[0]}`];
            if (!valueList.includes(dr[1])) {
                checkObj[`${dr[0]}`] = valueList.concat(dr[1]);
                reportNamesObj[`${dr[1]}`] = reportNamesObj[`${dr[1]}`] ? reportNamesObj[`${dr[1]}`] + 1 : 1;
            }
        } else {
            checkObj[`${dr[0]}`] = [dr[1]];
            reportNamesObj[`${dr[1]}`] = reportNamesObj[`${dr[1]}`] ? reportNamesObj[`${dr[1]}`] + 1 : 1;
        }

        if (reportNamesObj[`${dr[1]}`] >= k && !reportNames.includes(`${dr[1]}`)) {
            reportNames.push(`${dr[1]}`)
        }

        return dr
    })
    
    id_list.forEach((dr) => {
        let count = 0;
        if (checkObj[`${dr}`]) {
            count = reportNames.filter((name)=>checkObj[`${dr}`].includes(name)).length;
        }
        answer.push(count)
    })

    return answer;
}

let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];

let k = 2;
console.log(solution(id_list, report, k))

// 다시 풀어보기