# Algos

## New developments in the city

San Francisco's mayor has been put in a tough spot. On the one hand she's being pressured to grow and develop the city. On the other, she is being asked to preserve the old look and feel of the city.

The mayor relies heavily on programmers like us. She's come up with a plan. She's commisiomed YOU to come up with a program that tells her the maximum height you can increase the buildings in the city while still maintaining the skyline.

## Instructions
Given a matrix (an array of arrays), return the max height you can increase all the buildings while maintaining the sky line.

The skyline is defined by the tallest buildings (the highest value in a row or column in the matrix) viewed from "north" "east" "west" or "south".

## Example 
Imagine you are given the following matrix:
```
[ 
  [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] 
]

```

If we look from the "north", we see the tallest buildings are 9 (arr[2][0]), 4 (arr[1][1]), 8 (arr[0][2]), and 7 (arr[1][3]).

So if we were only looking from the north, we'd be able, in the first column increase the 3, 2 and 0 to 8, because they are still smaller than 9... You can still see the "9" building.

However, you need to take all the other buildings into account. 

The completed matrix would look like this:

```
[ 
  [8, 4, 8, 7],
  [7, 4, 7, 7],
  [9, 4, 8, 7],
  [3, 3, 3, 3] 
]
```

However, that is not what we want to return. We want to return 35, which is the sum of how much all the non-tallest buildings were increased.

Don't let the mayor down. Give her your algorithm in prompt.js
