const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')


let apiQuotes = [];

//Show New Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes.quotes[Math.floor(Math.random() * apiQuotes.quotes.length)]
    authorText.textContent = quote.author;
    // Check Quote length to determine styling
    if (quote.quote.length > 80) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.quote;
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://dummyjson.com/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On Load
getQuotes();