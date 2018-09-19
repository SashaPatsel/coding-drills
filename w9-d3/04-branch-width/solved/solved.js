function branchWidth(root) {
  var arr = [root, "stop"]

  var widths = [0]

  while(arr.length > 1) {
    var node = arr.shift()
    if(node === "stop") {
      widths.push(0)
      arr.push("stop")
    } else {
      for (var i = 0 ; i < node.children.length ; i++) {
        arr.push(node.children[i]) 
      }
      widths[widths.length -1] ++
    }
  }

  return widths
}

var Node = function (data) {
  this.data = data
  this.children = []

  this.add = function (data) {
    this.children.push(new Node(data))
  }

  this.remove = function (data) {
    // Returns a the children array but without node's whose data === data.
    this.children.filter(function (node) {
      return node.data !== data
    })
  }
}

var root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);

console.log(branchWidth(root))