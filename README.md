# shortly-express
This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on with a pair.

# Shortly Express
Get ready for full-stack app development with Shortly! Shortly is a URL shortener service similar to Bitly - but is only partially finished. Your goal is to build out an authentication system and other features that will enable users to have their own private set of shortened URLs.

While some aspects of the authentication system have been provided, you will need to think about how to approach authentication from both a user perspective and a technical perspective. Some questions to think about:

What additional steps will the user need to take when interacting with the application? More specifically, what additional routes will the application need to handle?

What strategies do I need to employ to secure existing site functionality?

How often should the user need to enter their username + password?

# What's in this Repo
This repo contains a functional URL shortener designed as a single page app. It's built using Backbone.js on the client with a Node/Express-based server, which uses EJS for server-side templates.

It uses MySQL, an open-source relational database management system (RDBMS).

Server side, the repo also uses express 4. There are a few key differences between express 3 and 4, foremost that middleware is no longer included in the express module, but must be installed separately.

Client side, the repo includes libraries like jQuery, underscore.js and Backbone.js. Templating on the client is handled via Handlebars.

This repo includes some basic server specs using Mocha. It is your job to make all of them pass, but feel free to write additional tests to guide yourself. Enter npm test to run the tests.

Use nodemon so that the server automatically restarts when you make changes to your files. To see an example, use npm start, but see if you can improve on this.
