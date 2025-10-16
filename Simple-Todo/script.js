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
  addLocalStorage(inputVal.value);
  let createLi = document.createElement("li");
  createLi.className = "list-d-li";
  createLi.innerHTML = inputVal.value;
  let delIcon = document.createElement("p");
  delIcon.innerText = "Delete";
  delIcon.className = "delIcon";
  list.appendChild(createLi);
  inputVal.value = "";
  createLi.appendChild(delIcon);
});

// add event listner for remove
list.addEventListener("click", (e) => {
  if (e.target.parentElement.className == "list-d-li") {
    e.target.parentElement.remove();
    removeLSli(e.target.parentElement);
  }
});
//add event listner for clear all
document.querySelector(".clear-btn").addEventListener("click", () => {
  list.innerHTML = "";
});

// function Push data To Local Storage

let addLocalStorage = (inputVal) => {
  let setTask;
  if (localStorage.getItem("taskId") === null) {
    setTask = [];
  } else {
    setTask = JSON.parse(localStorage.getItem("taskId"));
  }
  setTask.push(inputVal);
  localStorage.setItem("taskId", JSON.stringify(setTask));
};

// creating a dom listner
document.addEventListener("DOMContentLoaded", showTask);

function showTask() {
  let setTask;
  if (localStorage.getItem("taskId") === null) {
    setTask = [];
  } else {
    setTask = JSON.parse(localStorage.getItem("taskId"));
  }
  setTask.forEach((tasks) => {
    let createLi = document.createElement("li");
    createLi.className = "list-d-li";
    createLi.innerHTML = tasks;
    let delIcon = document.createElement("p");
    delIcon.innerText = "Delete";
    delIcon.className = "delIcon";
    list.appendChild(createLi);
    inputVal.value = "";
    createLi.appendChild(delIcon);
  });
}

function removeLSli(LsRemoveLi) {
  console.log(LsRemoveLi.firstChild);

  let setTask;
  if (localStorage.getItem("taskId") === null) {
    setTask = [];
  } else {
    setTask = JSON.parse(localStorage.getItem("taskId"));
  }
  setTask.forEach((listEl, index) => {
    if (listEl == LsRemoveLi.firstChild) {
      console.log("Matched and removing:", listEl);
      setTask.splice(index, 1);
    }
    localStorage.setItem("taskId", JSON.stringify(setTask));
  });
}
