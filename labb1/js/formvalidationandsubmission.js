/*
 * Used in requestbooks.html
 * Handles Form validation and submission
 */


const elForm = document.querySelector('#formReg');
const elBookTitle = document.querySelector('#txtBookTitle');
const elAuthor = document.querySelector('#txtBookAuthor');
const elISBN = document.querySelector('#txtBookISBN');
const elOutput = document.querySelector('#formRegOutput');

function validateBookTitle(title) {
    if (title.length < 3) {
        return "The book title must be at least 3 characters long.";
    }
    return null;
}

function validateAuthor(author) {
    if (author.length < 3) {
        return "The author's name must be at least 3 characters long.";
    }
    const authorPattern = /^[a-zA-Z\s]+$/;
    if (!authorPattern.test(author)) {
        return "The author's name must only contain letters and spaces.";
    }
    return null;
}

function validateISBN(isbn) {
    const isbnPattern = /^\d{13}$/;
    if (!isbnPattern.test(isbn)) {
        return "The ISBN number must be exactly 13 digits.";
    }
    return null;
}

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Perform HTML5 validation
    if (!elForm.checkValidity()) {
        elForm.reportValidity(); // Show HTML5 validation messages
        return;
    }

    // Validate inputs
    const errorMessages = [
        validateBookTitle(elBookTitle.value),
        validateAuthor(elAuthor.value),
        validateISBN(elISBN.value)
    ].filter(Boolean); // to remove any null or undefined values from the errorMessages array.

    // Display errors or success message
    if (errorMessages.length > 0) {
        elOutput.innerHTML = errorMessages.join('<br />');
        elOutput.style.color = 'red';
    } else {
        elOutput.innerHTML = `
            <strong>Book request submitted successfully!</strong> <br /> 
            Title: ${elBookTitle.value} <br /> 
            Author: ${elAuthor.value} <br /> 
            ISBN: ${elISBN.value} <br />
            <br />
        `;
        elOutput.style.color = 'green';
        elForm.reset(); // Clear the form fields

    }
}

elForm.addEventListener('submit', handleFormSubmit);
