# Solutions

### Less efficient

One solution is a lot like a bubble sort. You compare to adjacent tiles. If a red tile is to the left of a blue tile, swap them. Do this until you reach the end of the line, and then start again. You only stop once all you've made it through one iteration without making a single swap.

### More efficient

A more efficient solution is to identify both the left-most (the first) red tile, and the right-most (last) blue tile. Swap them if the red is to the left of the blue (or vice-versa). Continue this until there are no swaps left to make.

The second solution is better because you don't need as many iterations through the line. If you have one blue tile stranded on the left, the first solution will have you make several loops through the line just to move the tile one spot at a time. 

The second solution does this exchange in one quick step. 