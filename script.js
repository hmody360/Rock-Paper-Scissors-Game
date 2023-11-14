const Btns = document.querySelectorAll(".rpsBtn")
const result = document.getElementById("result")
const whatPlayed = document.getElementById("whatPlayed")
const resultText = document.getElementById("resultText")
const resetBtn = document.getElementById("resetBtn")
console.log(Btns);

const rpsArray = ["rock","paper","scissors"]
const computerPlay = (array) => {
    let choice = Math.floor(Math.random() * 3)
    return array[choice]
}
const rpsResult = (P, C) => {
    if (P == C) {
        if(result.innerText == ""){
            result.innerText = 0 
        }
        resultText.style.color = "yellow"
        resultText.innerText = "It's a DRAW!"
    } else if ((P == "rock" && C == "scissors") || (P == "scissors" && C == "paper") || (P == "paper" && C == "rock")) {
        result.innerText++
        resultText.style.color = "green"
        resultText.innerText = "You WIN!"
    } else {
        result.innerText -= 1
        resultText.style.color = "red"
        resultText.innerText = "You Lose!"
    }
}
const reset = () => {
    result.innerText = ""
    whatPlayed.innerText = ""
    resultText.innerText = ""
}

Btns.forEach(btn => {
    btn.onclick = () => {
        let playerPlay = btn.value
        let comPlay = computerPlay(rpsArray)
        console.log(playerPlay, comPlay);
        whatPlayed.innerHTML = `<i class="fa-solid fa-user"></i> : ${playerPlay}  VS  <i class="fa-solid fa-robot"></i> : ${comPlay}`
        rpsResult(playerPlay, comPlay)
    }
})
resetBtn.onclick = () => {
    reset()
}
