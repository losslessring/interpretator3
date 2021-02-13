/*
Построение дерева из  массива
Если элемент больше предыдущего, добавляем его в дерево
Если нет - отпрыгиваем еще назад и сравниваем с предыдущим предыдущего
Отпрыгивание реализуется так
отпрыгиваем назад по стеку и сравниваем со значением в стеке
*/


const array = [0, 2, 4, 6, 4, 2, 0]

const createTree = (array) => {

    const createTreeFromArray = (array, tree, returnStack, prevNode, prevElement) => {
        //console.dir(tree)
        if (array.length === 0){
            return tree
        }
        if (!tree){
            let root = { 
                value: -1,
                parent: -1,
                children:[]
            }
            let returnStack = []
            returnStack.push(root) 
            return createTreeFromArray(array, root, returnStack, root, root.value)
        }

        let newNode = {
            value: array[0],
            parent: prevElement,
            children:[]

        }
        
        if (array[0] > prevElement) {
        
            prevNode.children.push(newNode)
            returnStack.push(newNode)

            return createTreeFromArray(array.slice(1), tree, returnStack, newNode, newNode.value)
        }
        else {
            let lastStackElement = returnStack.pop()
            return createTreeFromArray(array, tree, returnStack, lastStackElement, lastStackElement.value )
        }
    }

        
        return createTreeFromArray(array)
    

}

let tree = createTree(array)
//console.log(tree)
// console.log(tree.children[0])
// console.log(tree.children[0].children[0])
// console.log(tree.children[0].children[0].children[0])
// console.log(tree.children[0].children[0].children[0].children[0])
// console.log(tree.children[0].children[0].children[0].children[0].children[0])
// console.log(tree.children[0].children[0].children[0].children[0].children[0].children[0])

const treeTravel = require('../tree_travel/tree_travel').treeTravel
const treeVisualize = require('../tree_travel/tree_visualize').treeVisualize


treeTravel(tree, function(v) {console.log(v["value"])})
//treeVisualize(tree, (array) => {console.log(array.map(obj => obj["value"]).join(' '))})

