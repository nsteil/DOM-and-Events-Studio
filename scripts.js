// Write your JavaScript code here.
// Remember to pay attention to page loading!
function execute () {
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    const flightButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const shuttleIcon = document.getElementById("rocket");

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
        shuttleIcon.style.position = "initial"
    });

    abortButton.addEventListener("click", function () {
        let confirmation = window.confirm("Confirm that you want to abort the mission.");
        if (confirmation) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "";
            spaceShuttleHeight.innerHTML = 0;
            shuttleIcon.style.position = "initial"
        }
    });

    leftButton.addEventListener("click", function() {
        shuttleIcon.style.position = "relative"
        if (shuttleIcon.style.right !== "290px") {
        shuttleIcon.style.right = Number(shuttleIcon.style.right.slice(0,-2)) + 10 + "px"
        }
    });

    rightButton.addEventListener("click", function() {
        shuttleIcon.style.position = "relative"
        if (shuttleIcon.style.right !== "-290px") {
        shuttleIcon.style.right = Number(shuttleIcon.style.right.slice(0,-2)) - 10 + "px"
        }
    });

    upButton.addEventListener("click", function() {
        shuttleIcon.style.position = "relative"
        if (shuttleIcon.style.top !== "0px") {
        shuttleIcon.style.top = Number(shuttleIcon.style.top.slice(0,-2)) - 10 + "px"
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        }
    });

    downButton.addEventListener("click", function() {
        shuttleIcon.style.position = "relative"
        if (shuttleIcon.style.top !== "250px") {
        shuttleIcon.style.top = Number(shuttleIcon.style.top.slice(0,-2)) + 10 + "px"
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000
        }
    });
}

window.addEventListener("load", execute)