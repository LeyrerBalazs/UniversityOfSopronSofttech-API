Sofwaretech and Architecture
University of Sopron

This app show a MAP like google map and showing the cinema places and some data if somebody click on the marker.

The instalation is simple first you run the backend:
C:\>node ./backend/serverAPI.js

You wait some secound to run the server. If the server has started then you can run the web app with the following commands:

C:\>cd ./frontend
C:\>npm start

And you are done. The server is run now! Good Job

And some technical datas:

The backend is an express server written by node.js

The backend call Mongoose API becouse the Mongose has the DataBase with cinema datas.
The mongo DB (database) structure has collections like json structure.

Backend used modules:
- Mongoose
- Express
- Cors

The Web app has written by React-App
So it use HTML, CSS, JavaScript, JSX.
And some other modules:
- react-leaflet
- react

How to install first time?

C:\>cd backend
C:\>npm init
C:\>npm install express mongoose cors
C:\>cd ../frontend
C:\>npm install