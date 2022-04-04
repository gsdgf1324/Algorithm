function solution(m, musicinfos) {

    let answer = '';
    let rTime = 0;

    for (let i = 0; i < musicinfos.length; i++) {
        let info = musicinfos[i].split(',');

        let pTime = (60 * Number(info[1].substr(0, 2)) + Number(info[1].substr(3, 2)))
            - (60 * Number(info[0].substr(0, 2)) + Number(info[0].substr(3, 2)));

        let rWord = ''
        let rLen = info[3].length - 1;
        let cLen = 0;

        for (let j = 0; j < pTime; j++) {
            if (info[3][cLen + 1] == '#') {
                rWord += `${info[3][cLen]}#`
                cLen += 2
            } else {
                rWord += `${info[3][cLen]}`
                cLen += 1
            }

            if (cLen > rLen) cLen = 0;
        }

        while (true) {

            if (rWord.includes(m)) {
                let fIdx = rWord.indexOf(m) + m.length;

                if (m[m.length - 1] != '#' && rWord[fIdx] == '#') {
                    rWord = rWord.slice(fIdx + 1);
                    continue
                }

                if (rTime < pTime) {
                    answer = info[2];
                    rTime = pTime;
                }

                rWord = rWord.slice(fIdx);
            } else {
                break
            }

        }
    }

    return answer ? answer : '(None)';
}

let m = "CCB"
let musicinfos = ["03:00,03:10,FOO,CCB#CCB", "04:00,04:08,BAR,ABC"];
console.log(solution(m, musicinfos));