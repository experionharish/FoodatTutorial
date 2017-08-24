This is a react native application demonstrating the basics of react-native.

The application contains a login screen and a home screen(contains a list of data fetched using api call)

React native v0.47.1 <br />
React v16.0.0-alpha.12

Pre requisites
==============

Node, yarn, react-native-cli

The react-native-cli can be installed as an npm package <br />
npm install -g react-native-cli

This project was created using the 'react-native init' command

To run this application
=======================

From the command line,

cd BoilerplateSample <br />
yarn install        (To install the module dependencies) <br />
react-native link   (To link external packages used in the application) <br />
react-native start  (server starts, do not quit this command) <br />

To run in iOS
==============

react-native run ios (or hitting play from xcode)

To run in android
==================

react-native run android

The application structure is as follows :
=========================================

/app <br />
  &nbsp;&nbsp;&nbsp;/components     (Common components used throughout the application) <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/componentName <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.js     <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;styles.js    <br />
  &nbsp;&nbsp;&nbsp;/constants      (All the constant values including base url,image names etc.) <br />
  &nbsp;&nbsp;&nbsp;/containers     (Each screen connected to the redux store) <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/components   (Components confined to a particular container, not used any where else) <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.js <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;styles.js <br />
  &nbsp;&nbsp;&nbsp;/data           (Redux actions and reducers) <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/actions <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/reducers <br />
  &nbsp;&nbsp;&nbsp;/images         (images used throughout the application) <br />
  &nbsp;&nbsp;&nbsp;/services       (Helper services used in the application) <br />
  &nbsp;&nbsp;&nbsp;main.js <br />
  &nbsp;&nbsp;&nbsp;routes.js <br />
  &nbsp;&nbsp;&nbsp;store.js <br />

The above mentioned structure provides a clear idea about the entire components used in the application. i.e. where the component is used, which all are the base containers even when the application components grows large in size thus making the code more maintainable and easy to read.

The application follows a smart-dumb component approach where the smart components (containers) are concerned with how things work and the dumb components (presentational components) are concerned with how things look.

The benifits of this approach can be found in : <br />
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

P.S. If the layout and screen design varies across different platforms, then the index.js file of a component can be splitted into index.ios.js and index.android.js files.

External packages used in the application is as follows :
=========================================================

* For state management,

redux <br />
react-redux <br />
redux-thunk <br />
redux-logger <br />

* For making network requests,

axios

* For navigation within the application,

react-navigation <br />
react-native-navbar <br />

* For handling forms,

redux-form

* For various UI elements,

react-native-elements <br />
react-native-vector-icons <br />

* For splash screen,

react-native-splash-screen

Other packages which can be useful while development :
======================================================

https://github.com/GeekyAnts/NativeBase <br />
https://github.com/root-two/react-native-drawer <br />

http://www.gajotres.net/must-have-plugins-for-react-native/2/ <br />

Troubleshooting?
================

1. In iOS while taking build,

- shell script invocation error

Make sure the server is running i.e. react-native start

- config.h not found for third-party
https://github.com/facebook/react-native/issues/14382

  In the Terminal, navigate to the react-native/third-party/glog folder inside node_modules (cd node_modules/react-native/third-party/glog-0.3.4)

  Once actively in this folder, run ../../scripts/ios-configure-glog.sh

  Glog is configured and the required config.h header file is created for Xcode to find

2. In android while taking build,

- Execution failed for task ':react-native-splash-screen:compileReleaseJavaWithJavac'.

https://stackoverflow.com/questions/45643279/error-react-native-smart-splashscreen
