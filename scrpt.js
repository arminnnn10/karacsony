// Szavazatok számának nyilvántartása
var votes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Szavazat növelése
function increaseVote(index) {
    votes[index]++;
    document.getElementById("vote-" + index).textContent = "Szavazatok: " + votes[index];
}

