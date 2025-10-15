let inputVal = document.querySelector("#input-box");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list-items");
let deleteItem = document.querySelector(".delete-item");
let delInfo = document.querySelector(".del-msg");

let form = document.querySelector("#formEl").addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputVal.value == "") {
    alert("Enter a task!");
    return;
  }
  let createLi = document.createElement("li");
  createLi.innerHTML = inputVal.value;
  list.appendChild(createLi);
  inputVal.value = "";

  delInfo.style.display = "block";
  // let clearTap = document.createElement("p");
  // clearTap.className = "delete-list";
  // clearTap.innerHTML = "Delete List";
  // console.log(clearTap);

  // list.lastChild.appendChild(clearTap);
});

list.addEventListener("click", (e) => {
  e.target.remove();
});
document.querySelector(".clear-btn").addEventListener("click", () => {
  list.innerHTML = "";
});
