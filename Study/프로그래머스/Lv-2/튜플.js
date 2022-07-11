function solution(s) {
    let answer = [];
    s = s.slice(1, s.length - 1).split(',{').map((dr) => {
        dr = dr.replace('{', '');
        dr = dr.replace('}', '');
        return dr
    }).sort((a, b) => {
        if (a.length < b.length) {
            return -1
        } else {
            return 1;
        }
    });

    s.forEach((dr) => {

        dr = dr.split(',');

        if (answer.length == 0) {
            answer.push(dr[0]);
        } else {
            let newData = dr.filter((dt) => !answer.includes(dt));
            answer.push(newData[0]);
        }
    });

    return answer.map((dr) => Number(dr));
}

let s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
console.log(solution(s));


let Data = '{"name":"user_tistory","age":"25","detail":{"phoneNum":"01011112222","address":"서울시"}}';

let convertData = JSON.parse(Data);
console.log(typeof convertData); // object
console.log(convertData);
/*
    {
    name: 'user_tistory',
    age: '25',
    detail: { phoneNum: '01011112222', address: '서울시' }
    }
*/