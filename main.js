"use strict"
let input = document.getElementById("input")
let button = document.getElementsByClassName("subscribe")[0]
let textPlace = document.getElementsByClassName("input-text")[0]
let information = ""

input.addEventListener("change", (event)=> {
    information = event.target.value
})

button.addEventListener("click", ()=> {
    checker(information);
})

input.addEventListener("keydown", (event)=> {
    console.log(event.key)
    information = event.target.value
    if(event.key== "Enter"){
        checker(information);
    }
})



function checker (info) {
    let email = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    if(!email.test(info)) {
        textPlace.innerHTML = "check your email please";
    }else{
        textPlace.innerHTML = ""
    }
}