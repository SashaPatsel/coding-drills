# Ruby

## Functions and imports - store owner pt.3 

## Intro
Functions in ruby work and look a lot like they do in javascript. When we covered loops, we saw that ruby did not inlcude curly braces as a way to contain logic. The same is true for ruby's functions. 

We will also see that import content from other files. 

## Syntax

### Functions
Rather than using curlies, we use indentation and the `end` keyword to contain our logic. 

So in javascript, a typical function will look like this:

```javascript

function math(num1, num2) {
  return num1 + num2
}

```

Whereas in ruby, the same function looks like:

```ruby
def math(num1, num2) 
  return num1 + num2
end

```

### Imports
Remember how we require files or packages in Node? We can actually use the exact same keyword here!

In Javascript, it looked like this
```javascript
require("./helpers")
```

In ruby, it's almost exactly the same!
```ruby
require "./helpers" 
```
Once we require a file in ruby, we still need to specifiy what we want from that file. We can do so using the keyword `include`. 


## Modules


## Instructions
