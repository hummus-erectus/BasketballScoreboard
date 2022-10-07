let scoreHome = 0;
let scoreGuest = 0;

sbHome = document.getElementById("scoreboardHome");
sbGuest = document.getElementById("scoreboardGuest");

sbHome.textContent = scoreHome;
sbGuest.textContent = scoreGuest;

function addHome(points) {
    scoreHome = scoreHome + points;
    sbHome.textContent = scoreHome;
    console.log(scoreHome);

}

function addGuest(points) {
    scoreGuest = scoreGuest + points;
    sbGuest.textContent = scoreGuest;
    console.log(scoreGuest);
}