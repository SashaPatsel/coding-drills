var Node = function(data) {
  this.data = data
  this.children = []

  this.add = function(data) {
    this.children.push(new Node(data))
  }

  this.remove = function(data) {
    // Returns a the children array but without node's whose data === data.
    this.children.filter(function(node) {
      return node.data !== data
    })
  }
}

var Tree = function() {
  this.root = null

  this.breadth = function(func) {
    var arr = [this.root]

    while (arr.length) {
      var node = arr.shift()
      for (var i = 0 ; i < node.children.length ; i++) {
        arr.push(node.children[i])
      }

    func(node)
      
    }
  }

  this.depth = function() {

  }
}