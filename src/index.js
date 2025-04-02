import quotes from "./quotes.js";
import switchTheme from "./theme.js";
import { hideFavoriteCard, showFavoriteCard, toggleFavoriteIcon } from "./favoritesHandler.js";

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const quoteAuthorElement = document.getElementById('quote-author');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');
const switchBackground = document.querySelector('.form-check-input');

let currentQuoteIndex;

function generateRandomQuote() {
    currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    console.log(currentQuoteIndex, quotes)
    const randomQuote = quotes[currentQuoteIndex];
    const {quote, author} = randomQuote;
    quoteElement.textContent = quote;
    quoteAuthorElement.textContent = author;
    toggleFavoriteIcon(randomQuote.isFavorite, toggleFavoriteBtn)
    toggleFavoriteBtn.style.display = 'inline-block';
}


function toggleFavorite() {
    console.log(currentQuoteIndex);
    try {
        const currentQuote = quotes[currentQuoteIndex];
        currentQuote.isFavorite = !currentQuote.isFavorite;
        console.log(quotes)
        toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn)

        if (currentQuote.isFavorite) {
            showFavoriteCard(currentQuote.quote, currentQuote.author, favoritesContainer)
        } else {
            hideFavoriteCard(currentQuote.quote)
        }
    } catch (err) {
        console.log(err.message, 'currentQuoteIndex is undefined');
        alert('First generate random quote');
    }
}



    generateBtn.addEventListener('click', generateRandomQuote);
    toggleFavoriteBtn.addEventListener('click', toggleFavorite);
    switchBackground.addEventListener('click', switchTheme);
// generateRandomQuote()