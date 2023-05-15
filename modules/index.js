import { DateTime } from './luxon.js';
import InsertBooks from './addBook.js';
import myNav from './nav.js';
import bookList from './List.js';

const date = DateTime.fromISO(DateTime.now()).toFormat('FF');
const disdate = document.querySelector('.date');
const p = document.createElement('p');
p.innerHTML = `${date}`;
disdate.appendChild(p);

bookList.displayBooks();

// Add new data to local storage
const t = document.querySelector('.title');
const a = document.querySelector('.author');

const addbtndiv = document.querySelector('.add-btn-div');
const addbtn = document.createElement('button');
addbtn.className = 'add-newbook';
addbtn.innerHTML = 'Add';
addbtndiv.appendChild(addbtn);

const addnew = document.querySelector('.form');
addnew.addEventListener('submit', () => InsertBooks.addNewData(t, a));

window.onload = bookList.displayBooks;

myNav.navigationBar();