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

  // Create two dummy stacks to work with. 
  this.stack1 = new Stack([1,2,3,4,5,6,7])
  this.stack2 = new Stack([])
  // Nothing too special here, just adding an entry to the top of our "first pile of books".
  this.add = function() {
    this.stack1.push(record)
  }


  this.remove = function() {
    // Move all the entries to the empty stack. Stop when there's nothing when we "peek" in the first stack
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop())
    }
    // Store the top value on the second stack
    var record = this.stack2.pop()

    // Put the elements back in the first stack. Do so until there are no more elements in the second stack.
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop())
    }

    return record

  }

  this.peek = function() {
    // Same thing as above, except we're just looking rather than removing
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop())
    }

    var record = this.stack2.peek()

    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop())
    }

    return record
  }
  
}



