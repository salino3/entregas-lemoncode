let choosingColor = false;

document.getElementById("mydiv2").style.display = "none";

function changingColor() {
  choosingColor = !choosingColor;
  console.log(choosingColor);
  if (choosingColor) {
    document.getElementById("mydiv1").style.display = "none";
    document.getElementById("mydiv2").style.display = "";
  } else {
    document.getElementById("mydiv1").style.display = "";
    document.getElementById("mydiv2").style.display = "none";
  }
};

id = "change-color-button";

const changeColorButton = document.getElementById("change-color-button");

changeColorButton.addEventListener("click", function () {
  changingColor();
});



