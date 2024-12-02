function fretHappensLink() {
    // window.location.href = "https://ben-olsen-haynie.github.io/Info-Pages/InfoPages.html";
}

function artistProfileLink() {
    window.location.href = "https://ben-olsen-haynie.github.io/Artist-Profile/ArtistProfile.html";
}

function f21WebpageLink() {
    window.location.href = "https://formula21autoglass.com";
}

function familyEventLink() {
    // window.location.href = "";
    alert("Coming Soon!!");
}
function ScribbleWriteLink() {
    // window.location.href = "https://projects.benhaynie.com/Frameworks/ToDoList/Bulma/index.html";
}
function bulmaEcommerceSiteLink() {
    window.location.href = "https://projects.benhaynie.com/Frameworks/Ecommerce%20Site/Bulma/index.php";
}

function projectsLink() {
    window.location.href = "https://projects.benhaynie.com/";
}

const AMText = `
    Hi, I'm Ben and I program websites for fun.
    Here is my focus, my passion and what I can do for you.
    `
const typingSpeed = 40;

let index = 0;

function typeText() {
    if (index < AMText.length) {
        document.querySelector('.about-me').textContent += AMText.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}
typeText();