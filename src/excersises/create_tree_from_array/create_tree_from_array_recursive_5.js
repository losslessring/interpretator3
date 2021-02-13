const array = [0, 2, 4, 6, 4, 2, 0]

const createTreeFromArray = (array, tree, resultTree) => {
    //console.dir(tree)
    if (array.length === 0){
        return resultTree
    }
    if (!tree) {
        let newNode = { 
            value: -1,
            children:[]
            }
        
        
        
        return createTreeFromArray(array, newNode, newNode)    
    }
    
        let newNode = {
            value: array[0],
            children:[]

        }
        tree.children.push(newNode)
        
        
        
        return createTreeFromArray(array.slice(1), newNode, tree)


}

    

console.log(createTreeFromArray(array))