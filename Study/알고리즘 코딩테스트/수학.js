function isPrime(num) {

    // 2,3 은 소수
    if (num <= 3) {
        return true;
    }
    // 2의 배수는 소수가 아님
    else if (num % 2 == 0) {
        return false;
    }

    // 2 ~ sqrt(num) 범위에서 num을 나누어 떨어지는 값이 있으면 소수가 아님
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}
function getDistance(p1, p2) {
    // p1 = [0,3] 형식일 떄
    // p2 = [4,2] 형식일 떄

    let [x1, y1] = p1;
    let [x2, y2] = p2;

    // (x1 - x2) ** 2 + (y1 - y2) ** 2
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}


function factor(num) {
    let factorArr = [];

    for (let div = 2; div <= Math.sqrt(num); div++) {
        /* div로 나누어 떨어지는 경우가 있다면
           소인수 분해 배열에 넣어주고, num을 div로 나눈 뒤 재 탐색
        */
        while (num % div == 0) {
            factorArr.push(div);
            num /= div;
        }
    }

    // N이 1이 아닌 다른수가 남아있는 경우 N은 소수임
    /*
    ex) 14를 예를 들면 
    
    [ 처음 반복 ]
    div = 2 일때 14%2= 0, 몫은 7 이므로 2 * 7 (N = N/2 = 7)

    [ 두번째 반복 ]
    div = 2 일때 7%2= 1 이므로 다음 탐색
    div = 3 일떄 N은 현재 7이므로 반복 조건에 맞지 않아 빠져나옴( 3<=sqrt(7), 3이 더 크기때문에 반복 종료 ) 
    따라서 반복 종료 시점에서 N = 7

    => 이처럼 검사 종료 후 N이 1이 아닌 경우는 소수인 경우 뿐임.
     */
    if (num > 1) {
        factorArr.push(num);
    }

    return factorArr.join(' * ');
}


function getGCD1(A, B) {
    // a가 b로 나누어 떨어지면 b가 최대 공약수
    // 그렇지 않다면? b와 (a%b)의 최대 공약수가 전채의 최대공약수가 된다.
    while (A % B != 0) {
        let C = A % B;
        A = B;
        B = C;
    }

    return B
}
function getGCD2(A, B) {
    if (A % B == 0) {
        return B;
    } else {
        return getGCD2(B, A % B);
    }
}
const getGCD3 = (A, B) => A % B == 0 ? B : getGCD3(B, A % B);


// 재귀 함수로 N번째 값만 구하기
function getFibo1(nIdx) {
    if (nIdx < 2) {
        return 1;
    } else {
        return (getFibo1(nIdx - 1) + getFibo1(nIdx - 2));
    }
}
// 배열을 통한 구현 (점화식)
function getFibo2(nIdx) {

    if (nIdx == 0 || nIdx == 1) return 1;

    let fib = [1, 1];
    for (let i = 2; i <= nIdx; i++) {
        fib.push((fib[i - 1] + fib[i - 2]));
    }

    return fib[nIdx];
}


function fillSieve_1(N) {

    /*
    idx와 숫자를 매칭시키기 위해 N+1 만큼 해줌 (인덱스 번호가 주어진 숫자 n과 대응하도록)
    => 숫자 1의 소수 여부값 => isPrime[1]에 저장
     */
    let isPrime = Array.from({ length: N + 1 }, (dr, idx) => idx);

    isPrime[0] = 0; // 0은 소수가 아니므로 0으로
    isPrime[1] = 0; // 1은 소수가 아니므로 0으로

    for (let num = 2; num <= N; num++) {

        // 현재 값이 소수가 아니면 continue
        if (isPrime[num] == 0) {
            continue;
        }

        /*
        현재 값이 소수이면 해당 값의 제곱부터, 
        => ex) i가 7 일 때, 7의 제곱 수 49 이전의 7의 배수들은 이미 앞에서 소수체크가 된 상태
               즉 14, 21, 28.. 값들은 이미 지워진 상태 !
         */
        for (let i = num * num; i <= N; i += num) {
            isPrime[i] = 0;
        }
    }

    // 검사 후 0이 아닌 값들은 소수임 !
    return isPrime.filter((dr) => dr != 0).join(', ');
}


function solution(N) {

    // 1~N 까지 소수 여부를 저장하는 배열
    let fillArr = fillSieve(N);

    /*
    [ 3 ~ N/2 ] 범위를 반복하며 ( p, N-p ) 두 값이 소수 인지를 체크
    N/2 범위까지 하는 이유는 더 이상 넘어가면 앞에서 검사한 수와 동일하기 때문!!
    => ex) N = 12 일때 검사하는 두 수는 (3,9) (5,7) (7,5) (9,3)
           위 예시처럼 6을 넘어가면 앞에서 검사한 중복 된 수를 검사함!
     */
    for (let p = 3; p <= N / 2; p += 2) {
        let q = N - p;

        // p && q 가 모두 소수이면 정답!
        if (fillArr[p] && fillArr[q]) {
            return [p, q]
        }
    }

    return -1;
}

function fillSieve(N) {

    let isPrime = Array.from({ length: N + 1 }).fill(true);

    // 0, 1 은 소수가 아님.
    isPrime[0] = false;
    isPrime[1] = false;

    for (let num = 2; num <= N; num++) {

        if (isPrime[num] == false) {
            continue;
        }

        for (let i = num * num; i <= N; i += num) {
            isPrime[i] = false;
        }

    }

    // 소수인 값은 true, 소수가 아니면 false를 가지는 배열
    return isPrime;
}

console.log(solution(42))


// console.log(fillSieve(37));

// console.log(isPrime(2976221));
// console.log(getDistance([0, 3], [4, 2]));
// console.log(factor(32));

// let A = 75221805;
// let B = 105181189;
// const getGCD3 = (A, B) => A % B == 0 ? B : getGCD3(B, A % B);
// let getLCM = A * B / getGCD3(A, B);
// console.log(getLCM)
// console.log(getGCD1(75221805, 105181189));
// console.log(getGCD2(75221805, 105181189));
// console.log(getGCD3(75221805, 105181189));

// console.log(getFibo1(20));
// console.log(getFibo2(20));