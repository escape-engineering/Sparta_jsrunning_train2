//해당 문제를 forEach로 변경하여 풀어주세요
// 1.
let arr1 = [10, 20, 30];
// 해당 로직을 작성하세요
let answerArr1 = [...arr1];
answerArr1.forEach((item, idx) => {
    answerArr1[idx] = item * 10;
});
// 결과 값: [100, 200, 300] 출력해주세요
console.log(answerArr1);

// 2.
let arr2 = [10, 22, 33];
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요
let answerArr2 = [];
arr2.forEach((item, idx) => {
    arr2[idx] % 5 === 0 ? answerArr2.push(item) : null;
});
console.log(answerArr2);
// 결과값 [10]
