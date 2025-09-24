
//explicit ระบุชนิดข้อมูลด้วยตัวเอง
const username:string = "Pladniti";
let age:number = 16;
let isActive:boolean = true;
isActive = false;
console.log(username)


//inplicit ระบุชนิดข้อมูลอัตโนมัติ
let person = "Phomtakai";
console.log(person)

//union type คือการรวมชนิดข้อมูลหลายประเภทเข้าด้วยกันโดยใช้เครื่องหมาย | (pipe)

let id:string|number = '1002'
id = 123456789;

console.log(typeof id)

//object types 
let product:{
    id:string,
    name:string,
    price:number,
    stock:number,
}={
    id:'67219090002',
    name:'ram',
    price:1000,
    stock:50,
    
}
console.log(product);

//Array
const score:number[] = [10,20,30,40,50]
let sum = 0
score.forEach(i => {
    sum+=i;
    
});

console.log(sum);

// function 
const showMessage = (name:string):void => {
    console.log("Hello World "+name);
    
}
showMessage("pladniti")

const plus  = (num1:number,num2:number):number => {
    return num1+num2
}
// return แบบย่อ
const multiply = (x:number,y:number):number => x*y;

console.log(multiply(15,2));
console.log(plus(12,13));


//Type Aliases การตั้งชื่อชนิดข้อมูลใหม่ การตั้งฉายา
type Text = string;

let myName:Text = 'Pladnti';

console.log(typeof myName);

type Employee = {
    id:string;
    name:string;
    age:number;
    salary:number;
}



const user12:Employee={
    name:"pladniti",
    id:"544",
    salary:15200,
    age:54,
}

//interface การสร้างชนิดข้อมูลหรือโครงสร้าง object รูปแบบใหม่
interface User{
    name:string;
    age?:number
    id?:string;
}
//ประกาศชื่อซ้ำ เป็นการเพิ่ม property ตัวใหม่
interface User{
    isAdmin?:boolean;
    department?:string;
    
}

const data22:User={
    name:'pladniti',
    isAdmin:false,
}



//Literal Types คือ รูปแบบการสร้าง type ขึ้นมาใช้งานพร้อมกำหนดค่าที่แน่นอน เฉพาะ เจาะจง
//ไว้ภายใน เพื่อต้องการเก็บข้อมูลตามขอบเขตที่กำหนดไว้เท่านั้น 
//โดยใช้งานร่วมกับ | (pipe)
type Role="admin"|"agency"|"user"   //Type Aliases
let role:Role;

role = "admin"
role = "agency"
role = "user"

type Theme = 'light'|'dark'

type Size = "small"|"medium"|"large"
let mySize:Size = 'small'

type Gamemode = 'Hard'|"meduim"|"easy"

let myTheme:Theme = 'dark'


//Type Guards คือ ช่วยให้ typescript สามารถตรวจสอบระบุชนิดข้อมูลได้แม่นยำขึ้นในช่วงที่โปรแกรทกำลังทำงาน

const convert = (value:string|number)=>{
    if(typeof value === "string"){
        console.log(value.toUpperCase());
        
    }
    else{
        console.log(value.toFixed(2));
        
    }
}

convert(12)
convert('pladntiti')

//Generic
//กระบวนการจัดการชนิดข้อมูล โดยไม่ต้องเขียนโค้ดซ้ำซ้อน
function getItem<T>(arr: T[]){
    return arr[0];
}
getItem<string>(['hello','world'])
getItem<number>([11,12])
getItem<boolean>([true,false])