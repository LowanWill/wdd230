function updatePageVisitsCounter() {
    const msToDays = 84600000;
    let lastVisit = window.localStorage.getItem("numDiscoverPage");
    const visitsDisplay = document.querySelector("#visitsDates");

    //Calculate the time difference between visits
    var currentTime = new Date();
    var previousVisit = new Date(lastVisit);
    var timeDifference = currentTime.getTime() - previousVisit.getTime();
    var daysDifference = timeDifference / msToDays;

    //Display message based on time difference
    if (lastVisit != null) {
        if (daysDifference > 0 && daysDifference < 1) {
            visitsDisplay.textContent = `Back so soon! Awesome!`;
        } else if (Math.floor(daysDifference) === 1) {

        } else {
            visitsDisplay.textContent = `You last visited ${Math.floor(daysDifference)} days ago.`;
        }
    } else {
        visitsDisplay.textContent = `Let us know if you have any questions.`;
    }
    // store the new visit count total into localStorage
    localStorage.setItem("numDiscoverPage", new Date());

}

//Call the function to update the page visits counter
updatePageVisitsCounter();

//Total visits
const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("visits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = 'This is your first visit.';

}

numVisits++;
localStorage.setItem("visits-ls", numVisits);