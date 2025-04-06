import quotes from "./quotes.js";
import switchTheme from "./theme.js";
import { handleFavorite } from "./favoritesHandler.js";
import { generateRandomInt } from "./utils.js";


const generateBtn = document.getElementById('generate-btn');

const switchBackground = document.querySelector('.form-check-input');


let currentQuote = null;

function displayQuote(quote) {
    const { text, author, isFavorite } = quote;
    const quoteElement = document.getElementById('quote');
    const quoteAuthorElement = document.getElementById('quote-author');
    quoteElement.textContent = text;
    quoteAuthorElement.textContent = author;
    handleFavorite(isFavorite)
}


function chooseRandomQuote() {
    const randomIndex = generateRandomInt(quotes.length);
    return quotes[randomIndex];
    
}

chooseRandomQuote()


function generateAndDisplayRandomQuote(){
    const randomQuote = chooseRandomQuote();
    currentQuote = randomQuote
    displayQuote(randomQuote);
    
}

    generateBtn.addEventListener('click', generateAndDisplayRandomQuote);
    switchBackground.addEventListener('click', switchTheme);
    
    
    export {currentQuote}
    