const array = [0, 2, 4, 6]

const createTreeFromArray = (array, tree, prevElement) => {
    //console.dir(tree)
    if (array.length === 0){
        return tree
    }
    // if (!tree) {
    //     let newNode = { 
    //         value: -1,
    //         parent: -1,
    //         children:[]
    //         }
        
    //     return createTreeFromArray(array, newNode,  newNode.value)    
    // }
    // if (array[0] > prevElement) {
        let newNode = {
            value: array[0],
            parent: prevElement,
            children:[]

        }
        tree.children.push(newNode)
         //console.log(tree)
        return createTreeFromArray(array.slice(1), newNode, newNode.value)
    // }

    //return tree

}

    
let root = { 
            value: -1,
            parent: -1,
            children:[]
            }

console.log(createTreeFromArray(array, root, root.parent ))
console.table(root)
//console.table(root.children[0])
//console.table(root.children[0].children[0].children[0].children[0])

//Получилось! Разобраться, почему не получается создать дерево в памяти
//Или сделать дерево в замыкании и внутренних функциях