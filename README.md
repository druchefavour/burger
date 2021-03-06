# SEQUELIZE BURGER RESTAURANT

## Eat-Da-Burger! APP

## Overview
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.
Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
The app will store every burger in a database, whether devoured or not.

In this app, a burger logger with ```MySQL```, ```Node```, ```Express```, ```Handlebars``` and a homemade ```ORM``` is created.

The app follows the MVC design pattern; Node and MySQL are used to query and route data in the app, and Handlebars is used to generate the HTML.

## Procedure
* Make a package.json file by running ```npm init``` from the command line.
* Install the Express npm package: ```npm install express --save```.
* Create a ```server.js``` file.
* Install the Handlebars npm package: ```npm install express-handlebars --save```
* Install the method-override npm package: ```npm install method-override --save```
* Install the body-parser npm package: ```npm install body-parser --save```.
* Install MySQL npm package: npm install mysql --save
* Require the following npm packages inside of the ```server.js``` file:
	*``` express ```
	* ```method-override```
	* ```body-parser```
* In ```server.js``` 
	* Serve static content for the app from the "public" directory in the application directory
	* Parse application/x-www-form-urlencoded
	* Override with POST having ?_method=DELETE
	* Require express-handlebars
	* Require mysql

## Database Setup
* Inside the burger directory, create a folder named db.
* Create ```schema.sql``` and ```seed.sql``` and inside ```schema.sql``` create datatbase: burgers_db and table 'burgers':Use mySql workbench
* Run the ```schema.sql``` and ```seeds.sql``` files into the mysql server from the command line

## Config Setup
* Create a folder named config. inside your burger directory
* Create files ```connection.js``` and ```orm.js``` and populate these files. 
* Populate ```orm.js``` to select, create and update the database 

## Model Setup
* Create ```burger.js``` in models directory
* Import ```orm.js``` into ```burger.js```
* Create the code that will call the ORM functions using burger specific input for the ORM.
* Export ```burger.js```

## Controller Setup
* Create controllers folder 
* Create ```burgers_controller.js``` under the controllers folder
* In ```burgers_controller.js``` import express and ```burger.js```
* Populate ```burgers_controller.js``` and export router to ```server.js```

## View Setup
* Create a folder named views inside the burger directory.
* Create the ```index.handlebars``` file inside views directory
* Create the layouts directory inside views directory.
* Create the ```main.handlebars``` file inside layouts directory

