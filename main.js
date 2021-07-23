const addButton = document.querySelector("#addButton1");
const removeButton = document.querySelector("#removeButton1");
const removeAllButton = document.querySelector("#removeAllButton1");
const searchbar = document.querySelector("#searchbar1");
const newListItem = document.querySelector("#list");
const deletedItemsButton = document.querySelector("#showDeletedItems");
const mainListButton = document.querySelector("#mainList");
const hiddenList = document.querySelector("#listHidden");
const hiddenListItems = document.querySelector("#listHiddenItems");
const selectedItems = document.querySelector("#selectedItems");

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
		item.style.textDecoration = "none";
		item.style.background = "plum";
		item.classList.remove('completed');
		hiddenListItems.appendChild(item);
	}
});

removeAllButton.addEventListener("click", function () {
	console.log("Remove ALL has been clicked");
		const removeAllItem = document.querySelectorAll(".listItem");
	for (const item of removeAllItem) {
		console.log("I should be doing things!");
		// item.classList.add('completed');
		item.style.textDecoration = "none";
		item.style.background = "plum";
		hiddenListItems.appendChild(item);
	}
});

deletedItemsButton.addEventListener("click", function () {
	console.log("Show Deleted has been clicked");
	hiddenList.style.display = "flex";
	item.style.display = "none";
});

mainListButton.addEventListener("click", function () {
	console.log("Main List has been clicked");
	hiddenList.style.display = "none";
	newListItem.style.display = "flex";
});

selectedItems.addEventListener("click", function () {
		const removeSelectedItem = document.querySelectorAll(".completed");
	for (const item of removeSelectedItem) {
		item.style.textDecoration = "none";
		item.style.background = "plum";
		item.classList.remove('completed');
		newListItem.appendChild(item);
	}
});
