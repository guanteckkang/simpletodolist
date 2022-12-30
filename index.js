const input = document.querySelector(".input"); //input
const add = document.querySelector(".add"); //add
const removeall = document.querySelector(".remove");
const trash = document.querySelector(".trash"); //trash
const notice = document.querySelector(".notice"); //notisfication div
const output = document.querySelector(".output"); //output list div

let arr = [
  "fill up input",
  "click add to add into list",
  "click trash to delete all",
  'click "x" to remove the list',
];

add.addEventListener("click", () => {
  let find = arr.find((e) => {
    return e == input.value;
  });
  if (input.value === "") {
    notice.innerHTML = "Input Something";
    setTimeout(() => {
      notice.innerHTML = "";
    }, 2000);
  } else if (find) {
    notice.innerHTML = "Already listed";
    setTimeout(() => {
      notice.innerHTML = "";
    }, 2000);
    input.value = "";
  } else if (find == undefined) {
    notice.innerHTML = "Add complete";
    setTimeout(() => {
      notice.innerHTML = "";
    }, 2000);
    arr.push(input.value);
    input.value = "";
  }
  list();
});

removeall.addEventListener("click", () => {
  arr = [];
  list();
});

function remove(i) {
  arr.splice(i, 1);
  list();
}
function deletethis(i) {
  arr.splice(i, 1);
  list();
}
function list() {
  let item = arr
    .map((i, index) => {
      return `<div class="item"><i class="bi bi-x-circle trash" onclick="deletethis(${index})"></i><h4>${i}</h4></div>`;
    })
    .join("");
  output.innerHTML = item;
}
list();
