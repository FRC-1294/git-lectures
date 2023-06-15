# 1- How to play AI-based tic-tac-toe

- Just use your browser (e.g. Chrome or Edge) to open index.html 
- It should work out-of-the-box 

- The AI player plays first by drawing an **X** to 1 of the 9 cells on the screen 

- The Human player plays by mouse clicking on one of the empty cells to draw an **O**

- Whoever gets 3 **Xs** or 3 **Os** first wins

- If you see *"not allowed to load local resource"* javascript error, use the instruction in section 3 to fix

# 2- Student Assigment

There is a bug in **ai.js** file. The defect prevent the AI player to win all the time. This assignment ask students to fix it in his/her own git branch. The expected workflow is

- Use **git clone command** to fet the latest code from [https://github.com/FRC-1294/git-lectures](https://github.com/FRC-1294/git-lectures)

        git clone git@github.com:FRC-1294/git-lectures.git assign1

- Create a bug-fix branch. Please branch off from latest commit in **main** branch and name it <your_name>/assign1

        git checkout main 
        git pull 
        git checkout -b thanh/assign1

- Fix the bug inside **ai.js** and test it - make sure the AI player never lose to the human player

- Push your <your_name>/assign1 branch to GitHub

        git push 

- Merge your change in the <your_name>/assign1 branch back to main branch locally
        
        See https://git-scm.com/docs/git-merge
        
# 3 "not allowed to load local resource" error

**index.html** should work out-of-the-box in windows, Mac or Linux filesystem. However if you see the javascript error, you can install a light web server and host the index.html to resolve the issue. Here are concrete steps:

- [Install Node.js](https://nodejs.org/en/download)
- Install a light web server (e.g. http-server node.js package)
    
        npm install -g http-server

- Open terminal/console, cd to the folder where the index.html is located and start the **http-server**

        http-server ./

- Type this address --  http://localhost:8080 -- to your browser
