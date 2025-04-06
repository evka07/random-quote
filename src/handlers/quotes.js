import {handleFavorite} from "./favorites.js";
import {generateRandomInt} from "../utils.js";
import quotes from "../data/quotes.js";


let currentQuote = null;

function handleQuote(){
    const randomQuote = chooseRandomQuote();
    currentQuote = randomQuote
    displayQuote(randomQuote);

}

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

export { displayQuote, chooseRandomQuote, handleQuote, currentQuote }