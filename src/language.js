/*
Для начала научусь просто вычислять одно выражение

Глобальное окружение с базовыми примитивами

Текстовый анализатор
Разделить строку на слова
Первое слово - функция
Остальные слова - аргументы

“+ 2 2”
Разделить строку на слова, сохранить в массив слов
Нужен тип данных. Для начала пусть будут только числа.
[“+”, “2”,”2”]
Взять 0 элемент массива - это  функция, остальные - аргументы функции.
Применить функцию - примитив из глобального окружения к аргументам.
*/


let globalEnvironment = {
    "+": (a,b) => Number(a) + Number(b)
}

let programString = `
+ 28 2
+ 40 11
`

//Каждая новая строка - новое выражение, делим по выражениям по \n
const splitLinesToExpressions = (str) => str.split(/\n/).filter( e => e.length > 0)

// Делим выражение на слова по пробелам
const splitToWords = (str) => str.split(/\s+/).filter( e => e.length > 0)

//Применение функции
const apply = (operator, operands) => globalEnvironment[operator].apply(null, operands)

//Применение всего выражения
const applyExpression = (expression) => {
    let words = splitToWords(expression)
    let primitiveOperator = words.slice(0,1)
    let primitiveOperands = words.slice(1)
        
    console.log(globalEnvironment[primitiveOperator].apply(null, primitiveOperands))
}

//Теперь запустить цикл разбора по всем строкам
let words  = splitLinesToExpressions(programString).forEach(expression => applyExpression(expression))







