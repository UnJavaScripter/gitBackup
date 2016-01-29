### Wut?
So yesterday GitHub was down, I pushed my changes from the office but I wasn't able to pull them into my home computer, so I used the free time to create this simple tool.

### TL;DR
1. `npm install`
2. Inside the same machine clone a repo you want to keep updated all the time
3. `node app.js PORT REPO_PATH` like `node app.js 1337 ../myAwesomeApp`. [See Arguments](#arguments)
4. Create [a webhook for your repo](https://developer.github.com/webhooks/) and make it call a 
5. Setup [a git server](https://git-scm.com/book/en/v2/Git-on-the-Server-Setting-Up-the-Server)

##### Arguments

| Argument     | What it does |
|---|---|
| PORT | A port accessible from the Internet |
| REPO_PATH | The repo's path from **gitBackup**'s location |

### Ok tell me more

gitBackup will run on an always-on machine accessible from anywhere (in my case a Raspberry Pi, but could be a virtual machine or anything!).

The always-on machine (lets call it **Tom**) needs to have a copy of the repo you want to have updated all the time so gitBackup can run a `git fetch --all` && `git pull --all` any time there is a push on your repo.

**Tom** needs to be accessible from the Internet so it can receive POST request by [a GitHub webhook](https://developer.github.com/webhooks/).

When **Tom** receives a request from the webhook it will simply cd into your repo's folder and update it.

Then you can access your repo by ssh'ing into **Tom** or even _proer_, you can set up a [a git server](https://git-scm.com/book/en/v2/Git-on-the-Server-Setting-Up-the-Server).