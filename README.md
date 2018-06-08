# PersonalWeb
Run the Node.js binary no matter what
You can't always assume running $ node file.js will just work. The user might have the node binary in a non-standard location. They might be using a Node.js version manager like nvm, which is sourced in a subshell and not available from the outside. It also depends from where you're trying to run it. For example, GUI apps on macOS doesn't inherit the $PATH, so the node binary would not be found. Most projects that depend on Node.js just end up telling the user to manually set the full path to the node binary in some project specific settings. Now every project has to do this. Ugh... I prefer things to just work. With this module it will.

This Bash script uses some tricks to find the Node.js binary on your system and run it.

Can be used from any environment that can spawn a process (Shell, Python, Ruby, Swift, Objective-C, etc).

npm

install

$ npm install run-node

Usage

$ ./node_modules/.bin/run-node file.js
Or in an npm run script:

{
"start": "run-node file.js"
}

