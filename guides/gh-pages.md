# Deployment

In this activity we will deploy the Pupster app to github pages.

## Instructions

1. Create a new repository on github. Do not initiliaze it with a readme (this can cause a merge conflict in github).

2. Navigate to your app in the command line and run git init.

3. Navigate to the page for your new project on github and copy the link you would normally use to clone it down. 

4. On the command line, enter `git remote add origin <the link you just copied>`

5. Add, commit and push to github (if you have trouble, enter `--force after your push`). If you refresh github, you should see all your files there

6. From the command line, run `npm install --save-dev gh-pages`. You normally don't want to use npm and yarn interchangeably in the same app, but yarn doesnt work the same as npm in this particular case.

7. Within your package.json, add the following line. Replace the link with the one you copied in the last step
```
"homepage": "https://sashapatsel.github.io/pupster-app/",
```

8. In github, go to setting > github pages > set the main branch to master > save > scroll back down > copy the new link that should appear under github pages.


9. Copy these lines within `scripts` in your `package.json`:
```
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
```

10. run `yarn deploy`. You may need to run yarn install if you're thrown an error here

* Note: Your version of gh-pages may affect your ability to run deploy. if you have version 2, switch it t 1.2 in your package.json, then run yarn.

* try to .gitignore node_modules

* You should see a pull request in github.

11. In settings, change your gh-pages branch to gh-pages (as opposed to master under source).




### Hints

* Make sure you add and commit all changes before pushing up to Heroku.

* If your deployment fails, run `heroku logs` while in the project directory. This should print all of the logs produced from the failed deployment. Usually the issue can be found at the start of any errors.

* Ask an instructor or TA for help if you get stuck. Help your neighbor if you finish early!
