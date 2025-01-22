# Shorty Shooters Web
Source code for the website hosting [Shorty Shooters](https://github.com/HuskyGameDev/2024f-team5).

![image](https://github.com/user-attachments/assets/f8766832-464b-4e0f-b2f5-3b72a8c57d9b)


## To update or host a different Godot game
1. Run your godot project in compatability mode (very top right corner).
2. Ensure that your export templates are updated.
   1. Editor > Manage Export Templates...
   2. I download from "Official GitHub Releases mirror", though I'm not certain this is necessary.
   3. Hit download and install.
3. Export the project.
   1. Project > Export
   2. Click on "Add..." if "Web (runnable)" preset isn't showing up.
   3. Export Project to an empty folder and copy and paste everything into "/game" inside repo OR export directly into "/game".

## Testing the server
1. Navigate to repo in terminal. Ensure that you're in the parent directory with .git files and not in "/game"
2. Run the following command:
   ````shell
   npx http-server . -o -p 9999
   ````
   1. Ensure that you have node, npm, and npx installed.
   2. You may be prompted to install "http-server" if you haven't run this before. Just confirm. It's not malware, I promise.
   3. "." tells the command what directory to open this. You can replace this with the full directory if you didn't navigate to the folder.
   4. "-o" tells the OS to open the test website in the default web browser through localhost.
   5. "-p" 9999 tells the server to host on port 9999, so the ip address should look something like "127.0.0.1:9999".
