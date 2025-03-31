import quotes from "./quotes.js";

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const quoteAuthorElement = document.getElementById('quote-author');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

function generateRandomQuote() {
    currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    console.log(currentQuoteIndex, quotes)
    const randomQuote = quotes[currentQuoteIndex];
    // const {quote, author: quoteAuthor} = quotes[randomIndex];
    // const quote = '<em>"' + randomQuote.quote + '"</em>' + '<br>' + randomQuote.author;
    // const quote = `<em>"${randomQuote.quote}"</em><br>${randomQuote.author}<br>`;
    // const {quote, author: quoteAuthor} = randomQuote;
    const {quote, author} = randomQuote;
    // const quote = randomQuote.quote;
    // const quoteAuthor = randomQuote.author;
    quoteElement.textContent = quote;
    quoteAuthorElement.textContent = author;
    toggleFavoriteBtn.textContent = randomQuote.isFavorite
        ? 'Remove'
        : 'Add-to-Favorites'
}

function toggleFavorite() {
    console.log(currentQuoteIndex);
    const currentQuote = quotes[currentQuoteIndex];
    currentQuote.isFavorite = !currentQuote.isFavorite;
    console.log(quotes)
    // if(toggleFavoriteBtn.textContent === 'Add-to-Favorites'){
    //     toggleFavoriteBtn.textContent = 'Remove';
    // } else {
    //     toggleFavoriteBtn.textContent = 'Add-to-Favorites';
    // }
    toggleFavoriteBtn.textContent = currentQuote.isFavorite
        ? 'Remove'
        : 'Add-to-Favorites'

    if (currentQuote.isFavorite) {
        const favoriteCard = document.createElement('div');
        favoriteCard.classList.add('favorite-card');
        favoriteCard.innerHTML = `
        <p>${currentQuote.quote}</p>
        <p class="author">${currentQuote.author}</p>`;
        favoritesContainer.appendChild(favoriteCard);
    } else {
        //Remove favorite card if quote is unfavorited
        const favoriteCards = document.querySelectorAll('.favorite-card');
        favoriteCards.forEach((card) => {
            if (card.textContent.includes(currentQuote.quote)) {
                card.remove()
            }
        });
    }

}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);

