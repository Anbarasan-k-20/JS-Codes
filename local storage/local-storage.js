// localStorage.setItem("name", "anbu");

// sessionStorage.setItem("age", "21");
localStorage.setItem("name", "anbarasan");
console.log(localStorage, sessionStorage);
console.log(localStorage.getItem("name"));
localStorage.clear();
console.log(localStorage.getItem(name));
let arr = ["anbu", 21, "BCA"];
let changed = JSON.stringify(arr);
console.log(changed);
console.log(arr);

localStorage.setItem("details", changed);

console.log(localStorage.getItem("details"));

let normal = JSON.parse(changed);
console.log(normal);

//
