function solution(nums) {
    let sNum = nums.length / 2; //선택 수
    let l1 = [...new Set(nums)].length; //중복제거 데이터 수 
    return sNum < l1 ? sNum : l1;;
}

let nums = [3, 3, 3, 2, 2, 2];
console.log(solution(nums));