/*버블정렬
1. 앞에서부터 차례로 인접한 두 숫자를 비교하며 조건에 따라 두 값을 스왑하는 과정을 반복0
스왑이 1회 이상 일어남 => 오름차순 X
스왑이 일어나지 않음 => 오름차순 O
2. 시간복잡도 O(n**2)
*/

let data = [5, 4, 6, 1, 7, 2];

// 반복할수록 끝자리에 큰 값이 위치함
// [4,5,1,6,2,7] 
// [4,1,5,2,6,7]
// [1,4,2,5,6,7]
// [1,2,4,5,6,7]


for (let i = 0; i < data.length; i++) {

    let isChange = false; //스왑이 일어났는지 여부

    // 아래 반복문을 수행하면 배열의 끝에 가장 큰 값이 위치한다.
    // j+1 < data.length-1 의 범위 설정 이유는
    // 1. <j,j+1> 쌍으로 검사하기 때문에 
    // 2. i번 반복할때마다 배열의 끝에 차례대로 가장 큰 값이 위치하므로 불필요한 반복 제거하기 위함
    for (let j = 0; j + 1 < data.length - i; j++) {
        if (data[j] > data[j + 1]) {
            let temp = data[j];
            data[j] = data[j + 1];
            data[j + 1] = temp;
            isChange = true;
        }
    }

    if (!isChange) break; //스왑이 일어나지 않은 경우 현재 정렬된 배열이기때문에 break
}
console.log(data)