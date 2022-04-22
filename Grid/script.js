const cells = document.querySelectorAll(".cell");
const resetButton = document.querySelector("button");

/**
 * Generate random number from array.
 * @param {number} arr - input array.
 * @returns {number} random number representing the random index from array.
 */
const getRandomNumber = (arr) => {
    return Math.floor(Math.random() * arr.length);
};

/**
 * Generate random hex color.
 * @returns {hex color}
 */
const generateRandomColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let result = "";
    for (let i = 0; i < 6; i++) {
        result += hex[getRandomNumber(hex)];
    }
    return result;
};

// EVENT LISTENERS
cells.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
        e.currentTarget.style.backgroundColor = `#${generateRandomColor()}`;
    });
});

resetButton.addEventListener("click", () => {
    cells.forEach((item) => {
        item.removeAttribute("style");
    });
});