console.log("Welcome Mubshar!");
const text = [
    "Web Developer",
    "HTML Learner",
    "CSS Learner",
    "JavaScript Learner"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    if (!isDeleting) {
        currentText = text[index].substring(0, charIndex++);
    } else {
        currentText = text[index].substring(0, charIndex--);
    }

    typing.textContent = currentText;

    let speed = 120;

    if (!isDeleting && charIndex === text[index].length + 1) {
        speed = 1200;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % text.length;
    }

    setTimeout(type, speed);
}

type();
const darkBtn = document.getElementById("dark-btn");

darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if(document.documentElement.scrollTop > 200){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

};

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
window.addEventListener("load", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });
});
