import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  // There is only one instance of FullList
  // static instance is a singleton pattern
  static instance: FullList = new FullList();

  // private before constructor is a singleton pattern
  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }

  // set list(value: ListItem[]) {
  //   this._list = value;
  // }

  load(): void {
    const list = localStorage.getItem("myList");
    if (list) {
      this.list = JSON.parse(list);
    }
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this.list));
  }

  clearList(): void {
    this.list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this.list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    this.list = this.list.filter((item) => item.id !== id);
    this.save();
  }
}
