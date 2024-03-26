// // 객체->
// // me = {
// //   name: "lee",
// //   gender: "male",
// //   age: 43
// // }

// // you = {
// //   name: "kim",
// //   gender: "female",
// //   age: 37
// //   address: null;
// // }
// // me.age;

// //함수
// // function sum(x, y) {
// //   result = x + y;
// //   return result;
// // }
// // console.log(you.name);
// // console.log(you.age);
// // console.log(you.sum(20, 20));
// // function hi(name) {
// //   console.log("hi~ " + name);
// // }

// // nm = "lee";

// // hi(nm);

// // abc = sum(200, 200);

// // console.log("abc", abc);
// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     // console.log(i + " * " + j + " = " + i * j);
//     console.log(`${i} * ${j} = ${i * j} `);
//   }
// }

// // const firstName = `Eddy`;
// // const lastName = `Kim`;

// // console.log("My name is " + firstName + " " + lastName);
// // console.log(`My name is ${firstName}
// // ${lastName} `);

// if (name === "lee") {
//   console.log("hi lee");
// } else if (name === "kim") {
//   console.log("hi kim");
// } else {
//   console.log("hi");
// }
// switch (변수) {
//   case 1;
//     console.log('1')
//   break;
// }

// switch (name) {
//   case "lee":
//     console.log("hi lee");
//     break;
//   case "kim":
//     console.log("hi kim");
//     break;
// default:
// }

// //변수 선언 방법

// var name= "park"
// -네임이 공개되는 영역이 생김 (스콥프)
// 만약에 var를 함수 안에서 썼다면 함수 안에서만 이용 가능
// ex) function sum(a,b) {
//   var num =2;
//   return (a + b) * 2;
// }
// 만약 var를 안쓰면 전체 공개!
// let name = "lee";
// -

// name = "lee";

// const name = "kim";
// -
// name = "lee";

//반복문
//구구단

// for(초기값; 범위; 증감연산;) {
//   반복할 코드
// }
// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     console.log(i + " * " + j + " = " + i * j);
//   }
//   console.log(i + " * " + j + " = " + i * j);
// }

//배열
// const A = [2, 3, 4, 5, 6, 7, 8, 9];
// const B = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // [1, "a", true, { name: "lee"},<-이건 오브젝트 1, 2, 3];

// // //등등 나열되어 있는 것들이 배열이라고 함
// console.log(A);
// console.log(A.length);
// console.log(A[A.length - 1]);
// console.log(Array.prototype);
// A.push(10);
// console.log(A);
// A.forEach(function () {});

// const result = [];

// function fn(elem, idx) {
//   if (elem % 2 === 0) {
//     result.push(elem);
//   }
// }

// A.filter();
// console.log(result);

// // filter는 true 값만 반환하고
// // foreach는 반환하지 않는다.

// products.map();
