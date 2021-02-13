//let stack = []

const addOnStack = (stack, element) => {
    stack.push(element)
    return stack
}

const removeTopStack = (stack, element) => {
    stack.pop()
    return stack
}

const getTopStack = stack => {
    return stack.slice(-1).pop() 
}

 module.exports.addOnStack = addOnStack
 module.exports.removeTopStack = removeTopStack
 module.exports.getTopStack = getTopStack

// addOnStack(stack, 0)
// addOnStack(stack, 2)
// addOnStack(stack, 4)
// removeTopStack(stack)
// console.log(getTopStack(stack))
// console.log(getTopStack(stack))

// console.log(stack)