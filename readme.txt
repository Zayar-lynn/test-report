Project setup guide
--------------------------
(You need to do step by step)

npm version - 6.13.4
node version - 12.16.0

1.Run apache server and sql server first. (xampp, wampp or standalone)

2.Create a database named "test_report" in sql server.

3.Go into the backend folder from the project folder. And edit 'host', 'user', 'password', 'database' in the connection.js from the Backend folder according to your device.

4.Enter the project's Backend folder from the 'terminal'. E.g."Zayar Lynn@DESKTOP-69LNLOL MINGW64 ~/Desktop/Projects/test_report/Backend"

5.Run these commands => npm install
		     => npm run migrate
		     => npm start
(If it completes without any error, the Backend project will start running with this url "http://127.0.0.1:4000")

6.Enter the project's Frontend folder from the 'terminal'. E.g."Zayar Lynn@DESKTOP-69LNLOL MINGW64 ~/Desktop/Projects/test_report/Frontend"

7.Run these commands => npm install
*(Run this command if you get an apex-chart error "npm install react-apexcharts")
		     => npm start
(If it completes without any error, the Frontend project will start running with this url "http://127.0.0.1:3000")

8.When you see the dashboard, click the ESG Readings button and save the report PDF.
