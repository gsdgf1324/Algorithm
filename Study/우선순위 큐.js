// 우선순위 큐 배열
// class PriorityQueue {
//     constructor() {
//         this.queue = [];
//     }

//     // 데이터의 우선순위에 따라 큐의 적절한 위치에 삽입
//     enqueue(element) {

//         /*
//          [  array.splice(start[, deleteCount[, item1[, item2[, ...]]]])  ]
//          - start : 배열의 변경을 시작할 인덱스
//          - deleteCount : 배열에서 제거할 요소의 수
//          - item1, item2, ... : 배열에 추가할 요소 
//          */

//         for (let i = 0; i < this.queue.length; i++) {
//             if (this.queue[i] < element) {
//                 this.queue.splice(i, 0, element);
//                 return;
//             }
//         }

//         // 큐에 자신보다 더 작은 값이 없으면, 맨 마지막에 삽입
//         this.queue.push(element);
//     }

//     // 삭제
//     dequeue() {
//         return this.queue.shift();
//     }

//     front() {
//         return this.queue[0];
//     }

//     size() {
//         return this.queue.length;
//     }

//     clear() {
//         this.queue = [];
//     }
// }

// let pq = new PriorityQueue();
// pq.enqueue(3);
// pq.enqueue(10);
// pq.enqueue(5);

// console.log(pq); // => 현재 queue: [ 10, 5, 3 ]
// console.log(pq.dequeue()); // => 현재 queue: [ 5, 3 ]
// console.log(pq.front()); // = 5
// console.log(pq.size()); // = 2
// console.log(pq.clear()); // // => 현재 queue: [ ]

// 우선순위 큐 heap
class PriorityQueue {
    constructor() {
        // 각 노드별 idx 접근을 쉽게하기 위해 1-based 인덱스를 만들기위해 쓰지않는 값인 0읗 넣어줌
        this.queue = [0];
    }

    enqueue(element) {

        let isertIdx = this.queue.length; // 새로운 원소가 삽입될 idx

        /*
        부모 노드의 값 : Math.floor(qSize / 2);
        만일 부모노드의 값이 현재 입력될 값보다 같거나 작으면 부모노드의 값을 isertIdx에 넣어주고
        isertIdx를 부모노드의 idx로 바꿔주고 다시 검사

        isertIdx > 1 큰 경우에만 isertIdx==1 인 경우는 이미 전체 탐색이 완료한 경우이므로 종료
        탐색 후 나온 isertIdx값에 새로운 원소를 넣어주면 됨.
        */
        while (isertIdx > 1 && this.queue[Math.floor(isertIdx / 2)] <= element) {
            this.queue[isertIdx] = this.queue[Math.floor(isertIdx / 2)]; // 새로운 원소가 삽입될 idx에 부모의 값 넣어주고
            isertIdx = Math.floor(isertIdx / 2); // 새로운 원소 삽입 idx를 부모 idx로 바꿔주고 재 검사
        }
        this.queue[isertIdx] = element;
    }

    dequeue() {
        let delValue = this.queue[1]; // 삭제 될 값
        let lastValue = this.queue.pop(); // 큐의 마지막 값
        this.queue[1] = lastValue; // 삭제 될 위치에 큐의 마지막 값을 넣어줌

        let qSize = this.queue.length - 1; //현재 배열에서 값이 들어갈 수 있는 최대 크기
        let pIdx = 1; // 탐색을 시작할 부모idx
        let cIdx = 2; // 탐색을 시작할 자식idx 

        while (cIdx <= qSize) {

            // 두 자식중 큰 노드와 부모 노드와 비교 
            if (this.queue[cIdx] < this.queue[cIdx + 1]) {
                cIdx += 1;
            }

            // 만약 자식 노드와 비교해서 크다면 더이상 검사할 필요가 없으므로 break
            if (lastValue >= this.queue[cIdx]) {
                break;
            }

            /*
            만약 자식노드가 더 큰 경우 !
            현재 부모노드 값에 자식 값을 넣어주고
            부모 idx를 자식 idx를 바꾸고 자식 idx를 왼쪽 자식 노드idx로 바꿔주고 다시 검사
             */
            this.queue[pIdx] = this.queue[cIdx];

            pIdx = cIdx; // 검사할 부모노드는 현재 자식 노드 idx로
            cIdx *= 2; // 자식 노드의 왼쪽 자식 노드 idx로
        }

        // 검사 후 나온 pIdx에 lastValue값을 넣어줌
        this.queue[pIdx] = lastValue;

        return delValue
    }

    front() {
        return this.queue[1];
    }

    size() {
        return this.queue.length - 1;
    }

    clear() {
        this.queue = [0];
    }

}

let pq = new PriorityQueue();
pq.enqueue(10);
pq.enqueue(5);
pq.enqueue(3);
console.log(pq); // => 현재 queue: [ 10, 5, 3 ]
console.log(pq.dequeue()); // => 현재 queue: [ 5, 3 ]
console.log(pq.front()); // = 5
console.log(pq.size()); // = 2
console.log(pq.clear()); // // => 현재 queue: [ ]

// https://hokeydokey.tistory.com/72