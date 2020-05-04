/**
 * @ Author: Rishit Patel
 * @ Create Time: May 03, 2020 15:00:17
 * @ Description: pitzeria
 */

// This changes everything
//"use strict";

const footer = document.getElementById("footer");
const pTitle = document.getElementById("pizzaTitle");
const pDesc = document.getElementById("pizzaDesc");
const pPrice = document.getElementById("pizzaPrice");
const pImg = document.getElementById("pizzaImg");


var choice = [].slice.call(footer.querySelectorAll(".fBox"), 0); // getting all childs inside #footer, and adding them to array
var index;
var titles = ["American Pepperoni", "Classic Italiano", "Veggie Supreme", "Royal Canadian", "Smokey Bacon", "The Loaded"];
var descs = ["The traditional American double pepperoni loaded with pizza mozzarella, homemade sauce and of course lots of love!",
    "The classic Italian margherita with traditional tomato sauce, mozzarella and Italian herbs.",
    "Pizza loaded with tomato, onion, corn, olives and lots of cheese. Who doesn't love veggies and cheese?",
    "We Canadians love meat eh! Royal Canadian pizza is loaded with Pepperoni, bacon crumble and 100% Canadian mozza cheese.",
    "Bacon is ❤️! This smokey and delicious is has loads of bacon and cheese.",
    "You know how we load our pizza right? This loaded treat is our speciality. You only get it here at Pitzeria!"
];
var prices = [10.99, 13.99, 12.99, 16.99, 14.99, 15.99];
var imgs = ["./img/american-pepperoni-pizza.jpg",
    "./img/italiano-pizza.jpg",
    "./img/veggie-lover-pizza.jpg",
    "./img/canadian-pizza.jpg",
    "./img/bacon-pizza.jpg",
    "./img/loaded-pizza.jpg"
];

// reset the transition by...
footer.addEventListener("click", function (e) {

    index = choice.indexOf(e.target);
    e.preventDefault;

    // changing text
    pTitle.innerHTML = titles[index];
    pDesc.innerHTML = descs[index];
    pPrice.innerHTML = prices[index];
    pImg.src = imgs[index];
    // removing the class
    pTitle.classList.remove("animateLeft");
    pDesc.classList.remove("animateLeft");
    pImg.classList.remove("animateRight");

    void pTitle.offsetWidth;
    void pDesc.offsetWidth;
    // and re-adding the class
    pTitle.classList.add("animateLeft");
    pDesc.classList.add("animateLeft");
    pImg.classList.add("animateRight");
}, false);

function toggleItem(elem) {
    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function (e) {
            var current = this;
            for (var i = 0; i < elem.length; i++) {
                if (current != elem[i]) {
                    elem[i].classList.remove('active');
                } else if (current.classList.contains('active') === true) {
                    current.classList.remove('active');
                } else {
                    current.classList.add('active')
                }
            }
            e.preventDefault();
        });
    };
}
toggleItem(document.querySelectorAll('.fBox'));