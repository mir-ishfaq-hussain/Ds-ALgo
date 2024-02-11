// Input :  Postfix : ABC/-AK/L-*
// Output : Prefix :  *-A/BC-/AKL
const stack = [];
const operators = ["*", "/", "-", "+"];

function convertIntoPrefix(expression) {
  for (let e of expression) {
    let prefix = "";

    if (operators.includes(e)) {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      prefix = e + operand2 + operand1;
      stack.push(prefix);
    } else {
      stack.push(e);
    }
  }
  return stack.pop();
}
let prefix = convertIntoPrefix("ABC/-AK/L-*");
console.log("here is your prefix", prefix);
