const languageSelector = document.getElementById("language-selector");
const greetingDisplay = document.getElementById("greeting-text");
languageSelector.addEventListener("change", translate);

const greetingsArr = [
    {
        language: "English",
        greeting: "Merry Christmas!"
    },
    {
        language: "Russian",
        greeting: "Счастливого Рождества!"
    },
    {
        language: "Latvian",
        greeting: "Priecīgus Ziemassvētkus!"
    },
    {
        language: "Italian",
        greeting: "Buon Natale!"
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!"
    },
    {
        language: "Ukrainian",
        greeting: "Щасливого Різдва!"
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!"
    }
]


function translate(){
    for(let i = 0; i < greetingsArr.length; i++){
        if(greetingsArr[i].language === languageSelector.value){
            greetingDisplay.textContent = greetingsArr[i].greeting;
            }
        }
    } 

let timing = setInterval(() => {
    greetingDisplay.classList.toggle("transition");
}, 2000);
