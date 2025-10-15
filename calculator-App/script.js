let input = document.querySelector("#inputEl");
function appendVal(val) {
  input.value += val;
}
function clearVal() {
  input.value = "";
}
function deleteval() {
  input.value = input.value.slice(0, input.value.length - 1);
}
function evaluat() {
  input.value = eval(input.value);
}
