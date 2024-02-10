let ps = require("prompt-sync");
let prompt = ps();
class Node {
  constructor(data) {
    this.data = data;
    this.link = null;
  }
}

class LinkedList {
  #head;
  init() {
    let choice = parseInt(prompt());
    switch (choice) {
      case 1:
        this.insert();
        break;
      case 2:
        this.display();
        break;
      case 3:
        this.insertAtBegining();
        break;
      default:
        return false;
    }
    return true;
  }

  insert() {
    let data = prompt("Enter data");
    let newNode = new Node(data);

    if (!this.#head) {
      this.#head = newNode;
      return;
    }

    let find = this.#head;

    while (find.link) {
      find = find.link;
    }

    find.link = newNode;
    console.clear();
  }

  display() {
    let start = this.#head;
    if (!start) {
      return;
    }
    const data = [];
    while (start) {
      data.push(start.data);
      start = start.link;
    }
    console.table(data);
  }
//Deletion and search is easy 
  insertAtBegining() {
    let data = prompt("Enter you data");
    let newNode = new Node(data);
    if (!this.#head) {
      this.#head = newNode;
      return;
    }
    newNode.link = this.#head;
    this.#head = newNode;
  }
}

let list = new LinkedList();
let condition = true;
while (condition) {
  console.log(
    "Enter your choice\n(1) Insert.\n(2) Display.\n(3) InsertAtBegining.\n(4) In"
  );
  condition = list.init();
}
