// page navigation
const dashboard = document.querySelector(".main");
const items = document.querySelector(".items-main");

const dashboardButton = document.querySelector(".dashboard");
const itemsButton = document.querySelector(".items");

function dashboardNone() {
  dashboard.style.display = "none";
}

function itemsNone() {
  items.style.display = "none";
}

dashboardButton.addEventListener("click", () => {
  itemsNone();
  dashboard.style.display = "flex";
});

itemsButton.addEventListener("click", () => {
  dashboardNone();
  items.style.display = "flex";
});

// toggling the lost item form
const lostItemForm = document.querySelector(".new-lost-item-form");
const addItemButton = document.querySelector(".add-item");
const closeFormButton = document.querySelector(".close-form-button");

addItemButton.addEventListener("click", () => {
  lostItemForm.style.display = "flex";
});

closeFormButton.addEventListener("click", (e) => {
  e.preventDefault();
  lostItemForm.style.display = "none";
});

import { createItem } from "../script/methods/create-item.js";
import { getAllItems } from "../script/methods/get-all-item.js";

createItem().then(() => {
  getAllItems();
}); // post request
getAllItems();
