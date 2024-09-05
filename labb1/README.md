# Labb 1 - Utveckling av en hemsida med HTML, CSS och Javascript

## Betygskriterier
- Du ska planera hemsidan med en webbprototyp (wireframe), med penna och papper eller i ett program.
- Hemsidan ska minst innehålla följande delar:
  - Startsida med Lista/visning på det som ska presenteras.
  - Sida/sidor som presenterar utvalda skivor, recept, resmål utifrån det tema man har valt.
- Hemsidan ska göras med HTML5 och CSS, där du ska strukturera upp koden utifrån det vi hittills har gått genom i kursen t ex Semantisk HTML, använda CSS för formatering.
- Hemsidan ska fungera för desktop och mobil genom CSS Grid och/eller Flexbox samt ev. Media Queries om det behövs.
- Interaktivitet med användaren med Javascript genom formulär för t ex ”betygsättning”, ”önskelistor”, ”bli medlem”. Det räcker att informationen visas på en html-sida när man har matat in det dvs behöver inte sparas någonstans. Men försök göra så att användaren förstår syftet och känner det intressant att använda.
- Du behöver göra någon form av validering i formulären för användaren med Javascript. Du kan förutom det använda validering i HTML5.
- Du ska använda JSON för att läsa in data (på någon av sidorna) med Fetch.
- Du ska anpassa färger så att de passar ihop, använd t ex Adobe Color.
- Du ska ha tänkt genom vilka typsnitt du använder så att det är lättläst.
- Du ska validera din kod utifrån HTML5.
- Du ska testa att hemsidan fungerar i moderna webbläsare (Chrome, Firefox).


## About this project

> [!TIP] 
> ### Extensions used for this project in Visual Studio Code
> **Name:** Live Server   ```ID: ritwickdey.LiveServer``` <br>
> **Name:** vscode-pdf    ```ID: tomoki1207.pdf```

### The Book Club website
The WireFrames, both the old and the new one, are placed inside the *'wireframe'*-folder.<br>

Mobile friendly by default and Media Query is applyed for desktop.<br>

The header, nav and footer for the website are placed in the *'partials'*-folder and being loaded by JavaScript *'js/loadpartials.js'*, making these reusable and easier to modify.<br>

At the moment the books are placed together in a single JSON-file, *'books.json'*, and are fetched, filtered and populated in their specific containers at *'Home'* and *'My Books'*. You'll find the code for this in *'js/filteranddisplaybooks.js'.<br>
- *'Home'*, you'll have books filtered with the tags *'Add to Shelf'* and *'Want to Read'* in the *'Book Recommendation'*-container. <br>
- *'My Books'*, you'll have books filtered with the tags *'Currently Reading'*, *'Want to Read'* and *'Read'* in the *'Currently Reading'*-, *'Want to Read'*- and *'Read'*-container.<br>

You can also request a book, by filling out the form. This you'll find in the website footer. The validation for this form is both HTML and JavaScript and you'll find the code for that in *'js/formvalidationandsubmission.js'*.<br>

If you'd like to read more about one book, simply click on it. The *'js/filteranddisplaybooks.js'* have cunstructed a uniform URL for consistency, making the *'bookinfo.html'* dynamic. The *'js/displaybookinfo.js'* get the id of the book and displays the correct information about that specific book.<br>
Lightbox is used in the bookinfo.html, where, if you click on the book cover, it display a larger image infront of the page.<br><br>


### If there is time left, I'd like to implement the following:
- Add whats needed for 'VG-betygskriterier'.
- Add a 'Show more...'-button to expand the list of books. Showing 10 more books.
- Fix the search-function, being able to search books on the page.
- Add a tag-functionality, where you can add books to your bookshelf, and also the status of the books (currently reading, want to read, read).
- Make the mybooks.html dynamical, where you can show only specific tags or all.
- change the URL for bookinfo.html to use the book.ISBN instead of book.id.
