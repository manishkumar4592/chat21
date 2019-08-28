//import { firebaseConfig } from '../environments/firebase-config'; // please comment on this line when changing the values ​​of firebase {}
export const environment = {
  production: true,
  version: require('../../package.json').version, // https://stackoverflow.com/questions/349076002/how-to-display-app-version-in-angular2
  remoteConfig: false, // for performance don't load settings from remote
  firebase: {
    apiKey:"AIzaSyDvQaRqiSt00cJMwJ_TVLomgMbeAaBnjm0I",
    authDomain: "news.firebaseapp.com",
    databaseURL: "https://news.firebaseio.com",
    projectId: "news",
    storageBucket: "news.appspot.com",
    messagingSenderId: "3002632004000026"
  },
  apiUrl: 'https://api.tiledesk.com/v1/',
  tenant: 'tilechat',
  defaultLang : 'en'
};
