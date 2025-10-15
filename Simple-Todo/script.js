// let inputBox = document.querySelector("#input-box");
// let lists = document.querySelector(".list-items");
// function handleClick() {
//   if (inputBox.value == "") return;
//   let createdLi = document.createElement("li");
//   createdLi.innerHTML = inputBox.value;
//   lists.appendChild(createdLi);
//   inputBox.value = "";
//   // console.log(createdLi);
// }
// // important use case
// function removeList() {
//   let Lists = document.querySelectorAll("li");
//   Lists.forEach((element) => {
//     element.remove();
//   });
// }
// //
// event handeling

let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list-items");
let deleteItem = document.querySelector(".delete-item");

document.querySelector("form").addEventListener("click", (e) => {
  e.preventDefault();
});
btn.addEventListener("click", () => {
  if (input.value == "") return;
  let listItem = document.createElement("li");
  listItem.innerHTML = input.value;
  list.append(listItem);
  input.value = "";
});

function removeEl() {
  let allLi = document.querySelector("li");
  if (allLi == null) return;
  allLi.remove();
}
