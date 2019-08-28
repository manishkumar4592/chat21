// The file contents for the current environment will overwrite these during build2.
// The build2 system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build2 --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// tslint:disable-next-line:max-line-length
//import { firebasePreConfig } from '../environments/firebase-config'; // please comment on this line when changing the values ​​of firebase {}

export const environment = {
  production: true,
  version: require('../../package.json').version, // https://stackoverflow.com/questions/349076002/how-to-display-app-version-in-angular2
  remoteConfig: false,
  firebase: {
    apiKey:"AIzaSyDvQaRqiSt00cJMwJ_TVLomgMbeAaBnjm0I",
    authDomain: "news.firebaseapp.com",
    databaseURL: "https://news.firebaseio.com",
    projectId: "news",
    storageBucket: "news.appspot.com",
    messagingSenderId: "3002632004000026"
  },
  // apiUrl: 'https://api.tiledesk.com/v1/',
  apiUrl: 'https://tiledesk-server-pre.herokuapp.com/',
  tenant: 'tilechat',
  defaultLang : 'en'
};
