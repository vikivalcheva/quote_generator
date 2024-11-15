const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    document.querySelector('.quote').textContent = `"${randomQuote.text}"`;
    document.querySelector('.author').textContent = `— ${randomQuote.author}`;
}
