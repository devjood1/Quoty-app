const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const quote = document.getElementById('quote')
const author = document.getElementById('author')
const container = document.getElementById('quoteContainer')
const mytitle = document.getElementById('title')

// add envent listener for the first thing when we open the page
document.addEventListener('DOMContentLoaded', () => {
    // hide btn2
    btn2.style.display = 'none';
    // hide btn3
    btn3.style.display = 'none';
    // hide quoteContainer
    container.style.display = 'none'
});

// add event listener for button click
btn1.addEventListener('click', () => {
    // hide button
    btn1.style.display = 'none';
    // hide title
    mytitle.style.display = 'none'
    // show container
    container.style.display = 'flex'
    //show btn3
    btn3.style.display = 'flex'
    //show btn2
    btn2.style.display = 'block'
    // change the text "Get your Quote" to "Want another?"
    btn2.textContent = "Want another?"
    // fetch quote
    fetchQuote();
});

// add event listener for second button click
btn2.addEventListener('click', () => {
    // fetch quote
    fetchQuote();
});

// add event listener for the third button click
btn3.addEventListener('click', () => {
    // hide second button
    btn2.style.display = 'none';
    // hide third button
    btn3.style.display = 'none';
    // hide container
    container.style.display = 'none';
    // show title
    mytitle.style.display = 'block';
    // show first button
    btn1.style.display = 'block';
});

// function to request a quote from API
function fetchQuote() {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/",{
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": 'cc36eed77dmshe55e05fa27f88f6p161763jsncedbbd2abd0e',
            "X-RapidAPI-Host": 'quotes15.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
        // display quote and author
        quote.innerHTML = response.content;
        author.innerHTML = '- ' + response.originator.name + ' -';
    })
    .catch(error => {
        console.log(error);
    });
}
