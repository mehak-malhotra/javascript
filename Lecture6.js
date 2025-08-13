// practice 1

// let tag= document.querySelector("h2");
// console.log(tag);

// tag.innerText= tag.innerText + " from apna college students";

// practice 2
let divs= document.querySelectorAll(".box");
console.log(divs);

// divs[0].innerText = "Div 1";
// divs[1].innerText = "Div 2";
// divs[2].innerText = "Div 3";

let index= 1;
for(div of divs){
    div.innerText= `New text ${index++}`;
}