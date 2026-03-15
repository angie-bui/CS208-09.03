document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(
    'input[type="submit"][value="Submit"]',
  );
  if (!submitButton) {
    console.error("Submit button not found.");
    return;
  }
  submitButton.addEventListener("click", myLineUp);
});

function myLineUp(event) {
    event.preventDefault();

    const status = document.querySelector('input[name="status"]:checked').value;
    const gameDate = document.querySelector('select[name="gameDate"]').value;
    const selectedPlayers = document.querySelectorAll('input[type="checkbox"]:checked');

    const players = [];
    selectedPlayers.forEach(function(player) {
        players.push(player.value);
    });

    console.log("Status:", status);
    console.log("Date:", gameDate);
    console.log("Players:", players);

    const output = "Status: " + status + ", Date: " + gameDate + ", Players: " + players.join(", ");

    let result = document.getElementById("lineup-output");
    if (!result) {
        result = document.createElement("p");
        result.id = "lineup-output";
        document.body.appendChild(result);
    }

    result.textContent = output;
}