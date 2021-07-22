const addButton = document.querySelector("#addButton1");
const removeButton = document.querySelector("#removeButton1");
const removeAllButton = document.querySelector("#removeAllButton1");
const searchbar = document.querySelector("#searchbar1");
const newListItem = document.querySelector("#list");
const deletedItemsButton = document.querySelector("#showDeletedItems");
const mainListButton = document.querySelector("#mainList");
const hiddenList = document.querySelector("#listHidden");
const hiddenListItems = document.querySelector("#listHiddenItems");

let count = 1;
addButton.addEventListener("click", function () {
	console.log("ADD has been clicked");
	const newItem = document.createElement("div");
	newItem.classList.add("listItem");
	newItem.classList.add(`list-item${count}`);
	count++;
	newItem.innerText = searchbar1.value;
	newListItem.appendChild(newItem);
	const getItem = document.querySelectorAll(".listItem");
	for (const item of getItem) {
		item.addEventListener("click", function () {
			item.style.textDecoration = "line-through";
			item.style.background = "green";
			item.classList.add("completed");
		});
	}
});

removeButton.addEventListener("click", function () {
	console.log("Remove has been clicked");
	const removeItem = document.querySelectorAll(".completed");
	for (const item of removeItem) {
		console.log("I should be doing things!");
		hiddenListItems.appendChild(item);
	}
});

removeAllButton.addEventListener("click", function () {
	console.log("Remove ALL has been clicked");
});

deletedItemsButton.addEventListener("click", function () {
	console.log("Show Deleted has been clicked");
	hiddenList.style.display = "flex";
	newListItem.style.display = "none";
});

mainListButton.addEventListener("click", function () {
	console.log("Main List has been clicked");
	hiddenList.style.display = "none";
	newListItem.style.display = "flex";
});
