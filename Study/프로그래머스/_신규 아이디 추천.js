let new_id = "z-+.^.";
console.log(solution(new_id));
function solution(new_id) {

// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^0-9a-z\.\_\-]/g, '')

    console.log(new_id)
    
    while (true) {
        let pIdx = new_id.indexOf('..')
        let sliceEnd = pIdx + 1;
        if (pIdx != -1) {

            let pIdx = new_id.indexOf('..')
            for (let i = pIdx; i < new_id.length; i++) {
                if (new_id[i + 2] && new_id[i + 2] == '.') {
                    sliceEnd = i + 2;
                } else {
                    break
                }
            }

            new_id = new_id.slice(0, pIdx) + new_id.slice(sliceEnd, new_id.length);

        } else {
            break;
        }
    }

    new_id = new_id.replace(/^\./g, '')
    new_id = new_id.replace(/\.$/g, '')

    if (new_id == '') new_id = 'a';

    if (new_id.length >= 16) new_id = new_id.slice(0, 15);
    new_id = new_id.replace(/\.$/g, '')

    if (new_id.length <= 2) {
        while (true) {
            if (new_id.length == 3)
                break;
            new_id = new_id + new_id[new_id.length - 1]
        }
    }

    return new_id;
}


// 정규식 : https://curryyou.tistory.com/234