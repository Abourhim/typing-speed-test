const counter = document.querySelector("#count");
const texto = document.querySelector("#texto");
const btn = document.querySelector("#res");
const parag = document.querySelector("#para");

let sec = 00
let min = 00
let start = false;
let leng = parag.innerText.length;

texto.setAttribute("maxlength", leng);
texto.addEventListener("input", () => {
    if (!start) {
        start = true;
        var myTimer = setInterval(() => {
            sec += 1
            if (sec >= 60) {
                sec -= 60
                min += 1
            }
            
            document.querySelector('#sec').innerText = ("00" + sec).slice(-2)
            document.querySelector('#min').innerText = ("00" + min).slice(-2)
        }, 1000);
    }
    if (texto.value.length == leng) {
        if (texto.value == parag.textContent) {
            alert("Congrats You did it!!!")
        }else {
            alert("Sorry Give it Another try!!");
        }  
    }
});

btn.addEventListener("click", (e)=> {
    texto.value = "";
    location.reload();
    //console.log("dsdsd");
});

