// Get references to elements
var pageBg = document.querySelector("html");
var redSlider = document.getElementById("red");
var greenSlider = document.getElementById("green");
var blueSlider = document.getElementById("blue");
var rgbText = document.getElementById("rgb-value");

// Initialize RGB values
var rgb = [0, 0, 0];

// Add event listeners to sliders
redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

/**
 * Function to update RGB values and background color
 */
function updateColor() {
    // Get slider values
    rgb[0] = redSlider.value;
    rgb[1] = greenSlider.value;
    rgb[2] = blueSlider.value;

    // Construct the RGB color string
    var newColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

    // Apply new background color
    pageBg.style.backgroundColor = newColor;

    // Update RGB display text
    rgbText.textContent = `Current RGB: ${newColor}`;
}
