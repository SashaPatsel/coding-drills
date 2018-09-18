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
// This is a very inefficient way to create a Queue, which is why this exercise may be challenging...

// It may help to think of these as stacks of books. A stack of books is, well... a stack. When we pile one book on top of another, the first book we can take is the last one we placed. If we don't take the top book out first, the pile topples. 

// The way we want the stack of books to behave is like a queue. We want to be able to get the bottom book out. This is where the second stack comes in. Imagine we have a stack of three books, and an empty pile. To get the book at the bottom--in other words, to mimick the behavior of a queue--we need to take the top book from our first pile, and move it to our empty pile. Then we move the next book, and finally the last. We've just turned our stack upside down, which is sort of a queue. To get the value we're looking for, we just take the top book from the stack we just created, which was the book at the bottom of the other stack. Finally, we need to reverse the process and put all the remaining books back so that our queue retains FIFO behavior. 

// Obviously, this is an incredibly inefficient way of making a queue, but being able to do this demonstartes your understanding of both data structures. This is somewhat like the Hanoi Towers (look up the exercise on Google if you are unfamiliar)

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

    // Put the elements back in the first stack
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



