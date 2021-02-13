
const addOnStack = require('./stack').addOnStack
const removeTopStack = require('./stack').removeTopStack
const getTopStack = require('./stack').getTopStack



const array = [0, 2, 4, 6, 4, 2, 0]



const addBranch = (tree, target, branch) => {
    tree[target].push(branch)
    return tree
}

const setTreeNode = (tree, target, value) => {
    return tree[target][value]
}

const createNode = (tree, value, currentNode = null) => {
    if (! currentNode){
        return  tree.push(value)
    } else {
        return tree[currentNode][currentNode].push(value)
    }
}



const createTree = array => {
    let tree = null
    let stack = []
    let currentNode = null

    array.forEach((element, index, arr) => {

        if (!tree){
            tree = []
            //tree.push([element,[]])
            currentNode = createNode(tree, [element, []] ) - 1
            console.log(currentNode)
            addOnStack(stack, element)
            
        } else if (element > getTopStack(stack)){
            console.log(tree)
            currentNode = createNode(tree, [element, []], currentNode ) - 1
            
            addOnStack(stack, element)
            
        }
    })
    return tree
}

console.log(createTree(array))
