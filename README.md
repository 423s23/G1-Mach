# G1 - Mach Rewards App


## User Documentation

### We are in development right now, meaning there isn't a fully functional build available to you on the app store yet. With that being said, we've massively simplified the process of trying out what has already been created. All you need are your phone and computer, and there's no command line tools required!

To try out the pre-release
- Download the Expo Go app on your phone - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) and [iOS](https://apps.apple.com/us/app/expo-go/id982107779)
- Go to the Expo Snack hosted [here](https://snack.expo.dev/@grayturtlejoey/github.com-423s23-g1-mach:mach_rewards_expo@demo) and select "My Device" in the panel on the right hand side
- Scan the QR code with your camera app on iOS or the Expo Go app on Android

Congratulations! The app is now streaming to your mobile device through Expo Go, and you're demoing the latest release of Mach Rewards!

Feel free to explore the layout of the screens, and see what features will be added in the future. If you encounter any bugs (including ones related to UI i.e. buttons not working or text overflowing off the screen) then please report [here](https://github.com/423s23/G1-Mach/issues)
Reporting bugs lets us as developers resolve your issue(s) directly or point you to an already resolved issue that can help!

---
## Developer Documentation

### To develop and run this app natively on your machine, you will need the following:
- Prerequisites
  - node.js, installed from your favorite package manager*
  - yarn, again from your package manager* of choice
  - (Optional) Android Studio, if you want to run the android version in an emulator
  - (Optional) xCode, if you want to run the iOS version in an emulator - this only works on mac
###### *Homebrew package manager for macOS and Chocolately on Windows are highly recommended

- Run
  - An Android or iOS device with the Expo Go app installed - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) and [iOS](https://apps.apple.com/us/app/expo-go/id982107779)
  - (Optional) An Android emulator created through the devices manager of Android Studio, if you want to run in an Android emulator
  - (Optional) An iOS virtual device created in xCode settings, if you want to run in an iOS emulator
  
### Once you have these prerequisites, in your terminal:
1. Clone the GitHub repository
2. Navigate to the Mach_Rewards_Expo directory in the cloned repo
3. run `yarn`
4. run `yarn expo start`

If things have gone correctly, after everything has been installed and built for the first time, you should be presented with a QR code and a menu in your terminal. Scanning the QR code with your camera app on iOS or the Expo Go app on Android will open the app on your physical device, and selecting an option from the menu will launch in your pre-configured emulator of choice.

#### __*If you just want to run the app, you can do the same thing from the link at the top of the page*__

---
## About

### Continuous Integration
We now have CI set up via two GitHub actions. Eas_build.yml builds the whole app for android via Expo.dev whenever changes are pushed to the build branch. We chose to have this done manually in order to avoid having to pay large costs to create a bunch of builds that no one will ever install. That's why update.yml soft-compiles the pushed changes and then adds them to the most recent build on Expo.dev. This way, we get automated error and dependency checking without having to pay for 50 minutes of github actions time and a full build every time someone tweaks the UI. 

### Internal Structure
While this is not being developed in a strictly object oriented fashion, under the hood, the UI navigation schema consists of functions that return react-native components, and the navigation managers themselves are also react-native objects. Here is a simplified diagram of how the UI works internally. This ignores all but the most essential components provided by the framework and libraries, and if you actually look at the code, you'd see functions that create and return these objects rather than classes that manage their state. However, this should at least give you a rough idea of where everything is.

---
<img width="1093" alt="Screenshot 2023-03-10 at 10 44 55 PM" src="https://user-images.githubusercontent.com/123405355/224467474-a8bb09ce-e0ff-44a9-8ccf-92e1b220ab0a.png">

---

