//
let grandParent = document
  .querySelector(".grand-parent")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    alert("grand parent clicked");
  });
let parent = document
  .querySelector(".parent")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    alert("parent Clicked");
  });
let child = document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("child Clicked");
});
// Event Delegations
let delegation = document.querySelector(".delegation");

delegation.addEventListener("click", (e) => {
  console.log(e.target.innerText);
});
