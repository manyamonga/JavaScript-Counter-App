const num = document.querySelector("#number");
const add = document.querySelector("#addBtn");
const subtract = document.querySelector("#subtractBtn");
const reset = document.querySelector("#resetBtn");
 
function getRandomNumber() {
    return Math.ceil(Math.random() * 100) + 1;
}
let count = getRandomNumber();
num.textContent = count;

add.addEventListener("click" , function() {
    count++;
    num.textContent = count;
});

subtract.addEventListener("click" , function() {
    count--;
    num.textContent = count;
});

reset.addEventListener("click" , function() {
    count = 0;
    num.textContent = count;
});

if (count > 50) {
    num.style.color = "green";
} else if (count > 0) {
    num.style.color = "orange";
} else {
    num.style.color = "red";
}
