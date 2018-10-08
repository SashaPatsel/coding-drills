# Python

## Changing our program based on the user's input


## Intro


### Dictonaries
In Python, objects are called dictionaries. Other than the name though, the behave much.

The following is an example of a dictionary in Python:

```python
    user =	{
      "name": "Joe Shmoe",
      "job": "software",
      "age": 36,
      "children": ["Ricky", "Bobby", "Bob", "Dylan"]
    }
``` 

You can also initialize an object to null values like so:

```python
user = dict.fromkeys(["name", "job", "age", "children"])

```
A dictionary, just like an object, is simply a set of key/value pairs. 

### Loops
Python has for loops just like javascript, only with some syntactic diffrences.

For one thing (pun intended), we don't need parentheses or curly braces. Instead, we use a colon at the end of the condition, and simply indent the code to be executed (in other words, what would be in curlies in javascript).

```python
warriors = ["curry", "durant", "thompson", "green", "iguodala", "cousins"]

for i in warriors:
  print(i + " plays on the best team in the NBA")
```

Iterating through an object looks a little different:
```python
    user =	{
      "name": "Joe Shmoe",
      "job": "software",
      "age": 36
    }
    for key, value in user.items():
        print('your {0} is {1}.'.format(key, value))
```

We use the items method to let the loop know that we are iteration through an object.

We use the format method to let the loop know what we are refering to when we print the above string.

Notice too that we did not use a closing tag of any sort. It is the indentation (or lack thereof) on the next line that takes care of that. 

Finally, let's take a look at the while loop in Python.

One way to get out of a while loop is to meet the condition we initialized it with, but that is not the only way. There are two key words to remember: `break` and `continue`. Break will back us out of the loop, while continue re-executes the code before it. 

```python
count = 1

while count < 10:
  print(count)
  if count == 5:
    print("buzz")
  if count == 9:
    break  
  count+=1
```

### Conditionals
After examining the for loops above, you may

### Continue/Break



## Instructions

# COVER INPUTS
# COVER CONCATENATION