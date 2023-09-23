# Project description
This is an individual project created by me (Chhorm Bunthai) to make a Todo list app that has functions include:
- Implement the function to create a task
- Delete the content of todos
- Modify existing content
- Rerender tasks in the form of a list

# [APP DEMO](https://todo-list-bt.vercel.app/)
# Technology Used
The main technologies used in this project include:
- React
- JavaScript
- JSX (JavaScript XML)
- CSS (Cascading Style Sheets)
- Git and github 
- External libraries:
    - Google fonts : [link](https://fonts.google.com/specimen/Lato?query=lato)
    - Vite (for building fast and optimized web applications)
    - bootstrap : [link](https://getbootstrap.com/)
# Installation
### Clone it to your local machine
> git clone https://github.com/anb-hq/code404_Bunthai_TodoList.git<br>
> cd code code404_Bunthai_TodoList<br>
> npm install<br>
> npm install react-bootstrap bootstrap<br>
> npm run dev

# Git flow methods
1. Main branch
- store the stable version of app
2. Develop branch
- This branch is use as the app developing integreation
- Any feature that created are merged into develop branch
- Represents the latest state of the application with features being developed.
3. Feature branch
- Feature branch responsible for the app features
- Feature branches derived from develop branch and it can not merge to main branch
4. Release branch
- Release Branches
    - Create a release branch from the develop
    - Release branched :
        - release/1.0
5. Bugfix branch
- If any bug appear when demo the app after release
6. Hotfix
- used to quickly patch production releases. Hotfix branches are a lot like release branches and feature branches except they're based on main instead of develop.
# Convention guide:
Convention guide can be accessed [here](https://www.notion.so/Convention-Guide-Todo-React-App-1-207f0a11b6ae44f687ddcc906ca2a5cf?pvs=4)
# Other Documents
- [App Flow](https://drive.google.com/file/d/1yRpQYafJ6CQJS9l5hhTRrL-X4d0nfiOV/view?usp=sharing)
- [UI](https://www.figma.com/file/AnThVbLMKUlMmVr3FwG7IR/Todo-list-APP?type=design&node-id=0%3A1&mode=design&t=ZHVhmU2enG3LThKA-1)
# How I work on this project:
- First I divide this project to have 3 components:
- For TaskCreating, I created it to get input from user and then get that data to display on screen 
- For TaskShow, I used it for display information that get from TaskCreating and display it as a list and then I add I add delete button and edit button for user can delete or modify the content depend on user.further more, I also create a checkbox for use to mark which task already done.
- For the TaskEdit component, I created to display for the edit.
# What I've Learned from this project:
- I understand a lot about passing props and use Hooks(useState) more clearly
- I learning how to handle components
- I learning more about function in react and other JavaScript method as well
# Contributor
- For this project, I do it all myself. but there some resources that I used to make this project happen such as  Recommendation course (Modern React with Redux [2023 Update]) in Udemy and I also do research on Google as well such as [MDN](https://developer.mozilla.org/en-US/) ad\nd so on
