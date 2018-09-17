var Stack = function(data = []) {
 
  this.data = data

  this.add = function(record) {
    this.data.push(record)
  }

  this.remove = function() {
    return this.data.pop()
  }

  this.peek = function() {
    return this.data[data.length -1]
  }
}


var Queue = function() {

  this.stack1 = new Stack([1,2,3,4,5,6,7])
  this.stack2 = new Stack([])

  this.add = function() {
    this.first.push(record)
  }

  this.remove = function() {
    while (this.first.peek()) {
      this.second.push(this.first.pop())
    }

    var record = this.second.pop()

    while (this.second.peek()) {
      this.first.push(this.second.pop())
    }

    return record

  }

  this.peek = function() {
    while (this.first.peek()) {
      this.second.push(this.first.pop())
    }

    var record = this.second.peek()

    while (this.second.peek()) {
      this.first.push(this.second.pop())
    }

    return record
  }
  
}



