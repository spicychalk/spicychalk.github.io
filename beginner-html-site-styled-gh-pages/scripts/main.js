const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  if (myImage.src.includes("firefox-icon.png")) {
    myImage.src = "images/HW2CH4plot1.png";
  } else {
    myImage.src = "images/firefox-icon.png";
  }
});
console.log("mySrc:", myImage.getAttribute("src"));
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});


