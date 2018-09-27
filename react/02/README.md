# React

## Getting Started

Now that we've completed our initial setup, it's time to start building out the structure of our project. 

We'll be filling out three components in this exercise. Two will be "dumb" components, the other, a "smart" one. 

The most basic way to distinguish between "smart" and "dumb" components is to think of smart components as classes, and dumb components as const variables. 

In this exercise, we'll be building out reusable Nav and Input components, each of which will be featured in our landing page. 

`Important`: Regardless of whether a component is a class or not, we will always `import React from "react"`

## Instructions
1. In `Nav.js`, build out a Nav component which takes in props. Style the Nav as you see fit, but it should always be at the top of a given page. Inside a p tag, it should take `name` as props. Make sure whaterver is passed to this component as a `name` prop is found on the right hand side of our nav. Our app should say welcome, {props.name}.