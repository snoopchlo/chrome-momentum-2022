const quotes = [
    {
        quote: "It always seems impossible until it's done.",
        author: "- Nelson Mandela",
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "- Confucius",
    },
    {
        quote: "What you do today can improve all your tomorrows.",
        author: "- Ralph Marston",
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "- Les Brown",
    },
    {
        quote: "The more things you do, the more you can do.",
        author: "- Lucille Ball",
    },
    {
        quote: "You don’t need a mirror to look good. You’re beautiful on the inside.",
        author: "- Finn the Human",
    },
    {
        quote: " don’t need to feel like I’m waiting to be noticed. I know who I am, and I’ll know what I want if and when it ever comes along.",
        author: "- Fionna",
    },
    {
        quote: "Everything small is just a smaller version of something big.",
        author: "- Finn the Human",
    },
    {
        quote: "Suckin’ at something is the first step to being sorta good at something.",
        author: "- Finn the Human",
    },
    {
        quote: "You’re getting hung up on imaginary problems. You got to focus on what’s real.",
        author: "- Jake the Dog",
    },
];

const quote = document.querySelector(".quotes-container__quote");
const author = document.querySelector(".quotes-container__author");

const randomNumber = Math.floor(Math.random() * quotes.length);
const todayquote = quotes[randomNumber];

quote.innerText = todayquote.quote;
author.innerText = todayquote.author;