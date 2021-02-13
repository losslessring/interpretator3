const array = [0, 2, 4, 6]

const createTreeFromArray = (array, tree, prevElement, resultTree) => {
    //console.dir(tree)
    if (array.length === 0){
        return resultTree
    }
    if (!tree) {
        let newNode = { 
            value: array[0],
            parent: -1,
            children:[]
            }
        
        return createTreeFromArray(array.slice(1), newNode,  newNode.value, newNode)    
    }
    if (array[0] > prevElement) {
        let newNode = {
            value: array[0],
            parent: prevElement,
            children:[]

        }
        tree.children.push(newNode)
        //console.log(tree)
        return createTreeFromArray(array.slice(1), newNode, newNode.value, tree)
    }
    else return resultTree
}

console.log(createTreeFromArray(array))