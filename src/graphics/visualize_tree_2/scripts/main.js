

const treeTravel = (node, parentNode, fn, depth, childIndex, parentNodeDataFromOutside) => {
	
	//Глубина дерева - лежит в замыкании и не увеличивается при 
	// переборе массива детей в ширину.
	if(depth === undefined){
		var depth = 0 
	} else {
		depth = depth += 1
	}
	//console.log(childIndex) 
	parentNodeDataFromOutside = fn(node, parentNode, depth, childIndex, parentNodeDataFromOutside)
	//console.log(parentNodeDataFromOutside)
	//let parentDataFromOutside = fn(node, depth, childIndex)
	//console.log(parentDataFromOutside)
    if (node.children.length !== 0){
        node.children.forEach((child, childIndex) => {
            treeTravel(child, node, fn, depth, childIndex, parentNodeDataFromOutside)
        })
    } else return    
}

const initCanvas = (options) => {
	
	const {
			//container: container,
	 		width: width, 
		 	height: height, 
			background: background
		} = options
	
	// Create Canvas
    const canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height
    document.body.appendChild(canvas)
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = background
	ctx.fillRect(0, 0, canvas.width, canvas.height)

	return ctx
}


const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 600
const CANVAS_BACKGROUND = "white"


const ctx = initCanvas({
	 		width: CANVAS_WIDTH, 
		 	height: CANVAS_HEIGHT, 
			background: CANVAS_BACKGROUND
		})

const ROOT_X = CANVAS_WIDTH / 3
const ROOT_Y = CANVAS_HEIGHT / 4
const RADIUS = 25

const initLine = (ctx, startX, startY) => {
	ctx.beginPath()
	ctx.moveTo(startX, startY)	
}


const drawCircle = (ctx, x, y, radius, color) => {
	ctx.beginPath()
	ctx.fillStyle = color
	ctx.arc(x, y, radius, 0, 2 * Math.PI)
	//ctx.stroke()
	ctx.fill()
}

const drawText = (ctx, x, y, fontSizeAndType, text, color) => {
	ctx.textAlign = 'center'
	ctx.textBaseline = 'middle'
	ctx.font = fontSizeAndType
	ctx.fillStyle = color
	ctx.fillText(text, x, y)
}

const drawLine = (ctx, fromX, fromY, toX, toY, color = "black") => {
	ctx.beginPath()
	ctx.moveTo(fromX, fromY)	
	ctx.lineTo(toX, toY)
	ctx.strokeStyle = color
	ctx.stroke()
}

const drawNode = (options) => {
	
	const {
		ctx,
		x,
		y,
		radius,
		shapeColor,
		fontSizeAndType,
		text,
		textColor

	} = options
	
	drawCircle(ctx, x, y, radius, shapeColor)
	drawText(ctx, x, y, fontSizeAndType, text, textColor)
	return {x: x, y: y}
}




const tree = { value:-1, 
			   children:[
						 {value: 0, children:[]},
						 {value: 0, children:[
							 					{value: 2, children:[]},
												{value: 2, children:[]},
												{value: 2, children:[]},
											]}
					    ]}



const drawNodeWithEdges = function(node, parentNode, depth, childIndex, parentNodeData) { 
	
	const MULTIPLIER_X = 100
	const MULTIPLIER_Y = 100
	//const SHIFT_LEFT = -50

	// console.log(parentNodeData)
	if (parentNodeData === undefined){
		parentNodeData = {
			x: ROOT_X,
			y: ROOT_Y
		}
		
	}
	
	console.log(childIndex)
	if(childIndex === undefined){
		var shiftX = 0
	} //else if(childIndex === 0){
		//var shiftX = SHIFT_LEFT
	//} 
	else {
		var shiftX = (childIndex ) * MULTIPLIER_X 
	}
	
	
	//Сделать нормализацию значений, чтобы не вытягивалось дерево
	//let shiftY = 
	drawLine(ctx, parentNodeData.x , parentNodeData.y, parentNodeData.x + shiftX , ROOT_Y + depth * MULTIPLIER_Y, "firebrick")
	let parentCoords = drawNode({ctx: ctx, 
				x: parentNodeData.x + shiftX , 
				y: ROOT_Y + depth * MULTIPLIER_Y, 
				radius: RADIUS, 
				shapeColor: "firebrick",
				fontSizeAndType: "25px serif",
				text: node["value"],
				textColor: "white"
				
			})

	//console.log(parentCoords)
	//console.log(node.value)
	return parentCoords 
}


initLine(ctx, ROOT_X, ROOT_Y)

treeTravel(tree, {value: -2}, drawNodeWithEdges)

// ЗАДАЧИ parentNode не нужен, переписать в функциональном стиле
