/*
Построение дерева из  массива
Если элемент больше предыдущего, добавляем его в дерево
Если нет - отпрыгиваем еще назад и сравниваем с предыдущим предыдущего
Отпрыгивание реализуется так
отпрыгиваем назад по стеку и сравниваем со значением в стеке
*/


const array = [0, 2, 4, 6, 4, 2, 0]

const createTree = (array, tree) => {

    const createTreeFromArray = (array, returnStack, tree, prevElement) => {
        //console.dir(tree)
        if (array.length === 0){
            return 
        }
        let newNode = {
            value: array[0],
            parent: prevElement,
            children:[]

        }
        
        if (array[0] > prevElement) {
        
            tree.children.push(newNode)
            returnStack.push(newNode)
            //console.log(tree)
            //console.log(returnStack)
            return createTreeFromArray(array.slice(1), returnStack, newNode, newNode.value)
        }
        else {
            let lastStackElement = returnStack.pop()
            return createTreeFromArray(array, returnStack, lastStackElement, lastStackElement.value )
        }
    }

    let returnStack = []
    
    if (!tree){
        let root = { 
            value: -1,
            parent: -1,
            children:[]
            }        
        
        returnStack.push(root)
        createTreeFromArray(array, returnStack, root, root.value)
        return root
    
    } else {
     
        createTreeFromArray(array, returnStack, tree, tree.value)
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