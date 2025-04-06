import { handleQuote } from "./handlers/quotes.js";
import switchTheme from "./appTheme/theme.js";


const generateBtn = document.getElementById('generate-btn');
const switchBackground = document.querySelector('.form-check-input');

generateBtn.addEventListener('click', handleQuote);
switchBackground.addEventListener('click', switchTheme);
