class MyStack {
    constructor() {
        this.stackArr = [];
    }

    push(x) {
        this.stackArr.push(x);
    }

    pop() {
        if (this.stackArr.length == 0) {
            return -1
        }

        return this.stackArr.pop();
    }

    size() {
        return this.stackArr.length;
    }

    empty() {
        if (this.stackArr.length == 0) {
            return 1;
        }

        return 0;
    }

    top() {
        if (this.stackArr.length == 0) {
            return -1;
        }

        return this.stackArr[this.stackArr.length - 1];
    }
}

function solution(input) {
    input = input.slice(1);

    let myStack = new MyStack();
    let answer = [];

    input.forEach((dr) => {
        switch (dr) {
            case 'pop':
                answer.push(myStack.pop());
                break;
            case 'size':
                answer.push(myStack.size());
                break;
            case 'empty':
                answer.push(myStack.empty());
                break;
            case 'top':
                answer.push(myStack.top());
                break;
            default:
                let pushNum = Number(dr.split(' ')[1]);
                myStack.push(pushNum);
                break;
        }
    });

    return answer.join('\n');
}

// '/dev/stdin'
const input = require('fs').readFileSync('stdin').toString().trim().split('\n');
console.log(solution(input));