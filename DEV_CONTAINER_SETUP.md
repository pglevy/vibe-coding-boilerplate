# Getting Started with Dev Containers (No Terminal Required!)

This project now uses Dev Containers, which means **you don't need to install Node.js** or run any terminal commands. Everything happens automatically!

## One-Time Setup (15 minutes)

You only need to do this once on your machine:

### 1. Install Docker Desktop

Download and install Docker Desktop for your operating system:

- **Mac**: [Download Docker Desktop for Mac](https://www.docker.com/products/docker-desktop/)
- **Windows**: [Download Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/)

After installing:

- Open Docker Desktop and let it finish starting up (you'll see a green light in the menu bar/system tray)
- You can minimize it - it just needs to be running in the background

### 2. Install the `Dev Containers` VS Code Extension

In VS Code:

1. Open the Extensions panel (Command/Ctrl + Shift + X)
2. Search for "Dev Containers"
3. Install the extension by Microsoft (it has a blue verified checkmark)

That's it for setup! You never have to think about Docker or Node.js again.

## Opening the Project (Every Time)

### First Time Opening

1. **Open the project folder** in VS Code (File → Open Folder)
2. **Look for the popup** in the bottom-right corner that says "Reopen in Container"
3. **Click "Reopen in Container"**
4. **Wait 1-2 minutes** while it builds (you'll see progress in the bottom-right)
5. **You're done!** The dev server starts automatically

The project is now running at `http://localhost:5173` - just open that in your browser!

If you missed the popup, you can also:

- Click the green icon in the bottom-left corner of VS Code
- Select "Reopen in Container" from the menu

### Subsequent Times

After the first build, opening the project is much faster:

1. Open the local project folder in VS Code
2. Click "Reopen in Container" (or it may reopen automatically)
3. Wait 10-30 seconds
4. The server starts automatically - open `http://localhost:5173`

## Working with the Project

Everything works exactly the same as before:

✅ Add `.tsx` files to `/src/pages/`  
✅ Browser refreshes automatically when you save  
✅ No `npm install` or `npm run dev` needed - it's automatic!
✅ Use the Terminal in VS Code only if needed to run other commands

## Stopping the Server

Just close VS Code or click the green icon in the bottom-left and select "Close Remote Connection"

## Troubleshooting

**"Docker Desktop is not running"**

- Open Docker Desktop and wait for it to start (green light)

**"Cannot connect to container"**

- Make sure Docker Desktop is running
- Try: Command/Ctrl + Shift + P → "Dev Containers: Rebuild Container"

**Port already in use**

- Close any other VS Code windows that might have the dev server running
- Or stop Docker containers: open Docker Desktop → Containers → Stop the running container

**Something's broken?**

- Close VS Code
- Open Docker Desktop → Containers → Delete the vibe-coding-boilerplate container
- Reopen the project and rebuild (it will start fresh)

## Benefits vs. Old Setup

**Before**: Install Node.js → Open Terminal → Run `npm install --legacy-peer-deps` → Run `npm run dev`

**Now**: Open project → Click "Reopen in Container" → Done!

Plus everyone on the team gets the exact same environment, so "it works on my machine" problems disappear!
