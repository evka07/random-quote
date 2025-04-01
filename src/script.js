import quotes from "./quotes.js";
import switchTheme from "./theme.js";

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const quoteAuthorElement = document.getElementById('quote-author');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');
const switchBackground = document.querySelector('.form-check-input');



let currentQuoteIndex;

function toggleFavoriteIcon(isFavorite) {
    toggleFavoriteBtn.classList.toggle('fa-solid', isFavorite);
    toggleFavoriteBtn.classList.toggle('fa-regular', !isFavorite);
}

function generateRandomQuote() {
    currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    console.log(currentQuoteIndex, quotes)
    const randomQuote = quotes[currentQuoteIndex];
    const {quote, author} = randomQuote;
    quoteElement.textContent = quote;
    quoteAuthorElement.textContent = author;
    toggleFavoriteBtn.style.display = 'inline-block';
    toggleFavoriteIcon(randomQuote.isFavorite)
}


function toggleFavorite() {
    console.log(currentQuoteIndex);
    try {
        const currentQuote = quotes[currentQuoteIndex];
        currentQuote.isFavorite = !currentQuote.isFavorite;
        console.log(quotes)
        toggleFavoriteIcon(currentQuote.isFavorite)
    

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
    } catch (err) {
        console.log(err.message, 'currentQuoteIndex is undefined');
        alert('First generate random quote');
    }
    

}



generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);
switchBackground.addEventListener('click', switchTheme)
// generateRandomQuote();