import {displayQuote, handleQuote, findQuoteById} from "./handlers/favorites.js";
import {hideFavoriteBtn, removeFavoriteQuote, showFavoriteCard, toggleFavorite} from "./handlers/quote.js";
import quotes from "./data/quotes.js";
import switchTheme from "./appTheme/theme.js";
import {localStorageGetItem, localStorageRemoveItem, localStorageSetItem} from "./utils/localStorage.js";


const switchBackground = document.querySelector('.form-check-input');
switchBackground.addEventListener('click', switchTheme);

let currentQuote = null;
const favoriteQuotes = []

const CURRENT_QUOTE_KEY = 'currentQuote';
const FAVORITE_QUOTES_KEY = 'favoriteQuotes';

function setCurrentQuote(quote, shouldToggleIsFavorite = false) {
    if (shouldToggleIsFavorite) {
        quote.isFavorite = !quote.isFavorite;
        if (quote.isFavorite) {
            favoriteQuotes.push({ ...quote });
        } else {
            const index = favoriteQuotes.findIndex(
                (favoriteQuote) => favoriteQuote.id === quote.id
            );
            if (index !== -1) {
                favoriteQuotes.splice(index, 1);
            }
        }
        localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
    }
    currentQuote = quote;
    localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);
}
const favoritesContainer = document.getElementById('favorites-container');
const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
hideFavoriteBtn(quoteFavoriteBtn);
quoteFavoriteBtn.addEventListener('click', () =>
    toggleFavorite(currentQuote, setCurrentQuote, quoteFavoriteBtn, favoritesContainer)
);

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
    handleQuote(quotes, favoriteQuotes, setCurrentQuote)
);

function init() {
    const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);
    if (currentQuoteFromStorage) {
        displayQuote(currentQuoteFromStorage);
        const quote = findQuoteById(quotes, currentQuoteFromStorage.id);
        quote.isFavorite = currentQuoteFromStorage.isFavorite;
        currentQuote = quote;
    }

    const favoriteQuotesFromStorage = localStorageGetItem(FAVORITE_QUOTES_KEY);
    if (favoriteQuotesFromStorage) {
        favoriteQuotesFromStorage.forEach((quote) => {
            favoriteQuotes.push(quote);
            showFavoriteCard(quote, setCurrentQuote, favoritesContainer);
        });
    }
}

window.addEventListener('load', init);


export { quoteFavoriteBtn };
