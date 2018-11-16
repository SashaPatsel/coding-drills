# Git

## Working with teams using git


## Table of Contents

1. [Introduction](#introduction)

2. [Setting Up](#setting-up)

3. [Branches](#branches)

4. [Pull Requests](#pull-requests)

5. [Pulling from Master](#pulling-from-master)


### Introduction
Github can be at times an incredibly useful tool, at other times, it can be very frustrating--especially when collaborating on the same repo with others.

In this guide, we'll be covering topics from the basics of working with git in teams, to best practices that can help you use github seamlessly.

Without further ado, let's start from the top.

### Setting Up
Before we write any code, every person in your group should have access to the same project. 

- Create a new repo for your project if you haven't already. We will only need to create this project on one person's github. Delegate one member to host the group's project on their github.

- Once the repo is created, visit the main page for the new repository. Towards the top of the page, you'll find a tab called `settings`. Click on settings.

<img src="images/gh-setting.png">

- Towards the left of the screen, after you've hit settings, you'll see a tab `collaborators`. Click on it.

<img src="images/gh-collab.png">

- Once you've clicked on the `collaborators` tab, you'll see an input. Enter all of your team members github usernames, full names or email address into this input one at a time. This should send each member in your group an email invite.

<img src="images/gh-invite.png">

- What the above steps do is allow your group members access to work on the original repo. Normally when you clone down another's repository, you will not be able to push up to it (though you can pull new content down). Adding collaborators will allow everyone in the group to push to the original repository even though it is not on their own github.

### Branches
If you've been working on projects with github alone. You should be very used to the following: `git push origin master`. What you're doing here is actually a specific set of instructions. You are pushing your changes up to a single, specific branch. That branch happens to be called `master`.

`You do not need to push your changes to the master branch`. In fact, you actively want to `avoid` doing so when you are working as a member in a group. 

`Each member in your group should be working in their own respective branch(es)`. This is essential.

Github is great because it is very careful about not letting collaborators overwrite each other's work.

Github is also frustrating because it is very careful about not letting collaborators overwrite each other's work.

So long as you follow best practices, you should be able to keep github working smoothly and only as a super-friendly tool. Use a flawed work flow, and github will give you headaches. 

`Have everyone in your group clone down the repository from whoever's github is hosting it.`

Once you have done so, navigate to that repo from the command line.  

Before you proceed, delegate roles for everyone to work on in your group.

From the root of the repository in the command line, have everyone type in the following command: `git branch <BRANCH NAME>`. Remember, <BRANCH NAME> is a stand in for what you will actually name your branch. In this case, everyone should replace <BRANCH NAME> with whatever feature/role you've all agreed they'll be working in. If you were not able to delegate roles at this point, it is ok, for now, to simply have each group member's name be a stand in. For example:
`git branch joe`

Once you've run the above command, you'll notice that it still says `[master]` in terminal/bash. This is because all you have done is create the branch. You have not yet checked out to that branch. This is working very similarly to `mkdir`. When you create directory/folder from the command line, you have only created that folder. You still need to `cd` to that folder to work within it.

The equivalent to that `cd` in git is `git checkout <BRANCH NAME>`. Run this command with the appropriate branch name, and you should see that the branch you created will replace `[master]` in terminal/bash.

In sum:

<img src="images/branch-checkout.png">

### Pull Requests

When you and your group members create separate branches, you are creating `separate commit histories`. Until you `merge` (we'll talk more about this soon), you will not see your group members' updates. You are working in separate branches so that you can all work on the same project without ruining/overwriting each other's work.

When working in your own branch, your interactions with github will look like this:

<img src="images/push-to-branch.png">

Note that we are no longer pushing to master. Rather we are pushing to the branch we created. In this case, it is a branch called javascript. It can be named anything, but a best practice is to name your branches after features. 

When you push to a branch, you are pushing to only that branch. In other words, if I push to `javascript`, the changes I made will not be reflected in `master`.

To merge your changes to master, you will need to create a pull request.

You may notice that after you push to your branch, your github's project page might look a little different. 

<img src="images/pull-request.png">

Once you click on the button circled above, you should see the following page. 

<img src="images/pull-request-page.png">

There are two things circled on the screenshot above. The first is great news: `"Able to merge"`. This means that there is no conflict between the content in the javascript branch and in the master branch. To be clear, javascript can add to or remove from what was originally in the master branch. What would stop us from being able to merge would be if someone wanted to change something we had just changed. Github, being impartial, would not take sides in the conflict.

Thankfully, if we are unable to merge for whatever reason, github will also provide an interface for you to see the discrepencies in the code, and to resolve them directly.

The second thing that is circled is the `create pull request` button. If you're prepared to add your content to the master branch, go ahead and click this button.

That will take you to this page:

<img src="images/merge-pull.png">

When you click on the button above, it will ask you to confirm whether or not you want to merge the pull request. As always, github is being extremely careful with merging work from different collaborators. If you are sure you want to update the master branch with your latest changes, go ahead and hit `confirm` after you click the `Merge pull request` button.

CONGRATULATIONS! If everything went just as lined out in the instructions above, you have successfully merged a pull request to the master branch.

However, there are some important things to understand while merging pull request. The first, and perhaps most important, is the nature of the master branch:

- The `master` branch is meant to represent the best available working model of your group's project. `You should not merge broken/disfunctional/under-development code to the master branch`. 

- You can push up to your branch as many times as you'd like before merging. Continually save your changes with github, and then merge when you have a working change to submit.

- You should `not` merge your own pull requests. This is in fact why it is called a request. Though you can merge your own pull request (a feature which you can change in github's setting), it is not the best practice. The idea is that you are `requesting` to update the team's work with your latest, working changes. Therefore, a group member should review your changes before they're merged.


- As you can see here, the commit history for the entire project is updated after the merging of the pull request:

<img src="images/commit-update.png">


### Pulling from Master
