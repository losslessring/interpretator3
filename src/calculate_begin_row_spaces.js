/*
Задача - подсчитать число отступов в начале строки
разделить на строки
подсчитать сисло пробелов в начале строки
*/

let programString = `
+ 28 2
    + 40 11
`

//Каждая новая строка - новое выражение, делим по выражениям по \n
const splitLinesToExpressions = (str) => str.split(/\n/).filter( e => e.length > 0)

//подсчитать сисло пробелов в начале строки
const calcBeginSpaces = str => str.search(/\S|$/)

//Посчитать все выражения на число отступов сначала
const calcBeginSpacesInAllRows = arrayOfStrings => arrayOfStrings.map(string => calcBeginSpaces(string))

//Создать структуру, описывающую выражения, 
//чтобы понять по отступам какое подвыражение к какому выражению отностится
const createExpressionDescriptionStructure = arrayOfStrings => {
    
    return arrayOfStrings.map(string => {
        return {
                expression: string, 
                indent: calcBeginSpaces(string)
               }
        })

}

const constructCombinedExpression = arrayOfExpressionDescriptions => {
    
}

console.log(createExpressionDescriptionStructure(splitLinesToExpressions(programString)))