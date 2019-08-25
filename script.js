//hamburger menu
let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
let mainGedeelte = document.querySelector("main");

mainGedeelte.addEventListener("click",verbergMenu);
menuKnop.addEventListener("click",toonMenu);


//dark mode staat in het burgermenu
let darkLink = document.querySelectorAll("nav a")[0];
let lightLink = document.querySelectorAll("nav a")[1];
let mijnBody = document.querySelector("body");

lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);


function verbergMenu() {
	navMenu.classList.add("onzichtbaar");
}

function toonMenu() {
	navMenu.classList.remove("onzichtbaar");
}

function switchToDark() {
	mijnBody.classList.add("dark");
}

function switchToLight() {
	mijnBody.classList.remove("dark");
}
