// Your code goes
//function to change the text content
document.addEventListener("DOMContentLoaded", function () {
  const p = document.querySelector("p");
  if (p) {
    p.textContent = "This is really cool!";
  }
});
// initial state befor the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const p = document.querySelector("p");
  if (p) {
    const newP = document.createElement("p");
    newP.textContent =
      "JavaScript is color.It lets me asss text to my page programme";
    document.body.appendChild(newP);
  }
});
