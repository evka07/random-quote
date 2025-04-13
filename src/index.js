import {handleQuote} from "./handlers/favorites.js";
import {hideFavoriteBtn, toggleFavorite} from "./handlers/quote.js";
import quotes from "./data/quotes.js";
import switchTheme from "./appTheme/theme.js";


const switchBackground = document.querySelector('.form-check-input');
switchBackground.addEventListener('click', switchTheme);

let currentQuote = null;

function setCurrentQuote(quote) {
    currentQuote = quote;
}

const favoritesContainer = document.getElementById('favorites-container');
const favoriteBtn = document.getElementById('favorite-btn');
hideFavoriteBtn(favoriteBtn);
favoriteBtn.addEventListener('click', () =>
    toggleFavorite(currentQuote, favoriteBtn, favoritesContainer)
);

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
    handleQuote(quotes, setCurrentQuote)
);

export { favoriteBtn };
