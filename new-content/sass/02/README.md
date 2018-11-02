# Sass 

## Puppy Pal Part 2

In the last section, we did a lot of setup, but barely wrote any code. In this section, we'll be doing a little more setup, but we'll also jump into some sass code and already get a taste of some of sass's perks.

The setup we did in the last step gave us a lot of different files to work in. This structure works great for larger projects. For smaller projects, there is no need to create all these files. 

## Instructions
- From the root of your project, run `npm run sass` from the command line. `npm run` will look through your package.json for the next argument it receives. In this case, we wrote `sass`. Because we added something under that name in the last part, it will run the code we entered next to that command. 
- We'll start our setup in `base/_base.scss`. This is where we will put all of our resets or any other very general styling that will apply to almost every element.