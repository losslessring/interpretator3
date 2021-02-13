const array = [0, 2, 4, 6, 4, 2, 0]

const createTree = (array, tree) => {

    const createTreeFromArray = (tree, n) => {
        
        let newNode = {
            value: array[n],
            //parent: array[n-1],
            children:[]

        }
        
        if (n === 0) {
            
            tree.children.push(newNode)
        
            return createTreeFromArray(newNode, n + 1)
        }


        if (n >= array.length){
            return 
        }


        
         if (array[n] > array[n-1]) {
        
            tree.children.push(newNode)
        
            return createTreeFromArray(newNode, n + 1)
        }
        else {
            return createTreeFromArray(newNode, n - 1)
        }
    }

    const jumpBack = (tree, n) => {

    }
    
    if (!tree){
        let root = { 
            value: -1,
            //parent: -1,
            children:[]
            }
        createTreeFromArray(root, 0)
        return root
    
    } else {
     
        createTreeFromArray(tree, n)
        return tree
    }
}

let tree = createTree(array)
console.log(tree)
console.log(tree.children[0])
console.log(tree.children[0].children[0])
console.log(tree.children[0].children[0].children[0])
console.log(tree.children[0].children[0].children[0].children[0])
// console.log(tree.children[0].children[0].children[0].children[0].children[0])
// console.log(tree.children[0].children[0].children[0].children[0].children[0].children[0])

//console.log(tree.children[0].children[0].children[0])
//console.log(tree)