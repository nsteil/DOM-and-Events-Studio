// Write your JavaScript code here.
// Remember to pay attention to page loading!
function execute () {
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    const flightButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    //const moveButton = document.getElementsByTagName("button");
    const shuttleIcon = document.getElementsById("rocket");

    flightButton.addEventListener("click", function() {
        let response = window.confirm("Confriem that the shuttle is ready for takeoff.")
        if (response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        }
    });

    landButton.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = "";
        spaceShuttleHeight.innerHTML = 0;
    });

    abortButton.addEventListener("click", function () {
        let confirmation = window.confirm("Confirm that you want to abort the mission.");
        if (confirmation) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "";
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    /*moveButton.addEventListener("click", function() {
        shuttleBackground.style.backgroundColor = "red"
    })*/
}

window.addEventListener("load", execute)