import quotes from "./quotes.js";
import switchTheme from "./theme.js";
import { hideFavoriteCard, showFavoriteCard, toggleFavoriteIcon, showToggleFavoriteBtn, hideToggleFavoriteBtn } from "./favoritesHandler.js";
import { generateRandomInt } from "./utils.js";


const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');
const switchBackground = document.querySelector('.form-check-input');


let currentQuoteIndex;

hideToggleFavoriteBtn(toggleFavoriteBtn)

function displayQuote(quote) {
    const { text, author, isFavorite } = quote;
    const quoteElement = document.getElementById('quote');
    const quoteAuthorElement = document.getElementById('quote-author');
    quoteElement.textContent = text;
    quoteAuthorElement.textContent = author;
    showToggleFavoriteBtn(toggleFavoriteBtn)
    toggleFavoriteIcon(isFavorite, toggleFavoriteBtn)
}


function chooseRandomQuote() {
    const randomIndex = generateRandomInt(quotes.length);
    currentQuoteIndex = randomIndex;
    return quotes[randomIndex];
    
}

chooseRandomQuote()



function generateAndDisplayRandomQuote(){
    const randomQuote = chooseRandomQuote();
    displayQuote(randomQuote);
    
}


function toggleFavorite() {
    console.log(currentQuoteIndex);
    try {
        const currentQuote = quotes[currentQuoteIndex];
        currentQuote.isFavorite = !currentQuote.isFavorite;
        toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn)

        if (currentQuote.isFavorite) {
            showFavoriteCard(currentQuote.text, currentQuote.author, favoritesContainer)
        } else {
            hideFavoriteCard(currentQuote.text)
        }
    } catch (err) {
        console.log(err.message, 'currentQuoteIndex is undefined');
        alert('First generate random quote');
    }
}



    generateBtn.addEventListener('click', generateAndDisplayRandomQuote);
    toggleFavoriteBtn.addEventListener('click', toggleFavorite);
    switchBackground.addEventListener('click', switchTheme);
    // generateAndDisplayRandomQuote()
    