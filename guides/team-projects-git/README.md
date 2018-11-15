# Git

## Working with teams using git


## Table of Contents

1. [Introduction](#introduction)

2. [Setting Up](#setting-up)

3. [Branches](#branches)

4. [Pull Requests]


### 1. Introduction
Github can be at times an incredibly useful tool, at other times, it can be very frustrating--especially when collaborating on the same repo with others.

In this guide, we'll be covering topics from the basics of working with git in teams, to best practices that can help you use github seamlessly.

Without further ado, let's start from the top.

### 2. Setting Up
Before we write any code, every person in your group should have access to the same project. 

- Create a new repo for your project if you haven't already. We will only need to create this project on one person's github. Delegate one member to host the group's project on their github.

- Once the repo is created, visit the main page for the new repository. Towards the top of the page, you'll find a tab called `settings`. Click on settings.

- Towards the left of the screen, after you've hit settings, you'll see a tab `collaborators`. Click on it.

- Once you've clicked on the `collaborators` tab, you'll see an input. Enter all of your team members github usernames, full names or email address into this input one at a time. This should send each member in your group an email invite.

- What the above steps do is allow your group members access to work on the original repo. Normally when you clone down another's repository, you will not be able to push up to it (though you can pull new content down). Adding collaborators will allow everyone in the group to push to the original repository even though it is not on their own github.

### 3. Branches
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

```
[master]: git branch javascript

[master]: git checkout javascript

[javascript]: 

```

### 4. Pull Requests

When you and your group members create separate branches, you are creating `separate commit histories`. Until you `merge` (we'll talk more about this soon), you will not see your group members' updates. You are working in separate branches so that you can all work on the same project without ruining/overwriting each other's work.