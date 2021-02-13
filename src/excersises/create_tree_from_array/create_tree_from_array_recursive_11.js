


/*
Построение дерева из  массива
Если элемент больше предыдущего, добавляем его в дерево
Если нет - отпрыгиваем еще назад и сравниваем с предыдущим предыдущего
Отпрыгивание реализуется так
отпрыгиваем назад по стеку и сравниваем со значением в стеке
*/


//const array = [0, 2, 2, 2]
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
            returnStack.pop()
            let lastStackElement = returnStack[returnStack.length - 1]
            //console.log(lastStackElement)
            return createTreeFromArray(array, tree, returnStack, lastStackElement, lastStackElement.value )
        }
    }

        
        return createTreeFromArray(array)
    

}

let tree = createTree(array)
console.log(tree)
console.log(tree.children[0])
console.log(tree.children[0].children[0])
console.log(tree.children[0].children[0].children[0])
 console.log(tree.children[0].children[0].children[0].children[0])
// console.log(tree.children[0].children[0].children[0].children[0].children[0])
// console.log(tree.children[0].children[0].children[0].children[0].children[0].children[0])

const treeTravel = require('../tree_travel/tree_travel').treeTravel
const treeVisualize = require('../tree_travel/tree_visualize').treeVisualize


//treeTravel(tree, function(v) {console.log(v["value"])})
//treeVisualize(tree, (array) => {console.log(array.map(obj => obj["value"]).join(' '))})

//задача - проверить, что происходит с массивом, не мутируется ли он
//при передаче в функцию. Нет, не изменяется, потому что он восстанавливается на стеке
//При возвращении из рекурсии.
//console.log(array)

/*
Вопрос, на какой элемент при отпрыгивании назад по стеку укажет
Может произойти, что элементу не хватит стека 
или он будет указывать не на того родителя
0, 2, 2, 2, 2
Здесь не хватает стека
Да, ошибка в алгоритме - неверно выдергивать со стека элемент,
если он меньше текущего - поставить проверку - если элемент в стеке
меньше текущего - не вынимать его из стека
Исправил - нужно снимать элемент со стека, и передавать не его,
а нижележащий элемент
*/