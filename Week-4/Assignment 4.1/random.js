class PromiseSimple {
  constructor(executionFunction) {
    this.promiseChain = [];
    this.handleError = () => {};

    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);

    executionFunction(this.onResolve, this.onReject);
  }

  then(handleSuccess) {
    this.promiseChain.push(handleSuccess);

    return this;
  }

  catch(handleError) {
    this.handleError = handleError;

    return this;
  }

  onResolve(value) {
    let storedValue = value;

    try {
      this.promiseChain.forEach((nextFunction) => {
        storedValue = nextFunction(storedValue);
      });
    } catch (error) {
      this.promiseChain = [];

      this.onReject(error);
    }
  }

  onReject(error) {
    this.handleError(error);
  }
}

const getNumber = () => {
  return new PromiseSimple((onResolve, onReject) => {
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * 90000) + 10000;
      if (randomNumber % 5 === 0) {
        onReject(randomNumber);
      } else {
        onResolve(randomNumber);
      }
    }, 100);
  });
};


getNumber()
  .then((onResolve) => {
    console.log(`${onResolve} is not divisible by 5`);
    return;
  })
  .catch((error) => {
    console.log(`${error} is divisible by 5`);
  });
