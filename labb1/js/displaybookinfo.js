/*
 * Used in bookinfo.html
 */


// Get the book ID from the URL and display the book details
document.addEventListener('DOMContentLoaded', () => {
    const bookId = getQueryParam('id');
    if (bookId) {
        displayBookDetails(bookId);
    } else {
        console.error('No book ID found in URL');
        document.getElementById('book-details').innerHTML = `<h3>No book ID provided</h3>`;
    }
});

// Function to get the query parameter from the URL 
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to fetch and display book data
function displayBookDetails(bookId) {
    fetch('books.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(books => {
            // Find the book with the matching ID
            const book = books.find(b => b.id == bookId);

            if (book) {
                updatePageTitle(book);
                renderBookDetails(book);
                setUpLightbox();
            } else {
                console.error('Book not found for ID:', bookId);
                document.getElementById('book-details').innerHTML = `<h3>Book not found</h3>`;
            }
        })
        .catch(error => {
            console.error('Error fetching book data:', error);
            document.getElementById('book-details').innerHTML = `<h3>Error loading book data</h3>`;
        });
}

// Function to update the page title with book information
function updatePageTitle(book) {
    document.title = `Book Club - ${book.title} by ${book.author}`;
}

// Function to render the book details in the DOM
function renderBookDetails(book) {
    const container = document.getElementById('book-details');
    container.innerHTML = '';

    // Create and append the book details section
    const section = createBookDescriptionSection(book);
    container.appendChild(section);

    // Create and append the book description paragraph
    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.innerHTML = `<label>About the book:</label> ${book.description}`;
    container.appendChild(descriptionParagraph);
}

// Function to create an image element ( before --> `<img src="${book.imgsrc}" alt="${book.title}" class="thumbnail"/>`)
function createImageElement(src, alt, className) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.classList.add(className);
    return img;
}

// Function to create the book description section
function createBookDescriptionSection(book) {
    const section = document.createElement('section');
    section.classList.add('bookdescription-container');

    // Create and append the book image
    const thumbnail = createImageElement(book.imgsrc, book.title, 'thumbnail');
    section.appendChild(thumbnail);

    // Create and append the unordered list
    const ul = document.createElement('ul');
    ul.classList.add('book-details');
    ul.innerHTML = `
        <li><label>Title:</label> ${book.title}</li>
        <li><label>Author/s:</label> ${book.author}</li>
        <li><label>First published:</label> ${book.year}</li>
    `;
    section.appendChild(ul);

    return section;
}

// Function to set up the lightbox functionality
function setUpLightbox() {
    const lightbox = document.getElementById("lightbox");
    // create html inside of id lightbox
    lightbox.innerHTML = `
        <span class="close">&times;</span>
        <img class="lightbox-content" id="lightbox-img" alt="Enlarged Book Image"></img>
    `;

    // get from div id book-details
    const thumbnail = document.querySelector(".thumbnail");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Set up event listeners
    thumbnail.addEventListener('click', () => {
        lightbox.style.display = "block";
        lightboxImg.src = thumbnail.src;
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener('click', (event) => {
        if (event.target == lightbox) {
            lightbox.style.display = "none";
        }
    });
}
