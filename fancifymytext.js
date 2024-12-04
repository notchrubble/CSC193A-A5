//test JS with an alert
alert("Hello, world!");

function makeTextBigger() {
  const textArea = document.getElementById("textInput");
  textArea.style.fontSize = "24pt";
}

//event handler for our radio buttons
function changeTextStyle() {
  const textArea = document.getElementById("textInput");
  if (document.getElementById("fancyShmancy").checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
    alert("Fancified the text!");
  } else if (document.getElementById("boringBetty").checked) {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
    alert("Unfancified the text!");
  }
}

//concatenates -MOO to the end of the text
function addMooEffect() {
  const textArea = document.getElementById("textInput");
  let text = textArea.value.toUpperCase();
  const sentences = text.split(".");
  text = sentences.map((sentence) => sentence.trim() + "-MOO").join(". ");
  textArea.value = text;
}

//event listeners
document.getElementById("biggerButton").onclick = makeTextBigger;
document.getElementById("fancyShmancy").onchange = changeTextStyle;
document.getElementById("boringBetty").onchange = changeTextStyle;
document.getElementById("mooButton").onclick = addMooEffect;
