/* 
 * Used in index.html and mybooks.html
 * Main script: 
 * Fetches book data from a JSON file, filters it based on tags, 
 * and populates the corresponding HTML containers with the filtered books. 
 */


/* Fetch the JSON data */
fetch('books.json')
  .then(response => response.json())
  .then(data => {
    filterBooks(data);
  })
  .catch(error => {
    console.error('Error loading the JSON file:', error);
  });


/* Function to filter books by tags and populate corresponding HTML containers */
function filterBooks(books) {
  // Maps each container to the corresponding tags it should include
  const containerToTags = {
    "book-recommendations": ["Add to Shelf", "Want to Read"],
    "currently-reading": ["Currently Reading"],
    "want-to-read": ["Want to Read"],
    "already-read": ["Read"]
  };

  // Loop through each container-tags pair in the map
  Object.entries(containerToTags).forEach(([containerId, tags]) => {
    // Filter books that match any of the tags for this container
    const filteredBooks = books.filter(book => tags.includes(book.tag));

    // Get the DOM element corresponding to the container ID
    const container = document.getElementById(containerId);

    // If the container exists, populate it with the filtered books
    if (container) {
      populateBookListInContainer(filteredBooks, container);
    }
  });

}

/* Helper function to populate books in lists to its specific container */
function populateBookListInContainer(filteredBooks, container) {
  const ul = document.createElement('ul');

  filteredBooks.forEach(book => {
    let li = document.createElement('li');

    // Uniform URL construction for consistency
    if (book.id) {
      let bookUrl = `bookinfo.html?id=${book.id}`;
      li.innerHTML = `<a href="${bookUrl}"><img src="${book.imgsrc}" alt="${book.title}" /></a>`;
    } else {
      console.error('Missing ID for book:', book);
      li.innerHTML = `<span>Error: Missing ID</span>`;
    }

    // adds list item to the unordered list
    ul.appendChild(li);
  });

  // appends unordered list to the container
  container.appendChild(ul);

}
