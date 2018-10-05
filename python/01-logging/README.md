# Python

## There are many ways to console a log

Python is a server-side scripting language. In other words, it can only be used on the back-end. Python is an alternative to Node.

Python has many syntactic differences to Node, but for the most part, functions in much the same way.

As you see more Python, you will notice it looks very much like regular text. This is pn purpose. Python was designed to look like the English language.

Without further ado, let's get started.

## Intro

We'll start out with the absolute basics:
- Declaring variables
- Console.log(ging).
- Commenting

### Variables
In Python, we do not need a variable declaration like var, let or const. Instead, we skip all of that and just make the variable declaration. 

In Node:
```
var animal = "chicken"
```

In Python:
```
animal = "chicken"
```

See, not too much of a difference. The key thing to remember is, in Python, just drop the key word var, let or const. Otherwise it's exactly the same.

### Console.logs
In Python, we don't log to the console. Rather, we `print` to it.

In Node:
```
console.log("chicken")
```

In Python:
```
print("chicken")
```

Again, that's it, that's really the only difference. Instead of `console.log()`, we simply write `print()`


### Comments
Finally, we'll cover comments. In Python, we use one hash for a comment as opposed to two slashes. So:


In Node:
```
// I'm writing something informative about my code
```

In Python:
```
# I'm writing something informative about my code
```

Python and Javascript also both support mulit-line comments:

In Node:
```
/* I'm writing something informative about my code */
```

In Python:
```
""" I'm writing something informative about my code """
```

In Python, we use three quotation marks `"""` as opposed to a `/` and a `*`. However, it is convention to use the has syntax, so as much as possible, write single line comments using the hash `#`.


## Instructions
- Declare ten variables and set them to whatever values you'd like. However, you must use at least four different data types.
- Print every single one of those variables to the command line.
- Run you script by using `python prompt.js`, as opposed to `node prompt.js`.
