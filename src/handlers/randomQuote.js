
import {generateRandomInt} from "../utils/math.js";
import quotes from "../data/quotes.js";




function getRandomQuote() {
    return { ...quotes[generateRandomInt(quotes.length)] }
    // const randomIndex = generateRandomInt(quotes.length);
    // const randomQuote = {...quotes[randomIndex]};
    // return randomQuote;
}



export { getRandomQuote}