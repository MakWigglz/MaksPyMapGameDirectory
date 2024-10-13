// game.js

// Function to start the adventure
function startAdventure() {
    // Game logic goes here
    console.log("Starting the adventure...");

    // You can implement the game logic here, such as:
    // - Displaying the map
    // - Handling user input for moving the map
    // - Checking if the treasure is found
    // - Displaying the result of the adventure

    // For example, you can use the HTML5 Canvas API to display the map
    var canvas = document.getElementById("map");
    var ctx = canvas.getContext("2d");

    // Draw the map
    ctx.fillStyle = "#f2f2f2";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add event listeners for arrow key input
    document.addEventListener("keydown", function(event) {
        switch (event.key) {
            case "ArrowUp":
                // Move the map up
                moveMap(0, -10);
                break;
            case "ArrowDown":
                // Move the map down
                moveMap(0, 10);
                break;
            case "ArrowLeft":
                // Move the map left
                moveMap(-10, 0);
                break;
            case "ArrowRight":
                // Move the map right
                moveMap(10, 0);
                break;
        }
    });

    // Function to move the map
    function moveMap(x, y) {
        // Update the map position
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(x, y, canvas.width, canvas.height);

        // Check if the treasure is found
        if (isTreasureFound(x, y)) {
            // Display the result of the adventure
            alert("Congratulations! You found the treasure!");
        }
    }

    // Function to check if the treasure is found
    function isTreasureFound(x, y) {
        // Check if the map position is at the corner of the canvas
        if ((x === 0 && y === 0) || (x === 0 && y === canvas.height - canvas.height) || (x === canvas.width - canvas.width && y === 0) || (x === canvas.width - canvas.width && y === canvas.height - canvas.height)) {
            return true;
        }
        return false;
    }
}

// Call the startAdventure function when the HTML document is loaded
document.addEventListener("DOMContentLoaded", function() {
    startAdventure();
});