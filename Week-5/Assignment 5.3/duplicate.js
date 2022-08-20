function hasDuplicate(arr){
    let set = new Set(arr)
    return Array.from(set).length !== arr.length
}

console.log(hasDuplicate([1,5,-1,4]))
