import {handleQuote} from "./handlers/favorites.js";
import {hideFavoriteBtn, toggleFavorite} from "./handlers/quote.js";
import quotes from "./data/quotes.js";
import switchTheme from "./appTheme/theme.js";
import {localStorageGetItem, localStorageSetItem} from "./utils/localStorage.js";


const switchBackground = document.querySelector('.form-check-input');
switchBackground.addEventListener('click', switchTheme);

let currentQuote = null;

function setCurrentQuote(quote) {
    localStorageSetItem(quote.id, currentQuote);
    currentQuote = quote;
}

const favoritesContainer = document.getElementById('favorites-container');
const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
hideFavoriteBtn(quoteFavoriteBtn);
quoteFavoriteBtn.addEventListener('click', () =>
    toggleFavorite(currentQuote, quoteFavoriteBtn, favoritesContainer)
);

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
    handleQuote(quotes, setCurrentQuote)
);

export { quoteFavoriteBtn };
