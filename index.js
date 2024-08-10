let pass = document.querySelector("#psw");
let confirmPass = document.querySelector("#psw2");
let divElement = document.querySelector(".match");

function checkPassword(pass1, pass2) {

    if (pass.value !== confirmPass.value) {
        divElement.style.display = "block";
    } else {
        divElement.style.display = "none";
    }
}
pass.addEventListener("input", checkPassword);
confirmPass.addEventListener("input", checkPassword);


let btn = document.querySelector(".button");

btn.addEventListener("click", (event) => {
    if (pass.value !== confirmPass.value) {
        event.preventDefault();
        checkPassword();
    }
});