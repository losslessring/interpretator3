const array = [0, 2, 4, 6, 4, 2, 0]

const createTreeFromArray = (array, tree = null, prevElement = null) => {
    console.dir(tree)
    if (array.length === 0){
        return tree
    }

    if (!tree) {
        let newNode = { 
            value: array[0],
            parent: -1,
            

            }
        
        return createTreeFromArray(array.slice(1), newNode, newNode.value)    
    }
    
    
    //console.dir(tree)
    if (array[0] > prevElement) {
        let newNode = {
            value: array[0],
            parent: tree,
            

        }
        
        
        return createTreeFromArray(array.slice(1), newNode, newNode.value)    
    
    } else {
        return createTreeFromArray(array, tree.parent, tree.value)    
    }
}


createTreeFromArray(array)


