//주어진 학생 객체 배열에서 각 학생의 평균 점수를 계산한 후,
//평균이 80점 이상인 학생의 이름만 필터링하여 출력해주세요. 가능하다면 메소드 체이닝으로 풀어주세요
// 1.
const students = [
    { name: "이재상", scores: [80, 90] },
    { name: "김준현", scores: [90, 95] },
    { name: "정윤오", scores: [75, 70] },
];

// 여기에 코드를 작성해주세요
let answerArr1 = [];
students.forEach((item, idx) => {
    let average = (item.scores[0] + item.scores[0]) / 2;
    average >= 80 ? answerArr1.push(item.name) : null;
});
// 예상 출력: ["이재상", "김준현"]
console.log(answerArr1);

// 2.
const numbers = [5, 10, 15, 20, 25];
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
let answerArr2 = numbers.map((item) => item * 2).filter((item) => item <= 30);
// 출력값 : [10, 20, 30]
console.log(answerArr2);
