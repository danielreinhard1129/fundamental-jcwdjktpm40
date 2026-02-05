// ============= ARRAY =============

const arr = []; // cara 1
const arr2 = new Array(); // cara 2

const arrayOfString: string[] = ["A", "B", "C", "D"];
console.log(arrayOfString[2]);

const arrayOfNumber: number[] = [2, 3, 4, 10, 100, 1];

const array: (string | number)[] = ["A", "B", "C", "D", 102];

interface Student {
  age: number;
  name: string;
}
const siswa: Student = { age: 12, name: "budi" };
console.log(siswa.name); // cara 1
console.log(siswa["age"]); // cara 2

type Student2 = {
  age: number;
  name: string;
};
const siswa2: Student2 = { age: 13, name: "joko" };

interface Siswa extends Student {
  hobby: string;
}
const siswa3: Siswa = {
  age: 12,
  name: "budi",
  hobby: "mancing",
};

// array of object
const students: Student[] = [
  { name: "jack", age: 20 }, // index: 0, length: 1
  { name: "udin", age: 19 }, // index: 1, length: 2
  { name: "joko", age: 17 }, // index: 2, length: 3
  { name: "siti", age: 21 }, // index: 3, length: 4
];

console.log(students[2].name);
console.log(students.length);

// ============= FOR OF =============
const fruits: string[] = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ============= FUNCTION =============
// 1. function declaration
/* 
    function namaFunc(){
        // logic
    }
*/

square();

function square() {
  return 5 * 5;
}

const result = square();

console.log(result);

console.log(square());

// 2. function expression
/* 
    const namaFunc = function () {
        // logic
    }

*/

const square2 = function () {
  return 5 * 5;
};

console.log(square2());

// ============= FUNCTION SCOPE =============
// variable yang di define didalam function, hanya bisa diakses di dalam func tsb

function greeting() {
  const hello: string = "Hello";

  console.log(hello);

  return hello;
}

// console.log(hello); // ini gak bisa

greeting();

// ============= PARAMETER & ARGUMENT =============
// parameter -> variable yang mewakili value dari argument yang dimasukkan
// argument -> value yang dimasukkan saat pemanggilan function

//        parameter 👇
function greeting2(name: string, company?: string) {
  const hello: string = "Hello ";

  if (company) {
    return hello + name + " " + company;
  } else {
    return hello + name;
  }
}
//             argument 👇      👇
console.log(greeting2("Joko", "Grab"));
console.log(greeting2("Siti", "Gojek"));
console.log(greeting2("Budi"));

// ============= DEFAULT PARAMETER =============
function multiply(a: number, b: number = 10) {
  console.log(a);
  console.log(b);

  return a * b;
}

multiply(5, 2);
multiply(5);

// ============= REST PARAMETER =============
// mewakili sisa argument ke dalam 1 parameter

function myFunc(a: number, b: number, ...c: number[]) {
  console.log(a);
  console.log(b);
  console.log(c);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// ============= NESTED FUNCTION =============
// fungsi yang berada di dalam fungsi
// inner function -> bisa mengakses parameter dari outer function
// outer function -> tidak bisa mengakses parameter dari inner function

function getMessage(firstName: string) {
  function sayHello() {
    return "Hello " + firstName + ", ";
  }

  function welcome() {
    return "Welcome to purwadhika";
  }

  return sayHello() + welcome();
}

console.log(getMessage("Brandon"));

// ============= RECURSIVE =============
// fungsi yang memanggil dirinya sendiri

function countdown(angka: number) {
  console.log(angka);

  let nextNumber = angka - 1;

  if (nextNumber > 0) {
    countdown(nextNumber);
  }
}

countdown(10);

// ============= ARROW FUNCTION  =============
// shortcut untuk menuliskan function expression

// function expression
const square3 = function (angka: number) {
  return angka * angka;
};

// arrow function
const square4 = (angka: number) => {
  return angka * angka;
};

// kalo cmn 1 line bisa disingkat
const square5 = (angka: number) => angka * angka;

// ============= ARRAY BUILT IN METHOD  =============
// JOIN -> menggabungkan value yang ada dalam array ke bentuk string
const words: string[] = ["hello", "world"];
console.log(words.join(" "));

// POP -> menghilangkan value paling akhir dalam array
const words2: string[] = ["hello", "world", "test"];
console.log(words2);
words2.pop();
console.log(words2);

// SHIFT -> menghilangkan value paling depan dalam array
const words3: string[] = ["hello", "world", "test"];
console.log(words3);
words3.shift();
console.log(words3);

// UNSHIFT -> menambahkan value ke urutan paling depan array
const words4: string[] = ["hello", "world", "test"];
console.log(words4);
words4.unshift("joko");
console.log(words4);

// PUSH -> menambahkan value ke urutan paling akhir array
const words5: string[] = ["hello", "world", "test"];
console.log(words5);
words5.push("siti");
console.log(words5);

// SPLICE -> menghapus, mengganti atau menambahkan value pada array
// syntax -> splice(startIndex, brpYgMauDiDelete, item)

const months: string[] = ["jan", "mar", "apr", "jun"];

// menambahkan data
months.splice(1, 0, "feb");
console.log(months);

// menghapus data
months.splice(4, 1);
console.log(months);

// edit data
months.splice(3, 1, "may");
console.log(months);

// SORT -> mengurutkan isi array berupa string / number
const fruits2: string[] = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();
console.log(fruits2);
console.log(fruits2.reverse());

const numbers: number[] = [4, 9, 3, 7, 2, 5, 10];
numbers.sort((a, b) => a - b); // asc
// numbers.sort((a, b) => b - a); // desc
console.log(numbers);

// INCLUDES -> mengecek value pada array ada atau tidak. Hasil return nya adalah boolean
const fruits3: string[] = ["Banana", "Orange", "Apple"];
console.log(fruits3.includes("Banana"));
console.log(fruits3.includes("Mango"));

// MAP -> melakukan loopong pada array dan akan mereturn array baru
const points: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result2 = points.map((point, index) => {
  console.log(index);
  return point * 2;
});

console.log(result2);

const students2 = [
  { id: 1, name: "budi" },
  { id: 2, name: "joko" },
  { id: 3, name: "siti" },
  { id: 4, name: "jack" },
];

const result3 = students2.map((student) => {
  return student.id;
});

console.log(result3);

// FILTER -> melakukan looping pada array dan menghasilkan array baru berdasarkan kondisi
//           pada return functionnya

const points2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result5 = points2.filter((point) => {
  return point % 2 === 0;
});

console.log(result5);

const ages: number[] = [12, 34, 56, 20, 17, 19, 10];

const result6 = ages.filter((age) => {
  return age >= 17;
});

console.log(result6);

// FOREACH -> melakukan looping pada array dan tidak mereturn array baru
const fruits4: string[] = ["Banana", "Orange", "Apple"];

fruits4.forEach((fruit) => {
  console.log(fruit);
});

// FIND -> mencari value yang ditemukan pertama kali dalam array
const ages2: number[] = [12, 34, 56, 20, 17, 34, 19, 10];

const result7 = ages2.find((age) => {
  return age === 34;
});

console.log(result7);

// FINDINDEX -> mirip kaya find tapi yg dihasilkan adalah indexnya. Kalo tidak ditemukan
//              akan menghasilkan -1

const students3 = [
  { id: 12, name: "budi" },
  { id: 23, name: "joko" },
  { id: 37, name: "siti" },
  { id: 42, name: "jack" },
];

const result8 = students3.findIndex((student) => {
  return student.id === 37;
});

console.log(result8);

// REDUCE ->
const numbers2: number[] = [100, 200, 300, 400, 500];

const result9 = numbers2.reduce((a, b) => {
  return a + b;
});

console.log(result9);
