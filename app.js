"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//explicit ระบุชนิดข้อมูลด้วยตัวเอง
const username = "Pladniti";
let age = 16;
let isActive = true;
isActive = false;
console.log(username);
//inplicit ระบุชนิดข้อมูลอัตโนมัติ
let person = "Phomtakai";
console.log(person);
//union type คือการรวมชนิดข้อมูลหลายประเภทเข้าด้วยกันโดยใช้เครื่องหมาย | (pipe)
let id = '1002';
id = 123456789;
console.log(typeof id);
//object types 
let product = {
    id: '67219090002',
    name: 'ram',
    price: 1000,
    stock: 50,
};
console.log(product);
//Array
const score = [10, 20, 30, 40, 50];
let sum = 0;
score.forEach(i => {
    sum += i;
});
console.log(sum);
// function 
const showMessage = (name) => {
    console.log("Hello World " + name);
};
showMessage("pladniti");
const plus = (num1, num2) => {
    return num1 + num2;
};
// return แบบย่อ
const multiply = (x, y) => x * y;
console.log(multiply(15, 2));
console.log(plus(12, 13));
let myName = 'Pladnti';
console.log(typeof myName);
const user12 = {
    name: "pladniti",
    id: "544",
    salary: 15200,
    age: 54,
};
const data22 = {
    name: 'pladniti',
    isAdmin: false,
};
let role;
role = "admin";
role = "agency";
role = "user";
let mySize = 'small';
let myTheme = 'dark';
//Type Guards คือ ช่วยให้ typescript สามารถตรวจสอบระบุชนิดข้อมูลได้แม่นยำขึ้นในช่วงที่โปรแกรทกำลังทำงาน
const convert = (value) => {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
};
convert(12);
convert('pladntiti');
//Generic
//กระบวนการจัดการชนิดข้อมูล โดยไม่ต้องเขียนโค้ดซ้ำซ้อน
function getItem(arr) {
    return arr[0];
}
getItem(['hello', 'world']);
getItem([11, 12]);
getItem([true, false]);
//# sourceMappingURL=app.js.map