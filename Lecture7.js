// practice 1

let btn= document.createElement("button");
btn.innerText= "click me";

btn.style.color= "white";
btn.style.backgroundColor= "red";

document.querySelector("body").before(btn);

// practice 2
let ele= document.querySelector("p");
console.log(ele.getAttribute("class"));
ele.setAttribute("class", "newClass");
console.log(ele.getAttribute("class"));