


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
