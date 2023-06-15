# How to play AI-based tic-tac-toe

- Just use your **browser** (e.g. Chrome or Edge) to open index.html 
- It should work out-of-the-box 
- if you see **"not allowed to load local resource"** javascript error, use the below guide to work around


## How to fix "not allowed to load local resource: blob:null" error


**index.html** should work out-of-the-box in windows, Mac or Linux filesystem. However if you see the javascript error, you can install a light web server and host the index.html to resolve the issue. Here are concrete steps:

- [Install Node.js](https://nodejs.org/en/download)
- Install a light web server (e.g. http-server node.js package)
    
        npm install -g http-server

- Open terminal/console, cd to the folder where the index.html is located and start the **http-server**

        http-server ./

- Type this address --  http://localhost:8080 -- to your browser

