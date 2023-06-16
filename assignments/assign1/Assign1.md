# 1- How to play AI-based tic-tac-toe

- Use your browser (e.g. Chrome, Edge or Firefox) to open index.html file 
- It should work out-of-the-box 

- The AI player plays first by drawing an **X** to 1 of the 9 cells on the screen 

- The Human player plays by clicking on one of the empty cells to draw an **O**

- Whoever gets 3 **Xs** or 3 **Os** -- in a line -- first wins

- If you see *"not allowed to load local resource"* javascript error, use the instruction in section 3 to fix

# 2- Student assigment #1

There is a bug in **ai.js** file. The defect prevent the AI player to win all the time. This assignment ask students to fix it in his/her own git branch.

The below **git clone** command uses **ssh** protocol. Students might want to check if they already have a pair of public/private keys on local computer -- pair of files named something like **id_rsa** and **id_rsa.pub** in **~/.ssh** directory

        launch GitBash app
        $ cd ~/.ssh
        $ ls -la
        total 42
        -rw-r--r-- 1 doant 197609 2602 Jun 15 20:15 id_rsa
        -rw-r--r-- 1 doant 197609  566 Jun 15 20:15 id_rsa.pub
        ...

> if **~/.ssh/id_rsa** pair of files not found, you can run **ssh-keygen** to generate the required pair of public-private key files.

        ssh-keygen
        -- Press <Enter> key for empty passphase 
> Once you have **~/.ssh/id_rsa** pair of files, copy ~/.ssh/id_rsa.pub to your clipboard, and paste the content of **id_rsa.pub** key to your GitHub account

         clip < ~/.ssh/id_rsa.pub
         Go to https://github.com/settings/keys
         Click on "New SSH key" 
         Paste the content from clipboard to add a new SSH key

Now use **git clone** command to fetch the latest code from [https://github.com/FRC-1294/git-lectures](https://github.com/FRC-1294/git-lectures)

        git clone git@github.com:FRC-1294/git-lectures.git assign1

Then create a bug-fix branch. Please branch off from latest commit in **main** branch and name it <your_name>/assign1

        git checkout main 
        git pull 
        git checkout -b thanh/assign1

Fix the bug inside **ai.js** and test it - make sure the AI player never lose to the human player

Push your <your_name>/assign1 branch to GitHub

        git push 

Merge your change in the <your_name>/assign1 branch back to main branch locally
        
        See https://git-scm.com/docs/git-merge
        
# 3 "not allowed to load local resource" error

**index.html** should work out-of-the-box in windows, Mac or Linux filesystem. However if you see the javascript error, you can install a light web server and host the index.html to resolve the issue. Here are concrete steps:

- [Install Node.js](https://nodejs.org/en/download)
- Install a light web server (e.g. http-server node.js package)
    
        npm install -g http-server

- Open terminal/console, cd to the folder where the index.html is located and start the **http-server**

        http-server ./

- Type this address --  http://localhost:8080 -- to your browser
