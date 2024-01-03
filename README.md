**Software Techniques and Architectures**
University of Sopron


This app shows a Map of Sopron.
On the map you can find cinemas in this area, indicated with a marker. and you can find the cinema places and some data if somebody click on the marker.
If you click any of these markers, you will get some data about the cinema.

**Install**

The installation is simple, first you have to run the backend server:
C:\>node ./backend/serverAPI.js

After some seconds the server will be UP.
When the server has started, you can run the web-app with the following commands:

C:\> cd ./frontend
C:\> npm start

DONE. The web-app with the server in the back is running now!


**Technical details**

The backend is an express server written with node.js.

The backend calls the Mongoose API because the Mongoose has the Database with the cinema datas.
The MongoDB database structure has collections like .json structure.

Backend modules:
- Mongoose
- Express
- Cors

The web-app has written in React-App.
Therefore it use HTML, CSS, JavaScript, JSX.

Some other modules:
- React-leaflet
- React

First time installation:

C:\> cd backend
C:\> npm init
C:\> npm install express mongoose cors
C:\> cd ../frontend
C:\> npm install
