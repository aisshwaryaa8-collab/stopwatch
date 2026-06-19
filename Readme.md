# Stopwatch Web Application

A simple, responsive stopwatch web application built with HTML, CSS, and JavaScript. This project was built as part of the PRODIGY InfoTech Web Development Internship (Task-02).

## Features

- **Start** — begins timing from 00:00:00.00
- **Pause / Resume** — pause the timer and resume from where it left off
- **Lap** — record lap times while the stopwatch is running, displayed in a scrollable list
- **Reset** — clears the timer and all recorded laps back to zero

## Tech Stack

- **HTML** — structures the stopwatch interface
- **CSS** — handles styling, layout, and responsive design
- **JavaScript** — implements the timer logic, lap tracking, and button interactivity

## How It Works

The stopwatch uses `Date.now()` to track elapsed time accurately, updating the display every 10 milliseconds via `setInterval`. Time is formatted as `HH:MM:SS.CC` (hours:minutes:seconds.centiseconds). Lap times are recorded relative to the total elapsed time and displayed in a list, most recent lap at the top.

## File Structure

```
.
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
├── script.js       # Stopwatch logic
└── README.md       # Project documentation
```

## Usage

1. Clone this repository.
2. Open `index.html` in any modern web browser.
3. Click **Start** to begin timing.
4. Click **Lap** to record a lap time while running.
5. Click **Pause** to pause, and the button will change to **Resume** to continue.
6. Click **Reset** to clear the timer and all lap records.
