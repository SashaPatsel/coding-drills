# Search Trees

## Building a Tree, Pt.1

## Instructions

By the end of this 3-part exercise, we'll build a tree capable of breadth-first and depth-first searches.

In order to accomplish this, we'll be creating two constructors: one for the tree itself, and one for each individual node. 

In part one, we'll be building the constructor for each individual node. 

The constructor will have the following properties:

- data: a variable pointing to the data that was given to an instance of the Node.
- children: an array of all a given node's child nodes.
- add: a function which takes an argument of data, and adds a new node with the data handed down from the argument to the children array.
- remove: a function which takes an argument of data, and returns th children array, but without the nodes specified in "data".

In prompt.js, you are given nothing. In hint.js, you are given the skeleton of the constructor, as well as some hints.