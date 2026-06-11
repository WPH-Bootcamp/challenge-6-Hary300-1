// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

import { BookList } from '../data/books';

export function addBook(
  title: string,
  author: string,
  publicationYear: number
): void {
  const newBook = {
    title,
    author,
    publicationYear,
  };

  BookList.push(newBook);
  console.log('');
  console.log('MESSAGE:');
  console.log(`New Book "${newBook.title}" Added`);
  console.log('');
}

export function showBookList(): void {
  if (BookList.length === 0) {
    console.log('');
    console.log('MESSAGE: ');
    console.log('Book List is Empty');
    console.log('');
    return;
  }
  console.log(`Total: ${BookList.length} Book(s)`);
  BookList.map((book, i) => {
    console.log('|--------------------------|');
    console.log(`|No. ${i + 1}`);
    console.log(`|Title: ${book.title}`);
    console.log(`|Author: ${book.author}`);
    console.log(`|Publication year: ${book.publicationYear}`);
    console.log('|--------------------------|');
  });
}

export function searchBook(title?: string): void {
  if (!title) {
    showBookList();
    return;
  }
  const selectedBook = BookList.find(
    (book) => book.title.toLowerCase() === title.trim().toLowerCase()
  );
  if (!selectedBook) {
    console.log('');
    console.log('MESSAGE: ');
    console.log('Book not found');
    console.log('');
    return;
  }

  console.log('|--------------------------|');
  console.log(`|Title: ${selectedBook.title}`);
  console.log(`|Author: ${selectedBook.author}`);
  console.log(`|Publication year: ${selectedBook.publicationYear}`);
  console.log('|--------------------------|');
}
