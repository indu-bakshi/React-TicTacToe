This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About Project
In this project React.js is used and here I have created a game of TicTacToe with a simple logic of the game.
### `Board Component`
  This component is created for the individual squares on the board-box. This component is stateless. It has a simple button with click handler and label, both passed by props.

### `Board Box Component`
  This component is the main board for our Tic Tac Toe game.This component is a stateful component. Component state has been initialized with four key/value pairs- boxes, history,historyPlayers , xIsNext.<br/>
  
  The boxes item is an array containing nine items, one item for each board. All these items are null. So, when box is empty, not “x” or “o”, it will be null. Otherwise, it would be either “x” or “o”. The history is an empty array. When player makes a move, the players name is pushed to historyPlayer array. And the index of the board is passed to the history array. The xIsNext, is a boolean and initialized as true. This helps us to determine which player should make a move as next.<br/>
  
  The board component contains two click handlers. First is the handleBoxClick and it handles clicking on board boxes. With every click, it checks if board contains winning combination or if all boxes are clicked. If one of these conditions is true, the game ends. Otherwise, check which player made move, mark the box and push the move to game history.<br/>
The second one is handleBoardRestart. This one restart the component state to its initial state. The render method will contain conditions to show status message-who is winner, game is drawn or who is the next one to move. Next, it contain link to scoreboard, the main board with boxes list with history of moves and button to start new game.<br/>

### `ScoreBoard Component`
  ScoreBoard Component is also Stateful. Its state contains one key/value pair, scoreboard. The value for this key is an empty array. After Scoreboard component mounts I am using Storage object to load any data from local storage and update component state.
  
### `Utils`
  There are two utility functions and these functions are findWinner and areAllBoxesClicked. The findWinner contains an array with winning combinations and for loop.

The for loop will iterate over the array with winning combinations and check if the game board contains winning combination. If so, it will return the winner, either ‘x’ or ‘o’. Otherwise, it will do nothing. The areAllBoxesClicked will use forEach loop to iterate over all boxes count those that are not empty (not null).

If the number of these not empty (not null) boxes is equal to 9, it will return true

### `Storage`
The last thing is the Storage object. This object is to create and update data in browser localStorage object. When initialized, it will check if localStorage contains any data from previous games. If not, it will create new item create new item in localStorage for Tic Tac Toe game.

Next, there are two methods, getData and update. The first one will get existing data localStorage. The second one will push new data into localStorage. And using this record of the previous game can be seen

The render method will contain the list with previous games and link to start new game.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
