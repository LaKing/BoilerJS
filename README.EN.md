# ßoilerplate

ßoiler is a modular framework for Javascript based projects, mainly NodeJS web applications

## What is it good for? Why should I need this? Why am I reading this?

Think of this as two things: ß and a boilerplate.

### ß - I usually say "the boiler-variable", or it can be called Eszett (IPA: [ɛsˈtsɛt]) or "sharp S" - is a global variable and a directory structure.

Yes, yes, I know, global variables are bad, and pollute the scope. Yes, so we pollute the scope with this singe special character.
We attach functions and some objects to that variable, and this will run a modular structure to build up our project(s).

### The boilerplate itself is a modular structure to start a project with. 

The current default framework-project is a bit MEAN, but rather friendly. It uses MongoDB, Express, AngularJS, NodeJS, Passport, and many others. Take a look at the modules to get the idea. So once the whole thing is started you actually have something you can extend, override, and build further.

## Getting Started

Clone the repo into folder where you want to start your project. I usually use /srv/codepad-project, since we are workin with the etherpad based ep_codepad. 
You can make, no you should make the boilerplate folder readonly, and create a modules folder to put your own modules and to override existing modules or parts of existing modules.
Please do not modify the boilerplate content in your project! Any file that is present outside of the boilerplate folder, in the project folder will override.
So, an example of the structure would be:
```
/srv/codepad-project  # the project folder
/srv/codepad-project/boilerplate   # the readonly skeleton
/srv/codepad-project/modules   # the custom modules for the project
...
```
Take a look at the project_scripts, you may want to move it to the project, edit it eventually and run a few of them.

## Running the installer

Well, I use red Hat based systems so if you know what DNF is, you can run the installer.
You will need NodeJS and npm of course. There are some npm.sh files in the modules, these will install the node_modules of the modules.
NOTE: modules are ßoilerplat modules, and node_modules are npm packaged modules. Unfortunatley npm has no standard for example for location of publicly visible files. Some npm modules use a /dist folder, some others some different folders, so we crate wrapper modules to define express routes. 

### Other files to consider

You can start your project with server.js that you copy from the project_scripts folder. There is not much in there:
This should be sufficient if your folder structure is ok.

```
require("./boilerplate");

```
## What modules are used.

Generally, all modules are used, except if they are blacklisted, or the module-condition.js file evalutes to false. 

## My code style

Sorry, I dont like camel case so much. My variables contain some underscores and are longer. My bad.

## Others

if you see this:
```
ł(this);
Ł(some_variable, or_two_variables);
```
Don't panik. These two are just logging functions, mainly used in development.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Documentation