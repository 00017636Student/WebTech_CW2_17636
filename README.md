# WebTech_CW2_17636
This is the project for my cw2 Web technology module

# About the app
- Hello, dear user. This project is a web application which was created for the Web Technology cw2. 
- The reason why I made this project was to practice and showcase my skills in using modern web frameworks and software tools which I developed during the Semester 2. I chose to make an apllication about reviewing books because I love reading books and especially writing down my own reviews about the ones which I read in the paper diary. However, I prefer typing on keyboard rather than writing by hand. For this reason, I decided to somehow manage my needs and create this application.

 ## Features
 In this application you can do multiple things like:
 -Navigating through the website with navigation bar which is located on the top left corner. By doing so you can go to home page by clicking book icon or go to All reviews or Add review pages.
 -Moreover, from the home page you also can go to the All reviews and Add review pages
 -You can create a new review and put all the relevant information like book's title, genre, author, how you would rate this book and write your overall opinion about it
 -All the created reviews are showed in All reviews page
 -You can edit them and change the information to more relevant or fully delete a review
 -However, before deleting there will be a confirmation message which you need to whether cancel or confirm
 -If the review text will be too long you should not worry because the textarea in form will grow and the card which holds the information, too

 # Project Setup Guide

Follow the steps below to set up and run the project locally.

## Prerequisites

Before you start, make sure you have the following installed:
- **Node.js**: If you don't have Node.js installed, download it from [Node.js Official Website](https://nodejs.org/en/download).

## Steps to Set Up

1. **Download or Clone the Repository**

   - **Option 1**: Download the `17636` folder and open it in VS Code.
   - **Option 2**: Clone the repository using Git:
     git clone https://github.com/00017636Student/WebTech_CW2_17636
   - Open the project folder in your VS Code.

2. **Install Project Dependencies**

   - Open the terminal in your project folder and run:
     npm install

3. **Start the Application**

   - After the installation is complete, run the following command to start the server:
     npm start

4. **Access the Application**

   - Once the server starts, open your browser and go to:
     http://localhost:3000/
   - Alternatively, you can click the link shown in the terminal.

## Dependencies:

The project requires the following dependencies:

- **express**: Web framework for Node.js
- **express-validator**: Module which is widely known for data validation
- **body-parser**: Simplifies the parsing of incoming request bodies
- **pug**: A templating engine for Node.js
- **nodemon**: Automatically restarts Node.js server if sees changes

# Project Structure

```
17636/                           # Root folder
├── 📁controllers/              # Controller logic folder
│   └── 📄review.js
├── 📁data/                     # Database
│   └── 📄reviews_db.json
├── 📁public/                   # Public folder for UI essential files
│   ├── 📁css/
│   │   └── 📄styles.css          
│   ├── 📁js/
│   │   └── 📄scripts.js         
│   └── 📁images/
├── 📁routes/                   # Folder which keep controllers for specific route groups 
│   ├── 📁api/
│   │   ├──  📄index.js       
│   │   └──  📄review.js    
│   └── 📁web/
│       ├──  📄index.js       
│       └──  📄review.js       
├── 📁services/                 # Folder with service layer logic
│   └── 📄review.js
├── 📁validators/               # Folder with user input validation rules
│   └── 📄review.js
├── 📁views/                    #Folder with UI logic 
│   ├── 📁review/
│   │    ├── 📄all.pug       
│   │    └── 📄CreateAndUpdate         
│   └── 📄index.pug     
├── 📁.gitignore/
├── 📄app.js                     # Main entry point            
├── 📄LICENSE                    # License file for the project              
├── 📄package-lock.json              
├── 📄package.json               
└── 📄README.md                      
```

## External links
- https://github.com/00017636Student/WebTech_CW2_17636 My GitHub public repository
- link to my hosted on Glitch application
