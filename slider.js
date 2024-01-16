let AllMain = document.querySelectorAll(".Main");
let AllSub = document.querySelectorAll(".sub");

function start(hiddenPannel){
    hiddenPannel.forEach((choice)=> {
        choice.classList.add("hide");
    })
}

start(AllMain);

AllMain[0].classList.remove("hide");
AllSub[0].classList.add("hide");

AllSub.forEach((choice) => {
    choice.addEventListener("click", () => {
        choice.classList.add("hide")
        let heroChoice = choice.getAttribute("id")
        showHero(heroChoice)
    })
})

function showHero(heroChoice){
    AllMain.forEach((choice)=> {
        choice.classList.add("hide");
    })
    AllMain[heroChoice].classList.remove("hide");

    AllSub.forEach((choice)=> {
        choice.classList.remove("hide");
    })
    AllSub[heroChoice].classList.add("hide");
}