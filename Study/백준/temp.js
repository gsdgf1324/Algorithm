function createCheckDigit(membershipId) {

    let sums = membershipId.split('').map((dr) => Number(dr)).reduce((acc, cur) => acc += cur, 0);

    while (sums >= 10) {
        sums = String(sums).split('').map((dr) => Number(dr)).reduce((acc, cur) => acc += cur, 0);
    }

    return sums;
}

console.log(createCheckDigit("55555"));