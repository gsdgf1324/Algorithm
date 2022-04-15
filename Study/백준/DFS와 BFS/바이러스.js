function solution(input) {
    let totalCnt = Number(input.slice(1, 2)[0]);
    input = input.slice(2);

    let innerObj = new Object();

    input.forEach((dr) => {
        dr = dr.split(' ');
        let v1 = dr[0];
        let v2 = dr[1];
        if (innerObj[`${v1}`]) {
            innerObj[`${v1}`] = [...innerObj[`${v1}`], v2];
        } else {
            innerObj[`${v1}`] = [v2];
        }
        if (innerObj[`${v2}`]) {
            innerObj[`${v2}`] = [...innerObj[`${v2}`], v1];
        } else {
            innerObj[`${v2}`] = [v1];
        }
    });
    Object.keys(innerObj).forEach((dr) => {
        innerObj[`${dr}`] = innerObj[`${dr}`].sort((a, b) => ㅁa - b);
    })


    console.log(bfs(innerObj, 1))
    // console.log(totalCnt - bfs(innerObj, 1))
}

// 너비 우선 탐색
function bfs(innerObj, curNode) {

    let cnt = -1;
    let visitedArr = [];
    let needArr = [`${curNode}`];

    while (needArr.length != 0) {
        let node = needArr.shift();
        if (!visitedArr.includes(node)) {
            visitedArr.push(node);
            needArr = innerObj[`${node}`] ? [...needArr, ...innerObj[`${node}`]] : [...needArr];
            cnt += 1;
        }
    }

    return cnt
}

'/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
solution(input);