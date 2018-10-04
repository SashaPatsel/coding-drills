# INTERVIEW QUESTIONS

## Conforming characters

## Instructions

Given a string, determine if qualifies as a `conforming string` or not.

A `conforming string` is defined as one in which each unique character is repeated n amount of times. You may perform one deletion in an attempt to make the string conform. If it does not conform after 0 or 1 deletions, the string does not have conforming elements.


## Example

Given "aa1133ff", your function should output true. Each character appears exactly twice. There is no need for any deletions. 

Given "llkkmmccc", your function should output true. Each character appears twice except c, which appears three times. However, if you use your single deletion on one of the cs, each character appears twice.

Given "llkkmmcccc", your function should output false. Each character appears twice except c, which appears four times. If you use your single deletion on a c, you are still left with three. The number of cs does not conform with the number of other elements, so it is not a `conforming string`.