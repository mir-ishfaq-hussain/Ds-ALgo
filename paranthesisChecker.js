class BalanceParenthesis {
  #stack = [];
  #closers = '}])'

  #push(brace) {
    this.#stack.push(brace);
  }
  #pop() {
    this.#stack.pop();
  }
  #peek() {
    return this.#stack[this.#stack.length - 1];
  }

  seeTheBalance() {
    let str = "[()]{}{[()()]()}";
    for (let symbol of str) {
      if (this.#closers.includes(symbol)) {
        this.#pop();
      } else {
        this.#push(symbol);
      }
    }

    console.log(!this.#stack.length ? "balanced" : "not balanced");
  }
}

const bp = new BalanceParenthesis();
bp.seeTheBalance();
