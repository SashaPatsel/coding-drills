# Guide

## How to make a good README.

READMEs are an extremely important part of your software projects. 

When someone visits your project home on Github, one of the first things they'll see is your README. Think of it as how a house looks from the outside. You can have a house with king size beds, clean tiling etc... but if it looks ugly from the outside, it definitely takes away from the overall beauty of the house.

A README is much the same. It is the outside of the house. Just like the outside of a house doesn't impact the living experience inside the house, a README does not affect the functionality or aesthetics of an app. Nevertheless, both the outside of a house and a README make a very strong first impression

A good README includes some of the following:
- An informative description of the app
- Some pictures for previews, guides, or even just to break up the monotony of text (gifs are great too)
- A list of the technologies used to build the app. 
- Instructions on how to use the app
- Some snippets of code to give a sense of what's going on under the hood. 

### Before we dive into each part of your README individually...

There are many good templates for READMEs out there that provide structure. Using one of these templates can be super helpful and makes writing a README more of an "insert information here" process. 

You can google templates on your own, but [here's a good one to get you started](https://gist.githubusercontent.com/PurpleBooth/109311bb0361f32d87a2/raw/8254b53ab8dcb18afc64287aaddd9e5b6059f880/README-Template.md)
hdh

### The Heading

If you initialize your repository with a README, a heading with the name of your repository will already be included in that README. If this is the case, you may want to remove the `-` characters or whatever you are using in the place of spaces. 

Either way, the main heading is usually the name of your app. You can make this heading with an <h1> tag, or one `#`.

Additionally, it is best to make your app as accessible as possible. If you want to create a link to your app from the heading, the syntax is as follows:

[<h1>App Name</h1>](www.website.com)

### Pictures and Gifs

Pictures and/or gifs bring your README to life. They are easily the most interesting thing to look at off the bat in your README.

#### Images

Images are simple enough. The syntax is the same as it is in HTML:

<img src="link/to-your/image.png">

The easiest way to add this image is to take a screenshot(s) of your app and to store that image somewhere in your file structure. 

#### Gifs

Gifs are a bit trickier. Rendering them once you have them is just fine. In fact its exactly the same as images. The only difference is that the file extension will be `.gif`.

It is making the gif of you using your app in the first place that is somewhat more complicated. There is no native way to do this, so we can install an extension (assuming you're using chrome) called [screencastify]()

### Description

This section should increase in size with the complexity/scope of your app. If you're making your first evert app in HTMl--maybe a wireframe with CSS, for example--you may not need a very lengthy description. 

If your making a README for a large group project, you may want to have a fairly lengthy overview of what the app does. 

As with any writing, you want to be informative, but not to the extent where the reader is overwhelmed with information. Give a high level overview of your app that touches on some of its highlights. 





### For static applications (applications that don't run on a server)