// ============= IF STATEMENT =============
// syntax
/* 
    if(condition){
        code block
    }
*/

const age: number = 20;

if (age >= 17) {
  console.log("Anda bisa buat KTP");
}

// ============= ELSE STATEMENT =============
// backup plan dari if statement

const age2: number = 40;

if (age2 >= 17) {
  console.log("Anda bisa buat KTP");
} else {
  console.log("Anda belum bisa buat KTP");
}

// shift + alt + F -> win
// shift + opt + F -> mac

// ============= ELSE IF STATEMENT =============

const grade: string = "A";

if (grade === "A") {
  console.log("nilai bagus");
} else if (grade === "B") {
  console.log("nilai lumayan");
} else if (grade === "C") {
  console.log("nilai buruk");
} else {
  console.log("nilai tidak diketahui");
}

// ============= SWITCH CASE =============
// syntax
/* 
    switch(value){
        case "value1":
            // add code here
            break;
        case "value2":
            // add code here
            break;
        case "value3":
            // add code here
            break;
        default:
            // add code here
            break;   
    }
*/

const day: string = "senin";

switch (day) {
  case "senin":
    console.log("hari senin");
    break;
  case "selasa":
    console.log("hari selasa");
    break;
  case "rabu":
    console.log("hari rabu");
    break;
  default:
    console.log("hari tidak ditemukan");
    break;
}

// ============= LOGICAL OPERATOR =============
// && -> and
// || -> or
// ! -> not

// AND -> harus kedua kondisinya bernilai true agar menghasilkan nilai true
const umur: number = 20;
const punyaSIM: boolean = false;

if (umur >= 17 && punyaSIM) {
  console.log("boleh bawa kendaraan");
} else {
  console.log("belum boleh bawa kendaraan");
}

// OR -> kalau salah satu ada yang nilainya true, akan menghasilkan nilai true
const car: string = "mercy";

if (car === "mercy" || car === "bmw") {
  console.log("mobil eropa");
} else {
  console.log("mobil jepang");
}

// NOT -> membalikkan nilai boolean
const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// ============= TERNARY OPERATOR =============
// shortcut untuk if else condition
// condition ? true : false

const str: string = "javascript";

// cara panjang
if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

// cara pendek
console.log(str === "javascript" ? "javascript" : "not javascript");

str === "javascript"
  ? "javascript"
  : str === "typescript"
    ? "typescript"
    : "not typescript / javascript";

// ============= LOOP STATEMENT (perulangan) =============

// tipe loop : for loop, while loop, do while loop

// FOR LOOP -> punya 3 statement
// statement 1 -> menginisialisasikan variable dari looping itu sendiri
// statement 2 -> mendefine kondisi dari looping tsb
// statement 3 -> kode yang akan di eksekusi diakhir setiap iterasi

/* 
    for(statement1;statement2;statement3){
        code block yang akan diulang
    }
*/

// looping 10x
for (let i = 0; i < 10; i++) {
  console.log("hello");
}

// nested loop
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log("hello");
  }
}

// WHILE LOOP
/* 
    while(condition){
        code block yang akan diulang
    }
*/

let i: number = 100;

while (i < 10) {
  console.log(i);

  i++;
}

// DO WHILE LOOP
/* 
    do {
        code block yang akan diulang     
    } while (condition)
*/

let count: number = 100;

do {
  console.log(count);
  count++;
} while (count <= 5);

// BREAK -> menghentikan looping
let sum: number = 0;

while (true) {
  console.log(sum);

  if (sum >= 5) break;

  sum++;
}

// CONTINUE -> skip looping
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;

  console.log(i);
}
