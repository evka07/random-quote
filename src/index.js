import switchTheme from "./appTheme/theme.js";
import {handleQuote} from "./handlers/quote.js";
import { toggleFavorite } from './handlers/favorites.js';
import quotes from "./data/quotes.js";

const switchBackground = document.querySelector('.form-check-input');
switchBackground.addEventListener('click', switchTheme);


let currentQuote = null;

function setCurrentQuote(quote) {
    currentQuote = quote;
}

const favoritesContainer = document.getElementById('favorites-container');
const favoriteBtn = document.getElementById('favorite-btn');

favoriteBtn.addEventListener('click', () =>
    toggleFavorite(currentQuote, favoriteBtn, favoritesContainer)
);

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
    handleQuote(quotes, setCurrentQuote)
);

export { favoriteBtn };
