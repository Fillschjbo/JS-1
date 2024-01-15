//addEventListener
//onclick

const body = document.querySelector("body")

const mode = document.querySelector(".modeButton")
console.log(body)
console.log(mode)


mode.addEventListener("click", toggleMode)

let isDarkMode = false;
function init (){
  const isDarkMode = window.localStorage.getItem("mode");
    console.log(isDarkMode);
    if(isDarkMode){
        body.style.backgroundColor = "#ebebeb"
    } else {
        body.style.backgroundColor = "#363131"
    }
}

init();

function toggleMode (){
    isDarkMode = !isDarkMode;
    window.localStorage.setItem("mode", isDarkMode)

    if (isDarkMode){
        body.style.backgroundColor = "#363131"
    } else {
        body.style.backgroundColor = "#ebebeb"
    }
};