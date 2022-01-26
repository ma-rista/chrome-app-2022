// //* objcet
// const player = {
//     name: "nico",
//     points: 10,
//     fat: true,
// };
// console.log(player);
// console.log(player.name);

// //* function
// function sayHello(nameOfPerson, age) {
//     console.log("nameOfPerson");
// }

// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// //* function2
// function plus(a, b) {
//     console.log(a, b);
// }

// plus(8, 60);



// function plus(a, b) {
//     console.log(a + b);
// }
// plus(5, 5);

// const calculator = {
//     plus: function (a, b) {
//         alert(a + b);
//     },
//     minus: function (a, b) {
//         alert(a - b);
//     },
//     times: function (a, b) {
//         alert(a * b);
//     },
//     divide: function (a, b) {
//         alert(a / b);
//     },
//     power: function (a, b) {
//         alert(a ** b);
//     },
// };

// calculator.plus(2, 3);
// calculator.times(2, 3);
// calculator.minus(2, 3);
// calculator.divide(2, 3);
// calculator.power(2, 3);

//* return
// const age = 96;
// function calculaterKrrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const krAge = calculaterKrrAge(age);

// console.log(krAge);

//* if, else
// const age = parseInt(prompt("How old are u?"));

// if (isNaN(age) || age < 0) {
//     alert("Please write a real positive number");
// } else if (age < 18) {
//     alert("You r too young.");
// } else if (age >= 18 && age <= 50) {
//     alert("You can drink");
// } else if (age > 50 && age <= 80) {
//     alert("You should exercise");
// } else if (age > 80) {
//     alert("You can do whatever you want");
// }

//* JS에서 html elements 가져오기
// const title = document.getElementById("title");

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

//* Elements searching

// const title = document.querySelector("#hello");
// const title = document.getElementById("hello");

// console.log(title);

//* Events
// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick() {
//     h1.style.color = "blue";
// }
// function handleMouseEnter() {
//     h1.innerText = "Mouse is here!";
// }
// function handleMouseLeave() {
//     h1.innerText = "Mouse is gone!"
// }
// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy() {
//     alert("copier!");
// }
// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }
// function handleWin() {
//     alert("ALL GOOOD");
// }

// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWin);

//* CSS in JavaScript
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if (currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if (h1.className === "active") {
//         h1.className = "";
//     } else {
//         h1.className = "active";
//     }
// }

// h1.addEventListener("click", handleTitleClick)

//* Input Values
