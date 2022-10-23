# StudentHelp
## <div align = "center" > ⭐ STAR THIS REPOSITORY THIS WILL PAY OF MY WORK </div>
![Hacktoberfest2022](/Images/hacktoberfest_banner.png)

Participate in Hacktoberfest 2022 by contributing to this beginner-friendly project. Get your PRs merged today!💫✅🤩

Student are often unaware and miss out on some really great oppurtunities 😥 that could have helped them scale their career 💹 . My aim is to gather information about every
little possible oppurtunities be it a Student Program like Github Campus Expert, or Microsoft Learn Student Ambassador program or some kind of internship or hackathons 
or a communinty program like Hacktoberfest itself. This is where I'll be needing your help💫.

# What is Hacktoberfest? 🤔

It is a month-long celebration from October 1st to October 31st presented by [Digital Ocean](https://www.digitalocean.com/blog/hacktoberfest-2022-your-mission-for-open-source) and DEV Community collaborated with [GitHub](https://github.blog/2022-10-04-expand-your-open-source-contributions-during-hacktoberfest-2022/) to get people involved in [Open Source](https://github.com/open-source). You can create your very first pull request to any public repository on GitHub and contribute to the open-source developer community.

# Rules 🔥
To qualify for the official limited edition Hacktoberfest shirt, you must register here and make four Pull Requests (PRs) between October 1-31, 2022 (in any time zone). PRs can be made to any public repository on GitHub, not only the ones with issues labeled Hacktoberfest. This year, the first 40,000 participants who complete the challenge will earn a T-shirt 👕 or a you can choose to plant a tree 🌳 for you.

# Steps to follow 📜
You can follow the following guiding steps to contribute to our repository. You are recommended to read CONTRIBUTING.md to understand the contribution guidelines.

## How to set up on local system

First of all "fork" the repository.

To make your own local copy of the repository you would like to contribute to, let’s first open up a terminal window.

We’ll use the `git clone` command along with the URL that points to your fork of the repository.

This URL will be similar to the URL above, except now it will end with `.git` . In the cloud_haiku example above, the URL will look like this:

https://github.com/your-username/StudentHelp.git

You can alternatively copy the URL by using the green “Clone or download” button from your repository page that you just forked from the original repository page. Once you click the button, you’ll be able to copy the URL by clicking the binder button next to the URL:

Once we have the URL, we’re ready to clone the repository. To do this, we’ll combine the `git clone` command with the repository URL from the command line in a terminal window:

```
git clone https://github.com/your-username/StudentHelp.git
```

## Create a New Branch

To create your branch, from your terminal window, change your directory so that you are working in the directory of the repository. Be sure to use the actual name of the repository (i.e. StudentHelp) to change into that directory.

```
cd StudentHelp
```

Now, we’ll create our new branch with the `git branch` command. Make sure you name it descriptively so that others working on the project understand what you are working on.

```
git branch new-branch
```

Now that our new branch is created, we can switch to make sure that we are working on that branch by using the git checkout command:

```
git checkout new-branch
```

Once you enter the git checkout command, you will receive the following output:

```
Output:

Switched to branch 'new-branch'
```

At this point, you can now modify existing files or add new files to the project on your own branch.

# What Changes you need to do ? (Objective)✅



All you need to do is set this repository on yout local system and then open the index.html folder. You'll see a sections marked where you add sequentially under the <tr> tag in a <td> tag
1. the name of the oppurtunity
2. when does it opens 
3. when does it closes
4. type: Student program, internship, hackathon, community program or anything you think is apporopriate
5. Website to apply or learn more about it. It can be a link to your own blog or something helpful you read online.
  
  
  Thats pretty much it, that's all you need to do. Now push your changes and Create a Pull request get your PRs merged today.
  check the issues section for more issues.(if available)




## After Changes Locally

Once you have modified existing files or added new files to the project, you can add them to your local repository, which you can do with the `git add` command. Let’s add the `-A` flag to add all changes that we have made:

```
git add -A
```

or

```
git add .
```

Next, we’ll want to record the changes that we made to the repository with the git commit command.

The commit message is an important aspect of your code contribution; it helps the other contributors fully understand the change you have made, why you made it, and how significant it is. Additionally, commit messages provide a historical record of the changes for the project at large, helping future contributors along the way.

If you have a very short message, you can record that with the `-m` flag and the message in quotes:

Example:

```
git commit -m "Updated Readme.md"
```

At this point you can use the `git push` command to push the changes to the current branch of your forked repository:

Example:

```
git push --set-upstream origin new-branch
```

# Update Local Repository

While you are working on a project alongside other contributors, it is important for you to keep your local repository up-to-date with the project as you don’t want to make a pull request for code that will cause conflicts. To keep your local copy of the code base updated, you’ll need to sync changes.

We’ll first go over configuring a remote for the fork, then syncing the fork.

### Configure a Remote for the Fork

Next, you’ll have to specify a new remote upstream repository for us to sync with the fork. This will be the original repository that you forked from. You’ll have to do this with the `git remote add` command.

```
git remote add upstream https://github.com/souvikrajsingh/StudentHelp.git
```

In this example, `upstream` is the shortname we have supplied for the remote repository since in terms of Git, “upstream” refers to the repository that you cloned from. If you want to add a remote pointer to the repository of a collaborator, you may want to provide that collaborator’s username or a shortened nickname for the shortname.

### Sync the Fork

Once you have configured a remote that references the upstream and original repository on GitHub, you are ready to sync your fork of the repository to keep it up-to-date.

To sync your fork, from the directory of your local repository in a terminal window, you’ll have to use the `git fetch` command to fetch the branches along with their respective commits from the upstream repository. Since you used the shortname “upstream” to refer to the upstream repository, you’ll have to pass that to the command:

```
git fetch upstream
```

Switch to the local master branch of our repository:

```
git checkout master
```

You’ll now have to merge any changes that were made in the original repository’s master branch, that you will access through your local upstream/master branch, with your local master branch:

```
git merge upstream/master
```






