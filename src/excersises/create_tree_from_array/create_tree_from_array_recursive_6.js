const array = [0, 2, 4, 6, 4, 2, 0]

const createTree = (array, tree) => {

    const createTreeFromArray = (array, tree, prevElement) => {
        //console.dir(tree)
        if (array.length === 0){
            return 
        }
        
        if (array[0] > prevElement) {
            let newNode = {
                value: array[0],
                parent: prevElement,
                children:[]

            }
            tree.children.push(newNode)
            //console.log(tree)
            return createTreeFromArray(array.slice(1), newNode, newNode.value)
        }
        else return tree
    }

    if (!tree){
        let root = { 
            value: -1,
            parent: -1,
            children:[]
            }
        createTreeFromArray(array, root, root.value)
        return root
    
    } else {
     
        createTreeFromArray(array, tree, tree.value)
        return tree
    }
}

let tree = createTree(array)
console.log(tree.children[0].children[0].children[0])
console.log(tree)