let obj = {
  [Symbol.iterator](){
    let maxNumber = 10;
    let i = 0;
    let oldValue = 0;
    let newValue = 0;
    return{
      next() {
        if(i++<maxNumber){
          [oldValue,newValue] = [newValue, (oldValue+newValue) || 1]
          return {value:oldValue,done:false}
        }
        else{
          return {done:true}
        }
       
      }
    }
  }
}

console.log([...obj])