

# <img src="favicon.ico" alt="drawing" style="width:25px;"/> Time Since Timestamp Counter 

This is a simple web application that displays the elapsed time since a specified timestamp. It can be useful for tracking how much time has passed since a particular event or milestone.

## Features

- Displays the elapsed time in hours, minutes, and seconds.
- Supports starting the timer from a specified Unix timestamp provided as a URL parameter.

## How to Use

Specify a Timestamp: Optionally, users can specify a timestamp by appending ?time=<timestamp> to the URL in the address bar of their web browser. They should replace <timestamp> with the desired timestamp in ISO 8601 format (e.g., 2024-03-29T22:00:33Z).

For example, if the project is being served locally, the URL might look like this:

```
https://ringomar.github.io/timer/?time=2024-03-29T22:00:33Z
```

This URL format allows users to set a specific starting time for the timer displayed by the web application.
