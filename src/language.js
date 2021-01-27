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

let programString = `+ 28 2`

const splitToWords = (str) => str.split(/\s+/).filter( e => e.length > 0)

let words  = splitToWords(programString)

let primitiveOperator = words[0]
let primitiveOperands = words.slice(1)

console.log(globalEnvironment[primitiveOperator].apply(null, primitiveOperands))

let testMultipleLines = `
Hello this is dummy text
that could be inside the
text area. It will then
get put into the canvas.`

//console.log(testMultipleLines.match(/\n/g))
//Переход на новую строку находится так
//Каждая строка - новое выражение
console.log(testMultipleLines.split(/\n/).filter( e => e.length > 0))
//Теперь запустить цикл разбора по всем строкам
