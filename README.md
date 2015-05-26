# Play-with-ng
My first steps using AngularJS

## Useful definitions

* **What is AngularJS?** - A client-side JavaScript framework for adding interactivity to HTML.
* **What is Directive?** - A marker on HTML tag that tells Angular to run or reference some JavaScript code.
* **What is Module?** - Container for the different parts of our app – controllers, services, filters, directives, etc.
* **What is Expressions?** - How we insert dynamic values into our HTML.
* **What is Controller?** - Where we get the data to the page and define our app`s behavior by defining functions and values.

## Tips and tricks

* **Using the `controllerAs` syntax** - The `controllerAs` syntax uses `this` inside controllers which gets bound to `$scope`. It is syntactic sugar over `$scope`. We can still bind to the View and still access `$scope` methods.
* **Using vm with `controllerAs` syntax** - Use a capture variable for `this` when using the `controllerAs` syntax. Choose a consistent variable name such as `vm`, which stands for ViewModel. The `this` keyword is contextual and when used within a function inside a controller may change its context. Capturing the context of `this` avoids encountering this problem.
