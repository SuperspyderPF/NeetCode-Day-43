const isCommonPath = (node) => {
    let lca = null
    const lowestCommonAncestor  = (node) => {
        if (!node) return false
        var isLeft = lowestCommonAncestor (node.left)
        var isRight = lowestCommonAncestor (node.right)
        var isMid = node == p || node == q
        if (isMid && isLeft || isMid && isRight || isLeft && isRight) {
            lca = node
        }
        return isLeft || isRight || isMid
    }
    isCommonPath (root)
    return lca
};