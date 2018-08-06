# So you think you can API? Pt.2

## Learn to use brand new APIs!

Similar to the last exercise, you will be getting returns from an ajax call, and rendering them to the DOM. The difference is that this time, you will allow your users to select the returns that they get from the API.

We will be using a small form to get user data that we will then use to make a request to the eventbrite API.

Follow the steps below to make it happen!

### Step 1: Get your API key

Visit [this link](https://www.eventbrite.com/myaccount/apps/) to get your API key. When you open the form, don't worry about the fields like application website or description. You can paste any link or description. Once you hit `Create Key`, you should have all the credentials you need to use the eventbrite API.

Note: You will be using `Your Personal OAuth token` for this query

### Step 2
Visit [this link](https://www.eventbrite.com/developer/v3/endpoints/events/), and study the structure of the requests you can make to the eventbrite API. 

In this exercise, we will be making an app which allows the user to choose the location, category of event as well as the cost of the event. The queries included in our url (as per the documentation) are: 

- q
- location.address
- price

In step 2, you need to figure out how to make a proper request to the eventbrite API. 

Before you grab the values of the user input, try and make a request to this API with values you made up. It's important to first test that we can successfully query the eventbrite API before we move on to the next step.

Once the console.log(response) given to you comes back as a proper response, you'll know you've completed this step.

### Step 3

