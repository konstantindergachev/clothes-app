# clothes-app
> Single page application

## Quick Start

```bash
# Step 1 Clone repo
git clone git@github.com:konstantindergachev/clothes-app.git

# Step 2 Install dependencies for server side
yarn install -i or npm install
# Step 3 Go to the client side.
cd client
# Step 4 Install dependencies for client side
yarn install -i or npm install

# Step 5 Use your own social icons
# Step 6 Use your own favicon.ico in the client/public dir and favicon directory in the client/public/img/favicon dir
# Step 7 The real data stored in the firebase
For example, you need to create firebase-config.js file in src/config dir:
export const firebaseConfig = {
  config: {
    apiKey: '******************************************',
    authDomain: '******************************************',
    databaseURL: '******************************************',
    projectId: '******************************************',
    storageBucket: '******************************************',
    messagingSenderId: '******************************************',
    appId: '******************************************',
    measurementId: '******************************************',
  },
};

# Step 8 The payment data stored in the stripe platform https://stripe.com/
## 1. Sign up/Sign in on the stripe platform
## 2. Get the publishable_key and stripe_secret_key
## 3. You need to create stripe config file for client side
For example, you need to create stripe.js file in src/config:
export const clientConfig = {
  publishableKey: '******************************************',
};
## 4. Go to the root of project
cd ..
## 5. You need to create stripe config file for server side
For example, I use .env file in root dir of project:
STRIPE_SECRET_KEY=******************************************

# Step 9 Start this project from the root dir of project
yarn run dev or npm run dev


## Info
### Author
Konstantin Dergachev

### Version
1.0.0

### License
This project is licensed under the MIT License