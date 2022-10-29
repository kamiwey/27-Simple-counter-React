# Simple Counter with React

React improves the creation of custom components, which you can render throughout your web-app using the **ReactDOM.render()** method. A custom component allows you to divide and conquer, separating logical and visual challenges into smaller pieces- giving you greater control over the display and functionalities of each part of the web-app.


## 🌱  How to start this project

Do not clone this repository.

1. The first step to start coding is cloning the [react boilerplate](https://github.com/4GeeksAcademy/react-hello) on your local computer or gitpod.

a) If using Gitpod (reommended) you can clone the boilerplate by [clicking here](https://github.com/4GeeksAcademy/react-hello).

b) If working locally type the following command from your command line:

```bash
$ git clone https://github.com/4GeeksAcademy/react-hello.
```
💡 Important: Remember to create a new repository, update the remote (`git remote set-url origin <your new url>`), and upload the code to your new repository using `add`, `commit` and `push`.

# 📝 Instructions

Create a seconds-counter component, called ***SecondsCounter***. It should look [like this one](https://github.com/breatheco-de/exercise-simple-counter-react/blob/master/preview.gif).

- The whole purpose of the component is to display how many seconds have passed since the website finished loading (onLoad).
- Use the ***ReactDOM.render()*** to render the component into the web-app.
- Use the ***setInterval()*** function to re-render the component on every second.
- The component does not need a local state, you can pass the number of seconds as **props** like this:

```jsx
<SecondsCounter seconds={3434} />
```
- You can find the clock icon on the left of the component in [Font Awesome](https://fontawesome.com/).

# 🔥 Bonus
- Create an option to countdown from a given number.
- Create stop, reset, and resume functionality
- Create an alert when the user reaches a specified time, if the user enters "10", an alert should render notifying the user that their time was reached
