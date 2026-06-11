// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik

import { addBook, searchBook, showBookList } from './functions/bookManager';

console.log('Book Management Application - Week 6');
console.log('=====================================');

// Mulai pengujian di bawah ini

//show empty list
console.log('SHOW EMPTY LIST');
showBookList();
console.log('');

// add books
console.log('ADD BOOKS');
addBook('To Kill a Mockingbird', 'Harper Lee', 1960);
addBook('Pride and Prejudice', 'Jane Austen', 1813);
console.log('');

// show list
console.log('SHOW LIST');
showBookList();
console.log('');

// search book with parameter title
console.log('SAME WRITING STYLE');
searchBook('To Kill a Mockingbird');
console.log('');

console.log('UPPERCASE');
searchBook('TO KILL A MOCKINGBIRD');
console.log('');

console.log('LOWERCASE');
searchBook('to kill a mockingbird');
console.log('');

console.log('RANDOM WRITING STYLE');
searchBook('TO kiLL A MockingBIRD');
console.log('');

// search book without parameter
console.log('WITHOUT PARAMETER');
searchBook();
console.log('');

// search with wrong title
console.log('WRONG TITLE');
searchBook('hello world');
console.log('');
