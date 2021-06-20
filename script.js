const whakataukiContainer = document.getElementById("whakataukiContainer");
const maoriText = document.getElementById("maoriText");
const englishText = document.getElementById("englishText");
const interpretationText = document.getElementById("interpretationText");
const twitterBtn = document.getElementById("twitter");
const newWhakataukiBtn = document.getElementById("newWhakataukiBtn");

//New Whakatauli function
function getNewWhakatauki() {
  const newWhakatauki =
    whakatauki[Math.floor(Math.random() * whakatauki.length)];
  maoriText.textContent = newWhakatauki.maori;
  englishText.textContent = newWhakatauki.english;
  interpretationText.textContent =
    "Interpretation: " + newWhakatauki.intepretation;
}

// Tweet function
function tweetWhakatauki() {
  const twitterUrl = `https://twitter.com/intent/tweet?text${maoriText.textContent} - ${englishText.textContent} - ${interpretationText.textContent}`;
  window.open(twitterUrl, "_blank");
}

//Event Listerers
newWhakataukiBtn.addEventListener("click", getNewWhakatauki);
twitterBtn.addEventListener("click", tweetWhakatauki);

//onload
getNewWhakatauki();
