function switchTheme (){
    const body = document.querySelector('body');
    let darkMode = body.style.backgroundColor

    // Меняем цвет фона в зависимости от состояния
    if (darkMode) {
        document.body.style.backgroundColor = '#333'; // Темный фон
        document.body.style.color = '#fff'; // Белый текст
    } else {
        document.body.style.backgroundColor = '#fff'; // Светлый фон
        document.body.style.color = '#000'; // Черный текст
    }
}



export default switchTheme