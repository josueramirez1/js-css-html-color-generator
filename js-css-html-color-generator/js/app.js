const colorsContainer = document.querySelector(".colors-container");
const spawnButton = document.querySelector("#spawn-button");

let colorBlocks = ["", "", "", ""];

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}

function spawn() {
  // clear the html elements
  colorsContainer.innerHTML = "";
  // get random number from other function
  const commonColor = getRandomNumber();
  // loop through each item in the array and add the rgb string
  colorBlocks.forEach((_, i) => {
    colorBlocks[i] =
      "rgb(" +
      commonColor +
      "," +
      getRandomNumber() +
      "," +
      getRandomNumber() +
      ")";
  });
  // loop through each item in the array to display it's
  // background color
  colorBlocks.forEach((colorBlock) => {
    const divElement = document.createElement("div");
    divElement.style.backgroundColor = colorBlock;
    divElement.textContent = colorBlock;
    colorsContainer.append(divElement);
  });
}
spawn();
spawnButton.addEventListener("click", spawn);
document.addEventListener("keydown", spawn);
