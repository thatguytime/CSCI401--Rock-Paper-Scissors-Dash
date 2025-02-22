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


## How to download the code

*Cloning a repository*

Open up terminal (change to the directory you want to save to, or not) and type:

```bash
git clone https://github.com/paulcostanza/CSCI401--Rock-Paper-Scissors-Dash
```

Change into the folder and install *dependencies*. 

#### To run from your machine while coding:

```bash
npm run dev
```

This will open up the webpage in a browser that will update in real time with your code. 

#### To trigger GitHub WorkFlow:

```bash
npm run build
npm run deploy
```

## To save work

Check the current status of what git has saved or not saved
```bash
git status
```

#### Add what you would like to *commit*

```bash
git add .
```

The <code>.</code> represents all files. If you want to only *commit* specific files, you can list them individually. 

#### Now commit
```bash
git commit -m "whatever message you want to add to keep track of the commit"
```

#### And add it to the project:

```bash
git push origin main
```

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