# INTERVIEW QUESTIONS

## Return the consecutive sets - medium

## Instructions
Given a sorted array of integers, return the same integers broken down into consecutive sequences.

## Example
Given [1,2,3,6,7,8,15,18,19,21,22,24], we want to return [[1,2,3],[6,7,8],[15],[18,19,21,22,24]]. 

In short, we want to return an array of arrays. Each sub-array should only contain consecutive, non-sorted integers. If an integer does not have a consecutive neighbor, it should be in a sub array of its own, like the 15 in the example above.

## Optimal time
O(n)

## Hints
- Use a while loop.

