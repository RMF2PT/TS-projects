import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(list: FullList): void;
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;

  static instance: ListTemplate = new ListTemplate();

  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(listInstance: FullList): void {
    this.clear();

    listInstance.list.forEach((item) => {
      const li = document.createElement("li") as HTMLLIElement;
      li.className = "item";

      const input = document.createElement("input") as HTMLInputElement;
      input.type = "checkbox";
      input.id = item.id;
      input.checked = item.checked;
      li.appendChild(input);

      input.addEventListener("change", () => {
        item.checked = !item.checked;
        listInstance.save();
      });

      const label = document.createElement("label") as HTMLLabelElement;
      label.htmlFor = item.id;
      label.textContent = item.item;
      li.appendChild(label);

      const button = document.createElement("button") as HTMLButtonElement;
      button.className = "button";
      button.textContent = "X";
      li.appendChild(button);

      button.addEventListener("click", () => {
        listInstance.removeItem(item.id);
        this.render(listInstance);
      });

      this.ul.appendChild(li);
    });
  }
}
