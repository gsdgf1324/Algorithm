/*
[원과 겹치는 필셀 수 세기]
최대 10만의 경우의 수까지 나오는 경우 O(n**2)의 경우는 시간초과 난다! 또 10만 곱하기 10만의 경우 숫자형 넘어가므로 타입 잘 봐야한다.
픽셀 수를 세는대 좌표축의 위치는 중요하지 않음
 => 따라서 좌표축을 원의 중심으로 옮겨서 가정하는게 좋음
 => 원점에 두면 원은 4분면이 모두 대칭하므로 한 사분면에 대한 픽셀수를 계산하면 *4 하면 된다.
 => 따라서 한 사분면의 픽셀 수만 구하면 됨
픽셀(사각형)을 구분할 수 있는 기준을 구해야한다.

어떤 점 P와 원점 O와의 거리가 원의 반지름인 R과 비교했을때 P<R 은 경우 해당 픽셀은 원의 안에 있다.
math.sqrt( (x-0)**2 + (y-0)**2 ) < R 인 경우가 원과 겹치는 픽셀이다.
== x**2 + y**2 < R**2

tip)
x좌표가 같은 격자끼라 묶으면 직사각형이 나오고 높이만 알면 직사각형의 크기(1*높이)를 구할 수 있다.
위에서 내려오다가 최초로 원에 포함되는 픽셀을 만났을때 그 픽셀의 왼 아래 점의 1높은값이 높이임.
==> 이렇게해도 시간복잡도는 비슷함

원 특성상 각 직사각형의 높이는 내림차순 배열이다. 따라서 이전 기둥의 높이부터 검사하자!!
 */

function isInside(x, y, R) {
    let sqd = x * x + y * y;
    return sqd < R * R
}

function answer_timeOver() {

    let x = 500;
    let y = 500;
    let R = 200;

    let cnt = 0;
    for (let x = 0; x <= R; x += 1) {
        for (let y = 0; y <= R; y += 1) {
            // <x,y> := (0,0) ~ (R,R)까지의 모든 좌표가 차례로 순회
            if (isInside(x, y, R)) {
                // <x,y>가 왼쪽 아래 점인 픽셀들 중 원 내부에 있는 모든 픽셀
                cnt += 1;
            }
        }
    }
    //시간복잡도 O(R**2) => 시간초과 남


    return cnt
}

function answer() {

    let sum = 0;
    let y = R;


    for (let x = 0; x <= R; x += 1) {
        for (; y >= 0; y -= 1) { //이전의 기둥의 높이부터 검사 
            if (isInside(x, y, R)) {
                // y:= x좌표에서 위에서부터 내려오다가 최초로 원에 포함되는 픽셀의 y자표
                let h = y + 1;
                sum += h;
                break;
            }
        }
    }
    //시간복잡도 O(R**2) => 시간초과 남


    return cnt
} 