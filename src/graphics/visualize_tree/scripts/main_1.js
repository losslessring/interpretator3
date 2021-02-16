

const treeTravel = (node, fn, childIndex) => {
    fn(node, childIndex)
    if (node.children.length !== 0){
        node.children.forEach((child, childIndex) => {
            treeTravel(child, fn, childIndex)
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

const ROOT_X = CANVAS_WIDTH / 2
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

const drawLine = (ctx, toX, toY) => {
	
	ctx.lineTo(toX, toY)
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
	
}


// drawNode({	ctx: ctx, 
// 			x: ROOT_X, 
// 			y: ROOT_Y, 
// 			radius: RADIUS, 
// 			shapeColor: "firebrick",
// 			fontSizeAndType: "25px serif",
// 			text: "-1",
// 			textColor: "white"})


// const tree = { value:2, 
// 			   children:[
// 						 {value: 3, children:[]},
// 						 {value: 3, children:[]}
// 					    ]}

const tree = { value:-1, 
			   children:[
						 {value: 0, children:[]},
						 {value: 0, children:[
							 					{value: 2, children:[]},
												{value: 2, children:[]}
											]}
					    ]}

//treeTravel(tree, function(v, index) {console.log(index)})

initLine(ctx, ROOT_X, ROOT_Y)

treeTravel(tree, function(node, childIndex) { 
	
	const MULTIPLIER_X = 25
	const MULTIPLIER_Y = 100
	const SHIFT_LEFT = -50
	

	if(childIndex === undefined){
		var shiftX = 0
	} else if(childIndex === 0){
		var shiftX = SHIFT_LEFT
	} else {
		var shiftX = childIndex * MULTIPLIER_X
	}
	
	//Сделать нормализацию значений, чтобы не вытягивалось дерево
	//let shiftY = 
	//drawLine(ctx, ROOT_X + shiftX , ROOT_Y + node.value * MULTIPLIER_Y)
	drawNode({	ctx: ctx, 
				x: ROOT_X + shiftX , 
				y: ROOT_Y + node.value * MULTIPLIER_Y, 
				radius: RADIUS, 
				shapeColor: "firebrick",
				fontSizeAndType: "25px serif",
				text: node["value"],
				textColor: "white"
				
			})
	
	console.log(node.value) 
})

