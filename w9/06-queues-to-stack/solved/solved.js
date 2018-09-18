var Queue = function(data = []) {
  
  this.data = data

  this.add = function(record) {
    this.data.push(record)
  }

  this.remove = function() {
   return this.data.shift()
  }

  this.peek = function() {
    return this.data[0]
  }

}


var Stack = function() {
  this.q1 = new Queue([1,2,3,4,5,6,7])
  this.q2 = new Queue([])

  this.add = function(record) {
    while (this.q1.peek()) {
      this.q2
    }
  }

  this.remove = function() {

  }

  this.peek = function() {

  }
}