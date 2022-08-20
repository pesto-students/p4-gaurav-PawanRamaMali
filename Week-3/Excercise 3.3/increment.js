function createIncrement() {
  let count = 0;
  function increment(){
    count++;
    
  }

  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?


//Modified for the correct solution
function createIncrementModified() {
    let count = 0;
    let message =""
    function increment(){
      count++;
      message = `Count is ${count}`;
    }
  
    
    function log() {
      console.log(message);
    }
    return [increment, log];
  }
  const [incrementModified, logModified] = createIncrementModified();
  incrementModified();
  incrementModified();
  incrementModified();
  logModified(); // What is logged?
