# todolist

# npm install - install all packages configured in package.json
# npm start - inits "webpack-dev-server --mode development --open --hot", (developer's version of the application)
# npm run build - inits "webpack --mode production" (production version of the application (stable)) - all the styles will be created in /dist/styles_bundle_main.css.


styles_bundle_main.css - all styles of the application
dist/scripts_bundle.js - is a file that joints all JS code of our application which then is converted(translated) by Babel so that it's readable for web browser

.bablerc - is a configuration filr

settings.scss, - contains various or mixins (it musn't contain styles - it can only contain Sass syntax)
normalize.css, - unifies styles for different web browsers
global.scss, -contains global styles e.g for body or fonts

// Props - properties of element e.g for hour_picker:
    $ startHour: 12:00;
    $ endHour: 23:00;
    $ step: 0:30;

// State - state of the component for hour_picker itt may be currently displated hour.
It can be also just a simple HMTL code and their styles

Function component - simplier components that doesn't contain class e.g:

        ##  import React from 'react';
            import styles from './MyComponent.scss';

            const MyComponent = () => (
            <div>
                <h3>Hello world!</h3>
            </div>
            );

        ##  export default MyComponent;
