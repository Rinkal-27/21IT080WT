        // This script will detect the browser and its version
        // var browser = navigator.appName;
        // var b_version = navigator.appVersion;
        // var version = parseFloat(b_version);
        // if(browser == "Microsoft Internet Explorer" && version >= 4)
        // {
        //     document.write("You are using Internet Explorer");
        // }
        // else if(browser == "Netscape" && version >= 3)
        // {
        //     document.write("You are using Netscape");
        // }
        // else
        // {
        //     document.write("You are using some other browser");
        // }

        // We will make code browser compatible thus if the browser doesn't support the ES6 syntax then we will transpile the code to ES5 syntax using babel
        
        // Using an arrow function
        const greet = (name) => {
            console.log(`Hello, ${name}!`);
            };
            greet('World');
    
            // Using a template literal
            const message = `The answer is ${2 + 2}`;
            console.log(message);



//npx babel src --out-file lib/mycode.js
// This will transpile all the code in the src folder and output it to the lib/mycode.js file. The transpiled code will be printed to the console, but no files will be written to disk.
// Alternatively, you can use the --watch option to watch your source files for changes and automatically transpile them when they are modified:
//npx babel src --out-dir lib --watch
//This will transpile all the code in the src folder and output it to the lib folder. Babel will watch your source files for changes and automatically transpile them when they are modified.