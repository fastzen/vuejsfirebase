# vuejsfirebase

> A Vue.js 2 and Firebase project 

## Build Setup

A config.js file is required in the src directory. This should take the form:

```
export const config = {
  apiKey: 'xxxxxxxx-xxxxxxxxxxxxxx-xxxxxxxxxxxxxxx',
  authDomain: 'your-firebase-app.firebaseapp.com',
  databaseURL: 'https://your-firebase-app.firebaseio.com',
  storageBucket: 'your-firebase-app.appspot.com',
  messagingSenderId: '999999999999'
}
```

``` bash
# install dependencies
npm install
or
yarn install

# serve with hot reload at localhost:8080
npm run dev
or
yarn run dev

# build for production with minification
npm run build
or
yarn run dev
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
