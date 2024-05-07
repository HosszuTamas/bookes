/*
* File: app.js
* Author: Hosszú Tamás
* Copyright: 2024, Hosszú Tamás
* Group: Szoft I/1/N
* Date: 2024-05-07
* Github: https://github.com/hosszutamas/
* Licenc: GNU GPL
*/
const doc = {
    bookBody: document.querySelector('#bookBody')
}

const state = {
    bookList: []
}

function getBooks() {
    const url = 'http://localhost:8000/books';
    fetch(url)
    .then(response => response.json())
    .then(result => {
        state.bookList = result
        renderTable();
    });
}

function renderTable() {
    console.log('renderelés...');
    state.bookList.forEach( book => {
        var tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.price}</td>
        `;
        doc.bookBody.append(tr);
    })
}

getBooks();