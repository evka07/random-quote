import { currentQuote } from "./index.js";

const toggleBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');


hideBtn(toggleBtn)

function toggleFavorite() {
    try {
        currentQuote.isFavorite = !currentQuote.isFavorite;
        console.log(currentQuote);
        toggleFavoriteIcon(currentQuote.isFavorite, toggleBtn)

        if (currentQuote.isFavorite) {
            showFavoriteCard(currentQuote.text, currentQuote.author, favoritesContainer)
        } else {
            hideFavoriteCard(currentQuote.text)
        }
    } catch (err) {
        console.log(err.message, 'currentQuote is undefined');
        alert('First generate random quote');
    }
}

function handleFavorite(isFavorite) {
    showBtn(toggleBtn)
    toggleFavoriteIcon(isFavorite, toggleBtn)
}

function toggleFavoriteIcon(isFavorite, el) {
    el.classList.toggle('fa-solid', isFavorite);
    el.classList.toggle('fa-regular', !isFavorite);
}

function showBtn (btn) {
    btn.style.display = 'inline-block';
}

function hideBtn (btn) {
    btn.style.display = 'none';
}



function showFavoriteCard(text, author, container) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
        <p>${text}</p>
        <p class="author">${author}</p>`;
    container.appendChild(favoriteCard);
}

function hideFavoriteCard(text) {
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach((card) => {
        if (card.textContent.includes(text)) {
            card.remove();
        }
    });
}

toggleBtn.addEventListener('click', toggleFavorite);



export { handleFavorite };