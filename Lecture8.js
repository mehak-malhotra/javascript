let modeButton= document.querySelector("#mode")
let currMode= "light";

modeButton.addEventListener("click", () => {
    // console.log("You are trying to change mode.");
    if(currMode === "light"){
        currMode= "dark";
        document.querySelector("body").style.backgroundColor= "black";
    }else{
        currMode= "light";
        document.querySelector("body").style.backgroundColor= "white";
    }
    console.log(currMode);
})