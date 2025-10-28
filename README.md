## ExpressFood

### Image
<img src="https://github.com/pollyolly/ExpressFood/blob/main/iexpress_food.png" width=250 />

### Run Mobile App
```
$npm react-native start
```
### Animatable
```
$npm install react-native-animatable
```
### React Native Reanimated
Android
```
$npm install react-native-reanimated@2.2
```
IOS
```
$npm install react-native-reanimated@3.6.2
```
### Icon Theme (React Native Elements)
Android
```
$npm install @rneui/themed
$npm install react-native-vector-icons
$npm install @rneui/base   //Bug fix: Install this after the react-native-safe-area-context installation
```
android/app/build.gradle
```
//Custom Font
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Specify font files
]
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```
IOS
```
MyProject/ios/MyProject/Info.plist
```
```
<dict>
 <key>UIAppFonts</key>
 <array>
  <string>MaterialCommunityIcons.ttf</string>
 </array>

```
### Swiper
```
$npm install react-native-swiper
```
### React Stack Navigation
```
$npm install @react-navigation/native @react-navigation/native-stack
$npm install react-native-screens react-native-safe-area-context
$cd project-folder/ios
$pod install
```
### React Native Countdown Component
```
$npm install react-native-countdown-component
```
### React Countdown
```
$npm react-native-countdown-component

Problem: Error when Unmounting during Log-out
```
### React Bottom Tabs Navigation
```
$npm install @react-navigation/bottom-tabs
```
### React Drawer Navigation
```
$npm install @react-navigation/drawer
```
### Lodash 
```
$npm install lodash
```
### React Native TabView
```
$npm install react-native-tab-view
```
### React Native Pager View
```
$npm install react-native-pager-view
```
### React Native Firebase
```
$npm install --save @react-native-firebase/app
```
```
https://medium.com/@johnmark_76235/setup-react-native-firebase-f1f87b6bc1f6
```
### React Native Formik
```
$npm install formik --save
```
### React Native Firebase Auth
```
$npm install @react-native-firebase/auth
```
### Troubleshoot
Fix Installation: Install Sequence
```
0. react-native-reanimated@2.2
1. @rneui/themed
2. react-native-vector-icons
3. react-native-safe-area-context
4. @rneui/base
```
### Fixes
Deprecated Gradle build incompatible to Gradle 9.0
```
Un-install duplicate ExpressFood application. 
Then re-install the new ExpressFood.
```

### Tutorial Reference
[Offical React Navigation](https://reactnative.dev/docs/navigation)
[Material Icons](https://fonts.google.com/icons?icon.query=arrow)
[Food Delivery](https://www.youtube.com/playlist?list=PLAP1EsuzlGNJYvsJzRE8owOzWEhIuZe3i)
