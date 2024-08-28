// const dotenv = require("dotenv") // common.js

// import dotenv from 'dotenv' //ES6

// dotenv.config()

// console.log("Hello World");

// TIPE DASAR TYPESCRIPT

// 1. primitive type => number, string, boolean

// const age: number = 20;
// const fullname: string = "Evan";
// const isStudent: boolean = true;

// console.log(age, fullname, isStudent);

// 2. any dan unknown

// const vAny : any = 10
// const vUnknown : unknown = 10

// const s1: string = vAny // TypeData Any
// const s2: string = vUnknown //TypeData Unknown
// const s3: string = vUnknown as string //Type assertion

// vAny.apapun()
// vUnknown.apapun()

// 3. union dan intersection types

// union => ATAU => |

// let value : string | number | boolean
// value = 20
// value = "Evan"
// value = false

// intersection => DAN => &

// type A = {
//     a: string
// }

// type B = {
//     b: number
// }

// let value : A & B

// value = {a : "aa", b : 1234}

// with 1 line

// let value: {a: string} & {b: number  }

// value = {a : "aa", b : 1234}

// 4. literal types

// type Direction = "left" | "right" 
// let directional: Direction = "left"
// let directional: Direction = "right"

// 5. enum

// const COLOR = { ❌
//     Red : "Red",
//     Green : "Green",
//     Blue : "Blue",
// }

// const test =COLOR.Red

// enum APPCOLOR {
//     Red = "Red",
//     Gray = "Gray",
//     Pink = "Pink"
// }

// enum BRANDCOLOR {
//     Red = "Red",
//     Green = "Green",
//     Blue = "Blue"
// }

// let appColor: APPCOLOR = APPCOLOR.Gray
// let brandColor: BRANDCOLOR = BRANDCOLOR.Blue

// console.log("appColor", appColor);
// console.log("brandColor", brandColor);

// INTERFACE & TYPE ALIASES

// 1. interface

// interface User { // PascalCase
//     name : string;
//     age? : number;
// }

// let user: User ={
//     name: "Evan",
//     age: 20 ,
// }

// console.log(user.name, user.age);

// 2. type aliases

// type User = {
//     fullname?: string;
//     email:string;
//     password:string;
// };

// const user: User = {
//     email: "evan@gmail.com",
//     password: "Evan"
// }

// contoh extending interface & type aliases

// 1. extending interface

// interface User {
//     fullname?: string;
//     email:string;
//     password:string;
// };

// interface Profile {
//     image?: string;
//     age?: number;
//     birthdate?: Date;
//     address: string;
// }

// interface UserProfile extends User, Profile {}

// const userprofile: UserProfile = {

// }

// 2. extending type aliases

// type User = {
//     fullname?: string;
//     email:string;
//     password:string;
// };

// type Profile = {
//     image?: string;
//     age?: number;
//     birthdate?: Date;
//     address: string;
// }

// type UserProfile = User & Profile

// const userProfile: UserProfile = {
//     address: "Situbondo",
//     email: "evan@gmail.com",
//     password: "123123",
// }

// type NumberUser = number | User | Profile

// const test:NumberUser = 123123 as number

/// KONFIGURASI & KOMPILASI DI TYPESCRIPT

console.log("env", process.env.SECRET_KEY);





































