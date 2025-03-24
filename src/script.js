import quotes from "./quotes.js";

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const quoteAuthorElement = document.getElementById('quote-author');



function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(randomIndex)
    const randomQuote = quotes[randomIndex];
    // const {quote, author: quoteAuthor} = quotes[randomIndex];
    console.log(randomQuote)
    // const quote = '<em>"' + randomQuote.quote + '"</em>' + '<br>' + randomQuote.author;
    // const quote = `<em>"${randomQuote.quote}"</em><br>${randomQuote.author}<br>`;
    // const {quote, author: quoteAuthor} = randomQuote;
    const {quote, author} = randomQuote;
    // const quote = randomQuote.quote;
    // const quoteAuthor = randomQuote.author;
    console.log(author);
    quoteElement.textContent = quote
    quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener('click', generateRandomQuote);
