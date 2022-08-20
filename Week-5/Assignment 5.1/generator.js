async function asyncAwait() {
  console.time();
  console.log("Resolving task 1");
  let result1 = await doTask1();
  console.log(result1);
  console.timeEnd();

  console.time();
  console.log("Resolving task 2");
  let result2 = await doTask2();
  console.log(result2);
  console.timeEnd();

  console.time();
  console.log("Resolving task 3");
  let result3 = await doTask3();
  console.log(result3);
  console.timeEnd();
}

function doTask1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved task 1");
    }, 1000);
  });
}

function doTask2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved task 2");
    }, 2000);
  });
}

function doTask3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved task 3");
    }, 3000);
  });
}

asyncAwait();

///Implementing using Generators Approach - using the above functions dotask1, dotask2 and dotask3

function* generatorfunc() {
  console.time();
  console.log("Generator Resolving task 1");
  // we return the function Task1 which in returns a promise
  yield doTask1();
  console.timeEnd();

  console.time();
  console.log("Generator Resolving task 2");
  yield doTask2();
  console.timeEnd();

  console.time();
  console.log("Generator Resolving task 3");
  yield doTask3();
  console.timeEnd();
}

let genInitiate = generatorfunc();


async function xyz() {
  for (let genOutput of genInitiate) {
    //we wait for the promise to execute and then move on to the next iteration
    let abc = (await genOutput);
    console.log(abc);
  }
}

xyz();


