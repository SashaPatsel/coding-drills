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
```
<img src="link/to-your/image.png">
```
The easiest way to add this image is to take a screenshot(s) of your app and to store that image somewhere in your file structure. 

#### Gifs

Gifs are a bit trickier. Rendering them once you have them is just fine. In fact its exactly the same as images. The only difference is that the file extension will be `.gif`.

It is making the gif of you using your app in the first place that is somewhat more complicated. There is no native way to do this, so we can install an extension (assuming you're using chrome) called [screencastify](https://www.screencastify.com/).

Once you've installed the extension, you can click on it in your browser. This will initiate a pop-up. In that pop-up you can choose whether you'd like to record your desktop or just the browser. Go ahead and select on of the options. Once you do so, you can start your recording. Go back and click the extension once you have finished your recording. There will be a pop-up that allows you to stop recording.

When your recording is finished, a new tab will open with your recently captured video. You'll notice that it is not in gif format, and if you want to convert it to a gif, you'll need to pay for the entire service. We are not going to do that. Instead, we'll download the file already provided to us. 

Once you've downloaded the screen capture with screencastify, visit [this link](https://ezgif.com/video-to-gif). You will find, right in the middle of the screen, a button that allows you to upload a file. Upload the file you just downloaded from screencastify. Once you've done so, click `upload file`.

This will allow you to crop the video to whatever range you choose. Once that's finished, you can finally downolad your gif, and store it within your app's file structure. 

### Description

This section should increase in size with the complexity/scope of your app. If you're making your first evert app in HTMl--maybe a wireframe with CSS, for example--you may not need a very lengthy description. 

If your making a README for a large group project, you may want to have a fairly lengthy overview of what the app does. 

As with any writing, you want to be informative, but not to the extent where the reader is overwhelmed with information. Give a high level overview of your app that touches on some of its highlights. 

### Technologies used

You always want to include a "Technologies Used" section. This is helpful to people interested in your app or even job recruiters looking to see what technologies you have experience with. 

Instead of listing the technologies you used like this:

HTML, CSS, javascript

You should display the tools you used to build your project like this:

- [HTML](https://html.com/)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [Javascript](https://www.javascript.com/)

This way, each technology is easy to read and the person perusing your README can read more about that technology by clicking on the provided link.

### For static applications (applications that don't run on a server)
 
 If you checked out the README template provided at the beginning of this guide and you're writing a README for an app deployed to github pages, or an app that doesn't run on a server, you may have noticed some sections in that template that don't quite apply to your project.

 These may include versioning, tests, installing and others. If you feel that a section doesn't quite fit, there's no need to include it.  