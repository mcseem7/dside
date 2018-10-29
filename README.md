Frontend start development: 

====================

1. npm start 

2. npx cra-universal start
   
        or

1. npx cra-universal start --both


Frontend building application:

====================

sudo npm run cra-nginx

After building: 

   - Now you can upload dist into your hosting server
   - After that, you can run npm install --production inside dist/
   - Finally you can bootup your server using your favorite Node process manager (PM2)

To start the application:

   pm2 start dist/server/bundle.js >> Server creating to port 3001



Frontend location:
frontend/

Backend location:
backend/

Backend is powered by Django/Python 3.5.2.
Read docs: https://docs.djangoproject.com/en/2.0/
Dependencies: requirements.txt


Frontend was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

