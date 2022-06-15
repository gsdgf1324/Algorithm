/*
7 3
10 2 5 3 7 9 1
=> 8 

레이지 업데이트?
Lazy Propagation
- 지금 당장 꼭 필요한 업데이트가 아니라면 미루기
- 계산 결과에 꼭 필요한 업데이트만 지금 하는 것


 */

function solution(input) {
    let settings = input.shift();
    let N = settings[0];
    let K = settings[2];

    // 소득 가장 낮은 도시부터 pop되는 우선순위 큐
    let rangeMinmum = 0;

    // 소득 가장 높은 도시부터 pop되는 우선순위 큐
    let rangeMaxmum = 0;

    console.log(N, K)
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));

class PriorityQueue {
    constructor(isMax) {
        this.queue = [0];
        this.isMax = isMax;
    }

    enqueue(element) {
        let enIdx = this.queue.length;

        if (this.isMax) { //최대 힙
            while (enIdx > 1 && this.queue[Math.floor(enIdx / 2)] <= element) {
                this.queue[enIdx] = this.queue[Math.floor(enIdx / 2)];
                enIdx = Math.floor(enIdx / 2);
            }
        } else { //최소 힙
            while (enIdx > 1 && this.queue[Math.floor(enIdx / 2)] >= element) {
                this.queue[enIdx] = this.queue[Math.floor(enIdx / 2)];
                enIdx = Math.floor(enIdx / 2);
            }
        }

        this.queue[enIdx] = element;
    }

    dequeue() {
        let delElement = this.queue[1];
        let temp = this.queue.pop();
        this.queue[1] = temp;

        let qSize = this.queue.length;
        let pIdx = 1;
        let cIdx = 2;

        if (this.isMax) {
            while (cIdx < qSize) {

                if (this.queue[cIdx] < this.queue[cIdx + 1]) {
                    cIdx += 1;
                }

                if (temp >= this.queue[cIdx]) {
                    break;
                }

                this.queue[pIdx] = this.queue[cIdx];
                pIdx = cIdx;
                cIdx = cIdx * 2;
            }
        } else {
            while (cIdx < qSize) {

                if (this.queue[cIdx] > this.queue[cIdx + 1]) {
                    cIdx += 1;
                }

                if (temp <= this.queue[cIdx]) {
                    break;
                }

                this.queue[pIdx] = this.queue[cIdx];
                pIdx = cIdx;
                cIdx = cIdx * 2;
            }
        }

        this.queue[pIdx] = temp;

        return delElement
    }
}



let pq = new PriorityQueue(false);
pq.enqueue(3);
pq.enqueue(9);
pq.enqueue(10);
pq.enqueue(11);
pq.enqueue(5);
pq.enqueue(7);
console.log(pq);
pq.dequeue();
pq.dequeue();
console.log(pq);