# Pomodoro App

This is a Pomodoro app built using HTML, CSS, and JavaScript. It helps users manage their time effectively using the Pomodoro Technique, a time management method that utilizes focused work sessions and breaks. The app also features interactive background images that change every 5 minutes during the 25-minute work session.

## How to Use

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. The work session duration is set to 25 minutes by default.
4. Click on the "Start" button to begin the work session countdown.
5. The background image will change dynamically every 5 minutes during the work session, providing an interactive visual experience.
6. When the work session time is up, a notification will appear.

## Features

### Pomodoro Technique
The app follows the Pomodoro Technique, which consists of alternating work sessions and breaks. It helps users maintain focus and productivity by dividing tasks into manageable intervals.

### Timer
The app includes a timer that counts down the remaining time for the work session. It visually displays the time remaining in minutes and seconds, allowing you to track your progress.

### Interactive Background Image
During the work session, the background image changes dynamically every 5 minutes, providing an interactive and visually appealing experience. Different background images can be set to enhance focus and productivity.

## Customization

You can customize the following parameter in the `script.js` file:

- `timeleft`: Set the duration of the work session in seconds.

```javascript
let timeLeft = 1500;
```

Feel free to adjust this value to suit your preferences.

## Credits

The background images used in this project are sourced from [Pexels](https://www.pexels.com/), a platform that offers high-quality free stock photos.


## License

This project is licensed under the [MIT License](LICENSE). You are free to modify and use it according to your needs.

## Acknowledgements

This app was inspired by the Pomodoro Technique developed by Francesco Cirillo in the late 1980s. It incorporates the principles of time management and focus to enhance productivity.
