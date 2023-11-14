// When a user clicks the + element, the count should increase by 1 on screen.
document.addEventListener("DOMContentLoaded", function () {
  const plusElement = document.querySelector(".plus");
  const minusElement = document.querySelector(".minus");
  let counter = 0;

  plusElement.addEventListener("click", () => {
    counter++;
    document.querySelector(".count").innerHTML = counter;
  });

  // When a user clicks the – element, the count should decrease by 1 on screen.
  minusElement.addEventListener("click", () => {
    counter--;
    document.querySelector(".count").innerHTML = counter;
  });
});
