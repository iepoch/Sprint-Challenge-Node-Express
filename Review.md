# Review Questions
# Initial Commit - Stefan Clem

## What is Node.js?
> The way I see Node.js is it like the compiler for the Javascript applications outside of the browser. It is refered to as the runtime enviroment which that a program that will run other programs much like a traditional compiler would.

## What is Express?
> Express is a application framework. It a component based setup that provides functionatlity like routing, api's, with some middleware added. It will sit on top of you Node.js http server module.
## Mention two parts of Express that you learned about this week.
> Custom Middleware how to create it and use it. The Routing which was fun to be able to pull everything from the server file and create the routes in their own folders.
## What is Middleware?
> Middleware are types of functions that can get the request and response of obejecs. Middleware then can either send a response back or can have you move on to another piece of middleware in the line.

## What is a Resource?
> Everything is a resouce and it is aviable through a unique URI. However, resources can have multiple representations. It can be over stateless protcols. And you will manage a resource through HTTP methods.
## What can the API return to help clients know if a request was successful
>  And API can return a .status() back to know if a request was successful.  The .status() method  can be used to send any HTTP status code.

## How can we partition our application into sub-applications?
> Routers are the best way to split the application into sub-applications. I love the modular piece of routers because it makes it easy to find what you need to update and maintain.

## What is express.json() and why do we need it?
> The express.json() allows us to read the data from the request body. Epxress will then take all the informatio and make it avaiable as a nice Javascript object for us.