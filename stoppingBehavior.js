// Do not change
document.getElementById("cat").addEventListener("click", () => {
  alert("meow!");
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

moreInfo = document.getElementById("more-info");

moreInfo.addEventListener("click", (event) => {
  // Prevent the default click event
  event.preventDefault();
  alert("Here's some info");
});

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"

dawg = document.getElementById("dog");

dawg.addEventListener("click", (event) => {
  // Prevent the event from propagating
  event.stopPropagation();
  alert("Bow wow");
});
