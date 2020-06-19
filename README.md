# todolist

1. npm install - install all packages configured in package.json
2. npm start - inits "webpack-dev-server --mode development --open --hot", (developer's version of the application)
3. npm run build - inits "webpack --mode production" (production version of the application (stable)) - all the styles will be created in /dist/styles_bundle_main.css.
4. npm install --save prop-types - package that allows to define type of props in each component (class and function component)
5. npm install --save react-html-parser - allows to display text instead of HTML code in JSX objects
6. npm install -D eslint - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
7. npm install -D eslint-plugin-react - React specific linting rules for ESLint
8. npm install -D babel-eslint - babel-eslint allows you to lint ALL valid Babel code with the fantastic ESLint.

styles_bundle_main.css - all styles of the application
dist/scripts_bundle.js - is a file that joints all JS code of our application which then is converted(translated) by Babel so that it's readable for web browser

.bablerc - is a configuration file

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


// children - if props are not defined(if they are not named) we can use prop "children" which will refer to children element of this class instance

# addColumn function:

Below is correct syntax:

{addColumn(title) {
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
}
};

  Don't use below (it will work well but it's not in line with rules):

      addColumn(title){
      this.setState(function(currentState){

        // create new column object with properties
        let newColumn = {
          key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
          title,
          icon: 'list-alt',
          cards: []
        };

        // create copy of current state
        let newState = Array.from(currentState);

        // add new column to new state
        newState.columns.push(newColumn);

        // return new state
        return newState;
      });