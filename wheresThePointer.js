// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const tBodyElement = document.getElementsByTagName("tbody")[0];

tBodyElement.addEventListener("click", (e) => {
  let tr = e.target;
  tr.innerText = `X:${e.clientX} Y:${e.clientY}`;
});
