# Final Projct mobdev COVID Tracker
 
This project was created using expo and react native. The target of this project is making a simple Covid tracker app for mobile.
the APIs used in this project are:
-[Global] (https://covid19.mathdro.id/api/)
-[indonesia] (https://indonesia-covid-19.mathdro.id/api/provinsi)

# Main Script
- app.js is where all of the other .js(Confirmed, Deaths, Recovered, List) are called and combined.
- Confirmed.js contain the code for showing the value of confirmed victims of COVID-19 globally which is fetch from global api.
- Deaths.js contain the code for showing the value of death victims of COVID-19 globally which is fetch from global api.
- Recovered.js contain the code for showing the value of recover victims of COVID-19 globally which is fetch from global api.
- List.js contain the code for showing the value of victims of COVID-19 (confirmed, recovered, deaths) in provinces in indonesia which is fetch from indonesia api.


### how to use this app

1. you need to clone this repositories and the go inside the foldr tha has been clone
```
$ git clone https://github.com/JonathanLeopold/Final-Projct-mobdev-COVID-Tracker.git
cd *(the location you clone this app)

```
2. run it on expo
```
*after you in the directories of the file
npm start
```
