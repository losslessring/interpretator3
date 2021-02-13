
const treeTravel = (node, fn) => {
    fn(node)
    if (node.children.length !== 0){
        node.children.forEach(child => {
            treeTravel(child, fn)
        })
    } else return    
}

module.exports.treeTravel = treeTravel