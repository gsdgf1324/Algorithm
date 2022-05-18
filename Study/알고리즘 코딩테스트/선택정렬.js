/* 선택정렬
1. 주어진 범위에서 최소 값의 위치를 찾는다.
2. 최소 값을 해당 범위의 가장 앞 숫자와 자리를 바꾼다.
3. 이후, 나머지 범위에 대해 1,2번 과정을 반복하며 정렬한다.

ex)
A = [5,3,4,1,2] 
=> [1,3,4,5,2] 1,5 교체
=> [1,2,4,5,3] 2,3 교체
=> [1,2,3,5,4] 3,4 교체
=> [1,2,3,4,5] 4,5 교체

결론)
I0 = Min(A)
I1 = Min(A-{I0})
I2 = Min(A-{I0,I1})
...
=> 오름차순으로 정렬
=> 시간복잡도 O(N**2)
*/

let data = [5,3,4,1,2];
for(let i=0; i<data.length-1; i++){
    let minIdx = data.indexOf(Math.min(...data.slice(i)));
    //엘리먼트 스왑
    let temp = data[i];
    data[i] = data[minIdx];
    data[minIdx] = temp;
}
console.log(data)

