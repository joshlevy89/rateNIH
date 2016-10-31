This project pulls data from 'https://open.fda.gov/''

Only guaranteed to work in chrome. 

To run locally,   
npm install myFDA
cd myFDA
npm run dev...to run in development mode     
npm run prod-test...to run in production mode  

Note that if you run in production mode, you will need to delete the bundle folder in the public folder to make changes. Otherwise, the old bundle will be served from that folder. 

Built using the react-hot-boilerplate by Dan Abramov: https://github.com/gaearon/react-hot-boilerplate