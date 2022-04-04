function solution(fees, records) {
    var answer = [];

    let dTime = fees[0];
    let dPay = fees[1];
    let pTime = fees[2];
    let pPay = fees[3];

    let tMap = new Map();
    let inMap = new Map();

    records.forEach((dr, idx) => {
        let splits = dr.split(' ');
        let time = 60 * Number(splits[0].split(':')[0]) + Number(splits[0].split(':')[1]); //시간(분)
        let code = splits[1]; //차량 번호
        let flag = splits[2]; //in,out

        if (flag == 'IN') {
            inMap.set(code, time);
        } else {
            let curTime = tMap.get(code) ? tMap.get(code) : 0;
            let addTime = time - inMap.get(code);

            inMap.delete(code);
            tMap.set(code, curTime + addTime)
        }

        if (idx == records.length - 1 && inMap.size > 0) {
            inMap.forEach((value, key) => {
                let curTime = tMap.get(key) ? tMap.get(key) : 0;
                let addTime = 60 * 24 - 1 - inMap.get(key);
                tMap.set(key, curTime + addTime);
            })
        }
    })

    tMap = new Map([...tMap.entries()].sort((a, b) => a[0] - b[0]))

    tMap.forEach((dr) => {
        let pay = 0;
        if (dr > dTime) {
            pay = dPay + Math.ceil((dr - dTime) / pTime) * pPay
        } else {
            pay = dPay;
        }
        answer.push(pay)
    });

    return answer;
}

let fees = [1, 461, 1, 10];
// 기본 시간(분)	기본 요금(원)	단위 시간(분)	단위 요금(원)

let records = ["00:00 1234 IN"]
console.log(solution(fees, records));
