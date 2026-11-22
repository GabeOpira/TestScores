"use strict";

// convert the user's entry, like "89, 98, 73", into an array of numbers
function getScores(entry) {
    const scores = [];
    for (let item of entry.split(",")) {
        scores.push(parseFloat(item));
    }
    return scores;
}

// add up the scores and divide by how many there are
function getAverage(scores) {
    let total = 0;
    for (let score of scores) {
        total += score;
    }
    return total / scores.length;
}

// build and display the results
function displayResults(scores) {
    const low = Math.min(...scores);    // spread passes each score separately
    const high = Math.max(...scores);
    const average = getAverage(scores).toFixed(1);

    alert("Scores: " + scores.join(", ") + "\n" +
          "Low score = " + low + "\n" +
          "High score = " + high + "\n" +
          "Average score = " + average);
}

// get the scores from the user
const entry = prompt("Enter test scores separated by commas.");

if (entry === null || entry.trim() === "") {
    alert("No scores were entered.");
} else {
    displayResults(getScores(entry));
}