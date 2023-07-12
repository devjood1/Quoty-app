// For this workshop we are going to use an API from Rapidapi.com the link will be in the README
// SO LET'S GET STARTED TO INTEGRETE THIS FUN API INTO OUR WEB APP

// In this part of the code I am declaring the variables I am going to be using later in the script!
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const quote = document.getElementById('quote')
const author = document.getElementById('author')
const container = document.getElementById('quoteContainer')
const mytitle = document.getElementById('title')


// First function it requests an api response in other words the quote and author so we can display them on our screen
function fetchQuote() {

    // we used the fetch function to get our desierd API
    fetch("https://quotes15.p.rapidapi.com/quotes/random/",{

        //The Http method we are going to use is: 'GET'
        "method": "GET",

        // In here You are going to "ADD YOUR API KEY NUMBER AND HOST"
        "headers": {

            // ATTENTION DON'T SHARE YOUR API KEY NUMBER, THIS IS DANGEROUS!!
            "X-RapidAPI-Key": 'Enter Your API key here',
            "X-RapidAPI-Host": 'quotes15.p.rapidapi.com'
        }
    })

    .then(response => response.json())
    // the response will do the following:
    .then(response => {

        // print the quote
        console.log(response)
        
        // then display the printed quote and author on our display
        quote.innerHTML = response.content;
        author.innerHTML = '- ' + response.originator.name + ' -';
    })

    // to handel any errors
    .catch(error => {
        console.log(error);
    });
}


// Second function baiscly means that Just on the load of our app do the following:
document.addEventListener('DOMContentLoaded', () => {

    // I want to show the first button and the title at load so hide all the other components!
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    container.style.display = 'none'
});

// Third function hears if the first button was clicked it will do the following:
btn1.addEventListener('click', () => {

    // hide button 1 and the title because we want the other components to appear
    btn1.style.display = 'none';
    mytitle.style.display = 'none'

    // show the quoteContainer and button 2 and button 3
    container.style.display = 'flex'
    btn2.style.display = 'block'
    btn3.style.display = 'flex'

    // Here I used .textcontent to change the text from "Get your Quote" to "Want another?"
    btn2.textContent = "Want another?"

    // At the end we want it to show our quote and author so we called the name of our fetchQuote function
    fetchQuote();
});

// Fourth function is pretty easy it hears if you click the second button it calls another Quote from the fetchQuote function
btn2.addEventListener('click', () => {
    fetchQuote();
});

// Last function is to hear if the third button is clicked then do the following:
btn3.addEventListener('click', () => {

    // hide the second button and the third button and get back the previous first button and title!
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    container.style.display = 'none';

    mytitle.style.display = 'block';
    btn1.style.display = 'block';
});

