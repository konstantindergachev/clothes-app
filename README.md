# clothes-app
> Single page application

- [Website](https://wardrobeshop.herokuapp.com/)


## Quick Start

# Step 1 Clone repo
```bash
git clone git@github.com:konstantindergachev/clothes-app.git
```

# Step 2 Install dependencies for server side
```bash
yarn install -i or npm install
```
# Step 3 Go to the client side.
```bash
cd client
```
# Step 4 Install dependencies for client side
```bash
yarn install -i or npm install
```

# Step 5 Use your own social icons
# Step 6 Use your own favicon.ico:
```bash
client/public
```
and favicon directory
```bash
client/public/img/favicon
```
# Step 7 The real data stored in the firebase
- [firebase](https://firebase.google.com/)

For example, you need to create firebase-config.js file in src/config dir:

```bash
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
```
# Step 8 The payment data stored in the stripe platform
- [stripe](https://stripe.com/)
```bash
1. Sign up/Sign in on the stripe platform
2. Get the publishable_key and stripe_secret_key
3. You need to create stripe config file for client side
```
For example, you need to create stripe.js file in src/config dir:
```bash
export const clientConfig = {
  publishableKey: '******************************************',
};

4. Go to the root of project
cd ..
5. You need to create stripe config file for server side
```
For example, I use .env file in root dir of project:
```bash
STRIPE_SECRET_KEY=******************************************
```
# Step 9 Start this project from the root dir of project
```bash
yarn run dev or npm run dev
```

## Info
### Author
Konstantin Dergachev [portfolio](http://dergachevkonstantin.surge.sh/)
