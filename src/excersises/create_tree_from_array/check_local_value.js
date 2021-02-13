const array = [0, 2, 4, 6, 4, 2, 0]

const storeLocalValue = (array, localArray) => {
    if (array.length === 0){
        return localArray
    }
    if (!localArray) {
        let localArray = []
        return storeLocalValue(array, localArray)
    }
    localArray.push(array[0])
    return storeLocalValue(array.slice(1), localArray)
}

console.log(storeLocalValue(array))
