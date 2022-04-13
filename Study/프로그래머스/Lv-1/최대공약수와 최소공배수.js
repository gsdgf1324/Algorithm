function solution(n, m) {

    let GCD = 1;
    let LCM = 1;

    for (let i = 1; i <= n; i++) {
        if (n % i == 0 && m % i == 0) {
            GCD = i;
        }
    }

    LCM = n * m / GCD;

    return [GCD, LCM];
}

// 최대공약수 GCD, 최소공배수 LCM
let n = 3;
let m = 12;
console.log(solution(n,m));