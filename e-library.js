function filterBooks() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const categorySelect = document.getElementById('category-select').value;
    const books = document.querySelectorAll('.book');

    books.forEach(book => {
        const bookTitle = book.textContent.toLowerCase();
        const bookCategory = book.getAttribute('data-category');

        const matchesSearch = bookTitle.includes(searchInput);
        const matchesCategory = categorySelect === "" || bookCategory === categorySelect;

        if (matchesSearch && matchesCategory) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
}

function openBook(title, pdfPath) {
    document.getElementById('book-title').textContent = title;
    document.getElementById('pdf-viewer').src = pdfPath;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
