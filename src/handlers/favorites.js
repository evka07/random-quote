import {handleFavorite} from "./quote.js";
import {generateRandomInt} from "../utils/math.js";


function handleQuote(quotes, favoriteQuotes, setCurrentQuote) {
    const randomQuote = choseRandomQuote(quotes);
    // check if id of randomQuote is among ids of the favorite quotes
    if (favoriteQuotes.find((quote) => quote.id === randomQuote.id)) {
        randomQuote.isFavorite = true;
    }

    setCurrentQuote(randomQuote);
    displayQuote(randomQuote);
}

function displayQuote(quote) {
    const { id, text, author, isFavorite } = quote;
    const quoteElement = document.getElementById('quote');
    const quoteTextElement = document.getElementById('quote-text');
    const quoteAuthorElement = document.getElementById('quote-author');
    quoteElement.dataset.currentQuoteId = id;
    console.log(quote.id);
    quoteTextElement.textContent = text;
    quoteAuthorElement.textContent = author;
    handleFavorite(isFavorite);
}

function choseRandomQuote(quotes) {
    const randomIndex = generateRandomInt(quotes.length);
    return quotes[randomIndex];
}
function findQuoteById(quotes, id) {
    return quotes.find((quote) => quote.id === id);
}

export { handleQuote, displayQuote, findQuoteById };
