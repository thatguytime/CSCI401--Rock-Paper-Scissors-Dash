# Work in progress!

To view our current website **[click here](https://rockpaperscissorsdash.com/)**

---

## Prerequisite

Make sure to have:
- **Git**: version control for our project. Will track and save what you do. Required to copy (pull) and add (push) code to this repository. 

```bash
git --version
```

Download on macOS:
```bash
brew install git
```

Download on Linux (Ubuntu):
```bash
sudo apt update
sudo apt install git
```

- **React**: the frontend library that breaks up the code into *components*, allowing us to break the project up a lot easier. 

React depends on <code>Node.js</code> and <code>npm</code> (Node Package Manager), which both are needed:

```bash
node -v
npm -v
```

Download on macOS:
```bash 
brew install node
```

Download on Linux (Ubuntu):
```bash
sudo apt update
sudo apt install nodejs
sudo apt install npm
```

- **Vite**: a build tool that helps the application run quickly and efficiently. It is part of the <code>npm</code>, and does not needs to be downloaded. 

*Be sure* to check if the installation is successful by loading up a new terminal and checking the version. 

### Using Vite

In a Vite React project, the <code>dist</code> folder is where the final production build of your application is generated. When you run:

```bash
npm run build
```

Vite compiles, optimizes, and bundles your code, placing the output into the dist/ folder. This folder contains:
- Minified & bundled JavaScript (optimized for performance)
- Optimized static assets (CSS, images, fonts, etc.)
- An index.html file that serves as the entry point for your app

This folder is what you deploy to a hosting service (GitHub Pages). The <code>dist</code> folder is usually added to <code>.gitignore</code> since it's a *generated artifact* that doesn't need to be version-controlled.


## How to download and add to the code

*Cloning a repository*

Open up terminal (change to the directory you want to save to, or not) and type:

```bash
git clone https://github.com/paulcostanza/CSCI401--Rock-Paper-Scissors-Dash
```

Open up project in the IDE of your choice. 

Create a new branch (anything other than <code>main</code>):

```bash
git checkout -b whatever-you-want to call the branch
```

Work on the code. 

#### To run from your machine while coding:

```bash
npm run dev
```

This will open up the webpage in a browser that will update in real time with your code for testing and debugging

#### To trigger GitHub WorkFlow:

```bash
npm run build
npm run deploy
```

## To save work

Check the current status of what git has saved or not saved. This will show you what files have changed since you downloaded the current repo. 

```bash
git status
```

#### Add what you would like to *commit*

```bash
git add .
```

The <code>.</code> represents all files. If you want to only *commit* specific files, you can list them individually. 

#### Now commit

This saves all the files and code you worked on. This is the last step before pushing to the repo. 
```bash
git commit -m "whatever message you want to add to keep track of the commit"
```

#### And add it to the project:

```bash
git push origin your-branch-name
```

## Create a pull request (PR)

On GitHub, go to the repo and you will see an option to **Compare & pull request**. Follow that and describe your changes. 

I (Paul) will be able to merge your code into the codebase!

## Want the latest code?

When the repo owner (Paul) updates the <code>main</code> branch while you are working on your own branch, your local version gets out of sync! Do not worry, this is super common. Finish up your updates, just like what it says from **To save work** until **Create a pull request (PR)**. Then:

### Switch to the <code>main</code> branch

```bash
git checkout main
```

## Get the latest changes from the repo

```bash
git pull origin main
```

## Switch back to your branch

```bash
git checkout your-branch-name
```

## Merge the latest <code>main</code> into your branch

```bash
git merge main
```

If you get any conflicts do not worry, let me know and we will figure it out :smiley:


Conflicts: Git tells you which files have conflicts. Open those files, look for the conflict markers (<<<<<<, =======, >>>>>>), and manually fix them. Once they're fixed:
bash
Copy
Edit
git add .
git commit -m "Resolved merge conflicts"
Push your updated branch
bash
Copy
Edit
git push origin <your-branch-name>

---

# Database

#### Setting up Express + MongoDB

High-level overview of what to do:

1. Set up MongoDB
2. Set up Express server
3. Create a Schema for Users
4. Create Routes for User Operations
5. Connecting the Express Routes to the Server
6. Update User Data
7. Connect the Front-End
8. Deploy

Need to look into security, *especially* with password field in database

# To Do

- the project