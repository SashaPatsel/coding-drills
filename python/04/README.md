# Python

## MORE SYNTAX!!!

## Intro

In this exercise, we'll be expanding our knoledge of python to include functions and imports. 

With that knowledge, we'll be making a command-line calculator!

## Examples

### Functions
Functions in python are defined using the term `def`. As you've seen with other code in python, the colon and indentation will replace the use we would get from curly braces in javascript.

```python

def greeting(name):
  """
  In Python, there is commenting syntax other than hashes. 
  You'll often find comments like this one inside of functions in python. 
  These are called docstrings. They are multi-line comments that describe what a function does. 
  """
  print("Hello, " + name)

```

### Imports
Imports in Python are incredibly straightforward. There is no need to even export code.

We can import variables and functions from other files with ease.

```python
from helpers import greeting

# We can use the asterix to import multiple functions too. As in several other languages, the * means all.

from helpers import *
```

### elif
In addition to functions and imports, let's take note of the `elif` key word. `elif` is simply the equivalent of `else if` in javascript.

## Instructions
