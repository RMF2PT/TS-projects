import "./css/style.css";
import ListItem from "./model/ListItem";
import FullList from "./model/FullList";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
  const fullList = FullList.instance;
  const listTemplate = ListTemplate.instance;
  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;

  itemEntryForm.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault();

    const input = document.getElementById("newItem") as HTMLInputElement;

    const itemEntryInputValue = input.value.trim();
    if (!itemEntryInputValue.length) return;

    // Grab the last id in the list and add 1 to it to get the next id if it exists
    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    const newItem = new ListItem(itemId.toString(), itemEntryInputValue, false);

    fullList.addItem(newItem);
    listTemplate.render(fullList);
    input.value = "";
  });

  const clearItemsButton = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;

  clearItemsButton.addEventListener("click", (): void => {
    fullList.clearList(); // clear data
    listTemplate.clear(); // clear DOM
  });

  fullList.load(); // load data
  listTemplate.render(fullList); // render DOM
};

document.addEventListener("DOMContentLoaded", initApp);
