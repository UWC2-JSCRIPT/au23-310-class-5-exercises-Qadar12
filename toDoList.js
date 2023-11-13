// If an li element is clicked, toggle the class "done" on the <li>

// find and toggle().
const addDone = (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
};

// use here and delete later
let todayList = document.getElementsByClassName("today-list")[0];
todayList.addEventListener("click", addDone);

// If a delete link is clicked, delete the li element / remove from the DOM

// find delete click then removeChild()
const removeItem = (e) => {
  e.preventDefault();
  if (e.target.tagName === "A" && e.target.classList.contains("delete")) {
    let li = e.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  }
};

todayList.addEventListener("click", removeItem);

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function (e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName("input")[0];
  const text = input.value; // input

  let createli = document.createElement("li");

  let createSpan = document.createElement("span");
  createSpan.textContent = text;

  let createATag = document.createElement("a");
  createATag.textContent = "Delete";
  createATag.className = "delete";

  // add to span and a
  createli.appendChild(createSpan);
  createli.appendChild(createATag);

  //add to ul
  todayList.appendChild(createli);

  input.value = "";
};

// get add item clicked - parent to child
let addElm = document.getElementsByClassName("add")[0];
let addItem = addElm.querySelector(".add-item");

addItem.addEventListener("click", addListItem);

/*
what the items in the list will look like 
<li>
          <span>Reading</span>
          <a class="delete">Delete</a>
</li>
*/
