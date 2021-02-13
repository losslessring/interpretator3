const treeVisualize = (node, fn) => {
    fn(node.children)
    if (node.children.length !== 0){
        node.children.forEach(child => {
            treeVisualize(child, fn)
        })
    } else return    
}

module.exports.treeVisualize = treeVisualize