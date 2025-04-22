<a id="readme-top"></a>



<!-- HEADER -->
<br />
<div align="center">
    <img src='https://content.presspage.com/uploads/2110/gettyimages-1124683106-963049.jpg?10000' alt="Logo" width="100">
    <h3 align="center">Breathe</h3>
    <p align="center">A simple breathwork app built with React Native</p>
</div>



<!-- TECH STACK -->
## Tech Stack

[![React Native][React.js]][ReactNative-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
<!-- ## Get Started

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->


## Install Ruby & CocoaPods Correctly

Follow the steps [in this article](https://retyui.medium.com/how-to-correctly-configure-cocoapods-for-a-react-native-app-in-2023-apple-arm-m1-m2-chips-7ad2fafe41ea) to fix Ruby/Cocoapods build errors for ios.  

- Create a Gemfile in root directory if one doesn't exist
- Create a .ruby-version file in root directory and store correct version in it (currently using 3.2.2)
- Install Ruby:   
```brew install rbenv ruby-build```   
```rbenv init```   
```rbenv install 3.2.2```  
```rbenv local``` (should see 3.2.2 or the version in your .ruby-version file print to terminal)  
```bundler install```
```bundler exec pod install --project-directory=ios```
- If you get another CocoaPods file error, check your .ruby-version file and make sure it isn't empty
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Link Icons 

Additional steps have to be taken in order to use icon imports in React Native. For this project, ```npm install``` will install react-native-vector-icons.  

[Use this video as a guide.](https://www.youtube.com/watch?app=desktop&v=gkjYTapyEO8)

Code to copy into Info.plist after closing false tag:
```
	<key>UIAppFonts</key>
	<array>
		<string>AntDesign.ttf</string>
		<string>Entypo.ttf</string>
		<string>EvilIcons.ttf</string>
		<string>Feather.ttf</string>
		<string>FontAwesome.ttf</string>
		<string>FontAwesome5_Brands.ttf</string>
		<string>FontAwesome5_Regular.ttf</string>
		<string>FontAwesome5_Solid.ttf</string>
		<string>FontAwesome6_Brands.ttf</string>
		<string>FontAwesome6_Regular.ttf</string>
		<string>FontAwesome6_Solid.ttf</string>
		<string>Foundation.ttf</string>
		<string>Ionicons.ttf</string>
		<string>MaterialIcons.ttf</string>
		<string>MaterialCommunityIcons.ttf</string>
		<string>SimpleLineIcons.ttf</string>
		<string>Octicons.ttf</string>
		<string>Zocial.ttf</string>
		<string>Fontisto.ttf</string>
	</array>
```

Code to copy into react-native.config.js:
```
module.exports = {
    dependencies: {
        'react-native-vector-icons': {
            platforms: {
                ios: null
            }
        }
    }
}
```
  
  
<!-- USAGE -->
## Usage

Choose from three exercises, each with a different purpose, and breathe through the guided session.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[ReactNative-url]: https://reactnative.dev/