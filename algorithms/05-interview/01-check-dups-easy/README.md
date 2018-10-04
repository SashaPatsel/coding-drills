# INTERVIEW QUESTIONS

## Check for duplicates in a string - easy

## Instructions

Given a string, create a function that returns the same string, but without any characters that appear more than once.

## Example
Given "we all live in a yellow submarine", our function should return "vyosubmr". The string "vyosubmr" represents all the characters in the original string that were never repeated.

To clarify, if a character is repeated, we are NOT interested in keeping the first instance and deleting all the others. Rather, if any character is repeated, we should remove the first instance of that character as well as all the following instances. 

## Optimal time
O(n)

## Hints
- Keep track of each character using an object
