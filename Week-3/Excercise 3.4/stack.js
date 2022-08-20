function createStack() {
    let items = []
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
    get(){
        return items
    }
  };
}

const stack = createStack.call();
stack.push(10);
stack.push(5);
stack.pop();
stack.push(25);
stack.push(23);

console.log(stack.items);
console.log(stack.get());
