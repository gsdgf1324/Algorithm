let s = "2three45sixseven";
console.log(solution(s));
function solution(s) {
    var answer = '';
    let numStr = '';
    let numObj = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 }
    let numObjKeys = Object.keys(numObj);

    for (let i = 0; i < s.length; i++) {

        if (Number(s[i]) || s[i] == '0') {
            answer += s[i];
        } else {
            numStr += s[i];
            if (numObjKeys.includes(numStr)) {
                answer += `${numObj[numStr]}`
                numStr = ''
            }
        }
    }

    return Number(answer);
}