console.log("Hello World");

// ini adalah comment

/* 
    ini
    adalah 
    comment
*/

// ============== VARIABLE ==============
// storage / penampungan data
// var, let, const

// var person = "budi";
// console.log(person);

let person2 = "joko";
console.log("ini isi person2 sebelum di isi ulang : ", person2);
person2 = "jack";
console.log("ini isi person2 setelah di isi ulang : ", person2);

const person3 = "siti";
console.log(person3);
// person3 = "test"; // <- ini gak bakalan bisa

// ============== VARIABLE NAMING ==============
/* 
    - must contain only letters, digit, or symbol $ dan _
    - the first character must not digit
    - case sensitive
*/

const companyName = "Purwadhika"; // camel case
const CompanyName = "Purwadhika"; // pascal case
const company_name = "Purwadhika"; // snake case

// ============== DATA TYPES ==============
// primitive data types : string, number, boolean, null & undefined
// non primitive data types : object & array

// string -> '', "", ``
console.log("Purwadhika");
console.log("Purwadhika");
console.log(`Purwadhika`);

// number -> 10, 20, 100, 1000
console.log(10);
console.log(20);
console.log(1000);

// boolean -> true or false
console.log(true);
console.log(false);

// how to run quokka
// win : ctrl + k + q
// mac : cmd + k + q

// null -> menandakan sebuah value itu masih kosong dan belum terisi
const orang = null;

// undefined -> js tidak tau isinya
const orang2 = undefined;

console.log(typeof companyName);
console.log(typeof 10000);
console.log(typeof true);
console.log(typeof orang);
console.log(typeof orang2);
