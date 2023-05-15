import bookList from './List.js';

class InsertBooks {
  static addNewData(t, a) {
    let storeData = JSON.parse(localStorage.getItem('addedBooks'));
    if (storeData === null) {
      storeData = [];
    }
    const error = document.querySelector('.error');
    if (a.value !== '' && t.value !== '') {
      storeData.push({ title: t.value, author: a.value });
      localStorage.setItem('addedBooks', JSON.stringify(storeData));

      const bookItem = document.createElement('div');
      bookItem.className = 'book-item';

      const bookinfo = document.createElement('div');
      bookinfo.className = 'book-info';
      bookinfo.innerHTML = `
        <span>"${t.value}"</span>
        <span> by ${a.value}</span>
      `;
      bookItem.appendChild(bookinfo);

      error.innerHTML = 'Success !!!';
      error.classList.replace('error', 'success');
      t.value = '';
      a.value = '';
      setTimeout(() => {
        error.innerHTML = '';
        error.classList.replace('success', 'error');
      }, 600);
      bookList.displayBooks();
    } else {
      error.innerHTML = 'Auther or Book Title can"t be empty';
      setTimeout(() => {
        error.innerHTML = '';
      }, 3000);
    }
  }
}

export default InsertBooks;