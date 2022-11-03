# **Game Library**
**Welcome** to your personal game **library**. This app let you create any **game** you desire. Imagine being able to make something so cool and personal that you can show your friends and family.
<br>
<br>
# The app

![library](https://user-images.githubusercontent.com/107008047/199635623-7e08990a-e065-4c82-bc31-34c9fa9b4f54.png)

![Screen Shot 2022-11-02 at 8 17 29 PM](https://user-images.githubusercontent.com/107008047/199635708-dfcb3294-4368-418b-8570-3f175b0d9989.png)
<br>
<br>
# The Technologies Used:
**Javacript** | **HTML** | **CSS** | **Node.js** | **Express** | **React** | **MongoDB** | **Mongoose** 
<br>
<br>
# Getting Started:
Click The link below to get started<br>
https://github.com/bjlovee/game_library.git
<br>
<br>
# Next Steps
In the future I plan to add a featue that let the user play the game they choose. I woiuld also like to add a third party music player.
<br>
<br>
<br>
# Game (MVP)
Action | URL | HTTP Verb | JSX view filename | mongoose method 
--- | --- | --- | --- |--- 
Index | /games/ | GET | Index.jsx | game.find() | game.find()
Show | /games/:id/ | READ | Show.jsx | game.findOne or game.findById | 
New | /games/new | GET | New.jsx | none | 
Create | /games/ | POST | none | game.create(req.body) | 
Edit | /games/:id/edit | GET | Edit.jsx | game.findOne or game.findById | 
Update | /games/:id | PUT | none | game.findByIdAndUpdate or game.findOneAndUpdate | 
Destroy | /games/:id | DELETE | none | game.findByIdAndRemove or game.findByIdAndDelete |
<br>
<!-- # User
Action | URL | HTTP Verb | JSX view filename | mongoose method 
--- | --- | --- | --- |--- 
Index | /users/ | GET | Index.jsx | game.find() | user.find()
Show | /users/:id/ | READ | Show.jsx | user.findOne or user.findById | 
New | /users/new | GET | New.jsx | none | 
Create | /users/ | POST | none | user.create(req.body) | 
Edit | /users/:id/edit | GET | Edit.jsx | user.findOne or user.findById | 
Update | /users/:id | PUT | none | user.findByIdAndUpdate or user.findOneAndUpdate | 
Destroy | /users/:id | DELETE | none | user.findByIdAndRemove or user.findByIdAndDelete | -->