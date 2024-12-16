"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.
const currentYear = 2025;
const resolution = "Learn coding and Javascript";
let willMeetResolution = "Yes";

function updateYear() {
    // write the logic
    yearElement.innerHTML = currentYear;
}

function updateResolution() {
    // Update this function 
    resolutionElement.innerHTML = resolution;
}

function updateMeet() {
    willMeetResolutionElement.innerHTML = willMeetResolution;
}

function render() {
    // Finish writing this function
    updateYear();
    updateResolution();
    updateMeet();
}

submissionBtn.addEventListener("click", function () {
    // Finish writing this function
    render();
})
