import {quoteFavoriteBtn} from "../index.js";


function toggleFavorite(quote, btn, container) {
    quote.isFavorite = !quote.isFavorite;
    toggleFavoriteBtnIcon(quote.isFavorite, btn);

    if (quote.isFavorite) {
        showFavoriteCard(quote, container);
    } else {
        hideFavoriteCard(quote.id);
    }
}

function handleFavorite(isFavorite) {
    showFavoriteBtn();
    toggleFavoriteBtnIcon(isFavorite);
}

function toggleFavoriteBtnIcon(isFavorite) {
    quoteFavoriteBtn.classList.toggle('fa-solid', isFavorite);
    quoteFavoriteBtn.classList.toggle('fa-regular', !isFavorite);
}

function showFavoriteBtn() {
    quoteFavoriteBtn.style.display = 'inline-block';
}

function hideFavoriteBtn() {
    quoteFavoriteBtn.style.display = 'none';
}

function showFavoriteCard(quote, container) {
    const { id, text, author } = quote;
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.dataset.quoteId = id;
    const favoriteCardId = quote.id;
    console.log(favoriteCardId);
    favoriteCard.innerHTML = `
    <div class="favorite-card-content">
       <p>${text}</p>
       <p class="author">${author}</p>
    </div>
    <button id="removeBtn" class="btn btn-danger">Remove</button>
    `;
    container.appendChild(favoriteCard);
    const removeBtn = favoriteCard.querySelector('.btn-danger');
    removeBtn.addEventListener('click', () => {
        quote.isFavorite = !quote.isFavorite;
        const currentQuote = document.querySelector('[data-current-quote-id]');
        const currentQuoteId = currentQuote.dataset.currentQuoteId
        console.log(currentQuote);
        hideFavoriteCard(id)
        if(id === currentQuoteId) {
            toggleFavoriteBtnIcon(quote.isFavorite)
        }
        
        console.log('Remove button clicked ID:', id);
    });
}




function hideFavoriteCard(id) {
    const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
    if (card) {
        card.remove();
    }
}

export { handleFavorite, toggleFavorite, hideFavoriteBtn };
