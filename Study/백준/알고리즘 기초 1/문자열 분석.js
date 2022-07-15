function solution(input) {

    let engReg_so = /^[a-z]+$/; //영어 정규식 체크 (소문자)
    let engReg_de = /^[A-Z]+$/; //영어 정규식 체크 (대문자)
    let numReg = /^[0-9]+$/; //영어 정규식 체크 (숫자)

    input.forEach((dr) => {

        if (dr != '') {

            let so = 0;
            let de = 0;
            let num = 0;
            let space = 0;

            dr = dr.split('');

            dr.forEach((dt) => {
                if (engReg_so.test(dt)) {
                    so += 1;
                } else if (engReg_de.test(dt)) {
                    de += 1;
                } else if (numReg.test(dt)) {
                    num += 1;
                } else {
                    space += 1;
                }
            });

            console.log(so, de, num, space);

        }

    });

}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
solution(input);

// 문제 자체는 어렵지 않으나, input에 ''값이 들어온 경우, answer에 0 0 0 0이 들어가게서 틀렸다고 채점결과가 나오니 주의하셔야합니다.