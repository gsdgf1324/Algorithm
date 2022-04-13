function solution(id_list, report, k) {
    let answer = [];

    let idObj = new Object(); //id별 신고자를 담을 객체
    let reportObj = new Object(); //신고당한 유저별 몇번 신고 당했는지 담을 객체

    report.forEach((dr) => {
        dr = dr.split(' ');
        let id = dr[0]; //id
        let reporter = dr[1]; //신고당한 유저

        //해당 id에 중복으로 신고당하지 않았을 경우
        if (!(idObj[id] && idObj[id].includes(reporter))) {
            //이미 객체에 id를 키값으로 가지고 있으면 배열값에 추가, 없으면 reporter값으로 배열 초기값
            idObj[id] ? idObj[id] = [...idObj[id], reporter] : idObj[id] = [reporter];

            //이미 객체에 신고당한 유저를 키값으로 가지고 있으면 기존 카운트에 +1, 없으면 1로 초기화
            reportObj[reporter] ? reportObj[reporter] = reportObj[reporter] + 1 : reportObj[reporter] = 1
        }

    })

    //결과값이 id_list에 담긴 id 순서별로 출력해야하므로 순차적으로 반복문을 돌림
    for (let i = 0; i < id_list.length; i++) {

        //해당 id로 신고한 적이 있는 경우 몇번의 메일을 받는지 체크
        if (idObj[id_list[i]]) {
            let reportArr = idObj[id_list[i]]; //id로 신고한 유저 리스트
            let cnt = 0; //받을 메일 수
            for (let j = 0; j < reportArr.length; j++) { //신고한 유저 리스트를 반복하며
                if (reportObj[reportArr[j]] >= k) { //해당 유저가 k번 이상 신고당했으면
                    cnt += 1; //카운트 + 1
                }
            }
            answer.push(cnt);
        }
        //해당 id로 신고한 적이 없는 경우 0 넣으줌
        else {
            answer.push(0);
        }
    }

    return answer;
}

let id_list = ["con", "ryan"];
let report = ["ryan con", "ryan con", "ryan con", "ryan con"];
let k = 3;
console.log(solution(id_list, report, k));


// id_list의 원소는 이용자의 id를 나타내는 문자열
// report의 원소는 "이용자id 신고한id"형태의 문자열
// return 하는 배열은 id_list에 담긴 id 순서대로 각 유저가 받은 결과 메일 수

// 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
// 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
// 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
// k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.s