const btnAddDetails = document.querySelector(".btn-add_details ");
const btnSubmit = document.querySelector("#submit");
const fName = document.getElementById("first-name");
const lName = document.getElementById("last-name");
const address = document.getElementById("address");
const pin = document.getElementById("pincode");
const state = document.getElementById("state");
const country = document.getElementById("country");
const tableEntries = document.querySelector(".table-entries");
const tableBody = document.querySelector(".table-body");
const foods = document.querySelectorAll(".food_choice");
const form = document.getElementById("form");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  tableEntries.classList.remove("hidden");

  const gender = document.querySelector(".gender_option:checked");
  const foodChoice = document.querySelectorAll(".food_choice:checked");
  const finalChoice = [];
  foodChoice.forEach((el) => {
    finalChoice.push(el.value);
  });

  const addRow = document.createElement("tr");
  addRow.classList.add("entry-detail");
  addRow.innerHTML = ` <td>${fName.value}</td>
  <td>${lName.value}</td>
  <td>${address.value}</td>
  <td>${pin.value}</td>
  <td>${gender.value}</td>
  <td>${finalChoice.join(",")}</td>
  <td>${state.value}</td>
  <td>${country.value}</td>`;

  tableBody.appendChild(addRow);

  tableEntries.classList.remove("hidden");
  form.reset();
});
