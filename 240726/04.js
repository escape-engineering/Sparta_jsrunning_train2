1;
//배열 API map 활용
var arr = [10, 20, 30];
// arr의 각 요소에 10을 곱한 새로운 배열을 생성해주세요
let newArr1 = arr.map((item) => item * 10);
// 결과 값: [100, 200, 300]을 출력해주세요
console.log(newArr1);

2;
//배열 API filter 활용
var arr = [10, 22, 33];
// 5의 배수를 찾아 반환해주세요
let newArr2 = arr.filter((item) => item % 5 === 0);
// 결과값 [10]을 출력해주세요
console.log(newArr2);

3;
const numbers = [5, 10, 15, 20, 25];
// 크기가 15보다 큰 숫자의 값을 반환하여 출력해주세요
let newArr3 = numbers.filter((item) => item > 15);
// 출력값 [20, 25]
console.log(newArr3);

4;
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 4 이상인 값을 반환하여 출력해주세요
let newArr4 = arr.filter((item) => item.length >= 4);
console.log(newArr4);

5;
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 요소의 문자열 길이가 홀수인 요소만 반환하여 출력해주세요
let newArr5 = arr.filter((item) => item.length % 2 === 1);
console.log(newArr5);

6;
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// 오름차순으로 정렬하여 출력해주세요
let newArr6 = arr.sort((a, b) => a - b);
console.log(newArr6);

7;
var student = [
    { name: "이재상", age: 25 },
    { name: "정윤오", age: 30 },
    { name: "김준현", age: 12312 },
];
// age를 이용하여 내림차순으로 정렬하고 출력해주세요
let newArr7 = student.sort((a, b) => b.age - a.age);
console.log(newArr7);

8;
var student = [
    { id: 1, name: "이재상" },
    { id: 2, name: null },
    { id: 3, name: "김준현" },
];
// 객체 배렬에서 name 속성이 null인 객체가 있는지 판별을 확인하는 코드를 작성하고 반환값을 출력해주세요
let answer8 = student.some((item) => item.name === null);
console.log(answer8 ? "name:null존재" : "name:null없음");

9;
var arr = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 5를 초과하는 요소가 있는지 검사하는 코드를 작성하고 반환값을 출력해주세요.
let answer9 = arr.some((item) => item.length > 5);
console.log(answer9 ? "길이초과존재" : "길이초과없음");

10;
var arr = ["banana", "kiwi", "mango"];
// kiwi 와 manggo 사이에 새로운 요소를 삽입하는 코드를 작성하고 출력해주세요
let newArr10 = [...arr];
newArr10.splice(2, 0, "apple");
console.log(newArr10);

11;
var arr = [1, 5, -3, 10, 0, 8];
// 배열에 음수가 하나라도 있는지 판별하는 코드를 작성하고 반환값을 출력해주세요
let answer11 = arr.some((item) => item < 0);
console.log(answer11 ? "음수존재" : "음수없음");

12;
var arr = [1, 5, -3, 10, 0, 8];
// 모든 숫자가 음수인지 판별하는 코드를 작성하고 반환값을 출력해주세요
let answer12 = arr.every((item) => item < 0);
console.log(answer12 ? "모든숫자가음수" : "일부분이음수");
