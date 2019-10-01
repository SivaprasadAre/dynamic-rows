function write(massage) {
  document.getElementById("first-p").innerHTML = massage + "";
}

document
  .getElementById("first-test")
  .addEventListener("keyup", function() {
    console.log(document.getElementById("first-test").value);
    document.getElementById("first-p").innerHTML = document.getElementById(
      "first-test"
    ).value;
  });

let table1 = document.getElementById("table1"),
  count = 1;
myCreateFunction(count);

function addRows(r) {
  let newRowIndex = r.parentNode.parentNode.parentNode.rows.length;
  let row = table1.insertRow(newRowIndex);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  cell1.innerHTML = count;
  cell2.innerHTML = document.getElementById("name1").value;
  cell3.innerHTML = document.getElementById("country").value;
  cell4.innerHTML =
    "<input type='button' onclick='edit(this)' value='Edit'><input type='button' onclick='removeRow(this)' value='Remove'>";
  count++;
  document.getElementById("name1").value = "";
  document.getElementById("country").value = "";

  let tbl = r.parentNode.parentNode.parentNode;
  let i = r.parentNode.parentNode.rowIndex;
  tbl.deleteRow(i);
  myCreateFunction(newRowIndex);
}
function edit(data) {
  data.parentElement.parentElement.childNodes[1].innerHTML =
    "<input type='text' value=" +
    data.parentElement.parentElement.childNodes[1].innerHTML +
    ">";
  data.parentElement.parentElement.childNodes[2].innerHTML =
    "<input type='text' value=" +
    data.parentElement.parentElement.childNodes[2].innerHTML +
    ">";
  data.parentElement.parentElement.childNodes[3].innerHTML =
    "<input type='button' onclick='update(this)' value='update'>";
}
function update(data) {
  data.parentElement.parentElement.childNodes[1].innerHTML =
    data.parentElement.parentElement.childNodes[1].childNodes[0].value;
  data.parentElement.parentElement.childNodes[2].innerHTML =
    data.parentElement.parentElement.childNodes[2].childNodes[0].value;
  data.parentElement.parentElement.childNodes[3].innerHTML =
    "<input type='button' onclick='edit(this)' value='Edit'><input type='button' onclick='removeRow(this)' value='Remove'>";
}
function removeRow(r) {
  r.parentElement.parentElement.remove();
}

function myCreateFunction(data) {
  let neRrow = table1.insertRow(data);
  let rcell1 = neRrow.insertCell(0);
  let rcell2 = neRrow.insertCell(1);
  let rcell3 = neRrow.insertCell(2);
  let rcell4 = neRrow.insertCell(3);
  rcell4.style.textAlign = "center";
  rcell1.innerHTML = count;
  rcell2.innerHTML = "<input id='name1' type='text'>";
  rcell3.innerHTML = "<input id='country' type='text'>";
  rcell4.innerHTML =
    "<input type='button' onclick='addRows(this)' value='Add'>";
}
