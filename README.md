# rnw-github [![Build status](https://build.appcenter.ms/v0.1/apps/5e9d98d7-a605-49c7-b921-94ebda4a0d4e/branches/master/badge)](https://appcenter.ms) [![CircleCI](https://circleci.com/gh/haruelrovix/rnw-github/tree/master.svg?style=svg)](https://circleci.com/gh/haruelrovix/rnw-github/tree/master)
A React Native Web app that fetches GitHub API.

- Run on Android and Web 🎉
- Infinite Scroll

## Deployment

Web Hosted on [Surge](https://surge.sh/), see it **Live** here:

✔️ **[rnw-github.surge.sh](http://rnw-github.surge.sh/)**

The `apk` for Android can be downloaded [here](https://appcenter.ms/download?url=%2Fv0.1%2Fapps%2Fharuelrovix%2FRNW-GitHub%2Fbuilds%2F22%2Fdownloads%2Fbuild).

Continuous Deployment by [Visual Studio App Center](https://appcenter.ms) for Native and [CircleCI](https://circleci.com/dashboard) for Web. 🔥

||Android|Web|Ios|
|-|-|-|-|
|Home|<img src="https://user-images.githubusercontent.com/17120764/46534747-7ddb9f80-c8d3-11e8-9263-ecce29998131.png" width=400 />|<img src="https://user-images.githubusercontent.com/17120764/46603380-13b63b00-cb1d-11e8-915b-80ce9478f00c.png" width=400 />|<img width="383" alt="screen shot 2018-10-27 at 11 55 16 pm" src="https://user-images.githubusercontent.com/26213148/47606918-f9002380-da43-11e8-8cbe-e707fe06ad9e.png">


## Development

1. Clone repository
  ```sh
  $ git clone https://github.com/haruelrovix/rnw-github.git && cd rnw-github
  ```
2. Install package dependencies
  ```sh
  $ yarn
  ```

### Web

1. Start React development server
  ```sh
  $ yarn web
    Compiled successfully!

    You can now view react-native-web-github in the browser.

      Local:            http://localhost:3000/
      On Your Network:  http://w.x.y.z:3000/

    Note that the development build is not optimized.
    To create a production build, use yarn build.
  ```
 2. It will try to open browser at `port:3000` automatically. 👍
 
### Android
 
 1. Make sure you have android simulator running or a physical device connected
 2. Simply run `yarn android`
   ```sh
  $ yarn android
  yarn run v1.9.4
  
  $ react-native run-android
  Scanning folders for symlinks in D:\Projects\rnw-github\node_modules (59ms)
  Starting JS server...
  Building and installing the app on the device (cd android && gradlew.bat installDebug)...
  Starting a Gradle Daemon, 1 incompatible and 1 stopped Daemons could not be reused, use --status for details
    ...
    
  ```
 
 <img src="https://user-images.githubusercontent.com/17120764/46603258-c639ce00-cb1c-11e8-9e43-b10c1a9b120b.png" width=300 />

### iOS

You have to run `yarn` or `npm install` first to download the dependencies.
Then simply run `yarn ios`.

If you got an error related to `AppCenter`, you should follow the steps below,
These are some steps to install AppCenter on Mac OS:

1. make sure you have installed cocoapods, if you haven't, then run this command on your terminal

``` $ sudo gem install cocoapods --source http://rubygems.org ```
2. install app center by executing this command :

``` $ yarn add appcenter appcenter-analytics appcenter-crashes --exact ```
3. Link the plugins to the React Native app by using the react-native link command.
```
react-native link appcenter
react-native link appcenter-analytics
react-native link appcenter-crashes
```
4. Run Application again 'yarn ios'


In case you need some information about Cocoapods and AppCenter, the following link might be helpful for you:

1. [Cocoapods](https://guides.cocoapods.org/using/getting-started.html)
2. [AppCenter](https://docs.microsoft.com/en-us/appcenter/)
3. [AppCenter for React Native](https://docs.microsoft.com/en-us/appcenter/sdk/getting-started/react-native)


## Acknowledgements

RNW GitHub created using [react-native-web](https://github.com/necolas/react-native-web) and [react-native-elements](https://github.com/react-native-training/react-native-elements). 💖 Bootstrapped with [CRNWA](https://github.com/VISI-ONE/create-react-native-web-app).
