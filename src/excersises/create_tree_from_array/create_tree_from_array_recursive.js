
/*
Построение дерева из  массива
Если элемент больше предыдущего, добавляем его в дерево
Если нет - отпрыгиваем еще назад и сравниваем с предыдущим предыдущего
Отпрыгивание реализуется так
отпрыгиваем назад по стеку и сравниваем со значением в стеке
*/


//const array = [0, 2, 2, 2]
//const array = [0, 2, 4, 6, 4, 2, 0]

const array = [
    { expression: '+ 28 2', indent: 0 },
    { expression: '    + 40 11', indent: 4 }
  ]

const createTree = (array, fieldToCheck, fieldToAdd) => {   


    const createTreeFromArray = (array, prevNode) => {
        
        if (array.length === 0){
            return
        }
        

        let newNode = {
            value: array[0][fieldToCheck],
            parent: prevNode.value,
            data: array[0][fieldToAdd],
            children:[]

        }

        if (array[0][fieldToCheck] > prevNode.value) {
        
            prevNode.children.push(newNode)
            returnStack.push(newNode)

            return createTreeFromArray(array.slice(1), newNode)
        }
        else {
            returnStack.pop()
            let lastStackElement = returnStack[returnStack.length - 1]
            //console.log(lastStackElement)
            return createTreeFromArray(array, lastStackElement)
        }
    }   

    let tree = { 
        value: -1,
        parent: -1,
        data: "root",
        children:[]
    }

    let returnStack = []
    returnStack.push(tree) 


    createTreeFromArray(array, tree)
    return tree
    

}

let tree = createTree(array, "indent", "expression" )
console.log(tree)
console.log(tree.children[0])
console.log(tree.children[0].children[0])
console.log(tree.children[0].children[0].children[0])
// console.log(tree.children[0].children[0].children[0].children[0])
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

//Вынес параметры в замыкание. Не знаю, стало ли лучше.
//Как то чище, если передавать все в параметры.
//Нигде ничего не может измениться.