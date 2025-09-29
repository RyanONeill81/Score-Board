
let homeScoreBtnOne = document.getElementById("homescorebtn1")
let homeScoreBtnTwo = document.getElementById("homescorebtn2")
let homeScoreBtnThree = document.getElementById("homescorebtn3")
let homeScoreEl = document.getElementById("homescore")
let homeScore = 0

function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

let guestScoreBtnOne = document.getElementById("guestscorebtn1")
let guestScoreBtnTwo = document.getElementById("guestscorebtn2")
let guestScoreBtnThree = document.getElementById("guestscorebtn3")
let guestScoreEl = document.getElementById("guestscore")
let guestScore = 0

function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
function resetScores() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}