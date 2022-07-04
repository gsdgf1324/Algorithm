const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function (line) {
    let box = Array.from({ length: Number(line) }, (dr, idx) => idx + 1);
    console.log(box);
    // console.log(line);
    rl.close();
}).on("close", function () {
    process.exit();
});

/*
num : 현재 시작 기둥에 놓인 원반의 수
from : num개의 원반들이 있는 기둥
buffer : 비어있는 기둥
to : 모든 원반을 옮길 기둥
*/
function getMinMove(num, from, buffer, to) {

}