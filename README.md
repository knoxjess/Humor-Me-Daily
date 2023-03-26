# Humor-Me-Daily


## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Links](#Links)
- [Visual](#Visual)
- [Questions](#Questions)


## Description

Welcome to [Humor Me Daily]! This is the place where you can come to find a daily dose of humor and laughter. Our blog is all about sharing funny comments, witty remarks, and clever comebacks that are sure to brighten up your day.

We believe that laughter is the best medicine, and that's why we've created this blog as a space for people to come together and share their favorite funny comments. Whether you've overheard something hilarious on the street, read a funny quip on social media, or come up with a witty one-liner yourself, we want to hear about it!

So sit back, relax, and get ready to laugh out loud. We hope that our blog will bring a little bit of joy and levity into your life, and that you'll join us in spreading the humor far and wide.

## Installation

1. To install application, clone the main project via the HTTP or SSH link on github.

```
git clone
```

2. Once cloned, open up the project folder in your text editor and run the following command in terminal to install all dependencies.

```
npm install
```

## Local-Usage

# Initial setup

Create an '.env' file in the main directory path and include the following data:

```
DB_NAME='your_database_name'
DB_USER='your_mysql_username'
DB_PW='your_mysql_password'
```

Once your '.env' has been created with the corresponding data, open up the schema ('db/schema.sql') and update the database label to match with the database you included in your '.env' file.

# Database reset

Before seeding the data, make sure to reset the database by setting 'force: false' to 'true' in the 'server.js' file and type this command in terminal:

```
npm start
```

After that, revert back to 'false' and exit the server by typing

```
control + c
```

# Seeding starter data into database and starting the server

To seed the database with the starter data, type this command in terminal:

```
npm run seeds
```

To start the server, type in terminal:

```
npm start
```

From there, you are ready to use the application!


## Links


## USED TECHNOLOGIES

- Node.js
- Express.js
- Handlebars template engine
- Bcrypt
- Express sessions
- Sequelize
- Dotenv
- MySQL2
- Heroku
- JavaScript

## Visual
![Screenshot 2023-03-26 at 4 35 08 PM](https://user-images.githubusercontent.com/110634800/227806495-486a2493-a9f6-4c28-a443-a6344ed40be5.png)
![Screenshot 2023-03-26 at![Screenshot 2023-03-26 at 4 35 32 PM](https://user-images.githubusercontent.com/110634800/227806499-9aa2bb54-1163-4877-9811-aa381f5980a1.png)
 4 35 15 PM]![Screenshot 2023-03-26 at 4 35 40 PM](https://user-images.githubusercontent.com/110634800/227806504-e67356f1-543f-4cf2-9b85-f6b505df07fb.png)![Screenshot 2023-03-26 at 4 35 47 PM](https://user-images.githubusercontent.com/110634800/227806508-679e6d07-e0d5-4418-ad9e-1642b9331b73.png)

(https://user-images.githubusercontent.com/110634800/227806497-299b2a77-604d-4f01-a3cb-0cd2766d421e.png)


## Questions

If you have any questions, please contact me at: Jessy1234592@gmail.com




