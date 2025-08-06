let homeTeam = document.getElementById("home-team");
let guestTeam = document.getElementById("guest-team");
let homeSum = 0;
let guestSum = 0;

function homeOne() {
    homeSum += 1
    homeTeam.textContent = homeSum;
}

function homeTwo() {
    homeSum += 2
    homeTeam.textContent = homeSum;
}

function homeThree() {
    homeSum += 3
    homeTeam.textContent = homeSum;
}

function guestOne() {
    guestSum += 1
    guestTeam.textContent = guestSum;
}

function guestTwo() {
    guestSum += 2
    guestTeam.textContent = guestSum;
}

function guestThree() {
    guestSum += 3
    guestTeam.textContent = guestSum;
}

function newGame() {
    homeSum = 0
    homeTeam.textContent = homeSum;
    guestSum = 0
    guestTeam.textContent = guestSum;
}