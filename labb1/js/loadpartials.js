/*
 * Used in index.html, mybooks.html and bookinfo.html
 * Loads the partials header, nav and footer.
 */


function loadContent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.log("Error loading content: ", error));
}

// Load the header, navigation, and footer
loadContent("partials/header.html", "header");
loadContent("partials/nav.html", "nav");
loadContent("partials/footer.html", "footer");