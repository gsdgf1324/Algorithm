function solution(s) {
    let answer = '';
    let sList = s.split(' ');
    console.log(sList)
    sList.forEach((dr, idx) => {
        if (dr.length > 0) {
            dr = dr[0].toUpperCase() + [...dr.substr(1)].reduce((pre, cur) => pre += cur.toLowerCase(), '');
            answer += idx == 0 ? `${dr}` : ` ${dr}`
        }else{
            answer += ' '
        }
    })
    return answer;
}

let s = "a a a a a a a a a a ";
console.log(solution(s));

// function solution(s) {
//     return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
// }