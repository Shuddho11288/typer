# Typewriter Component

![Typewriter GIF](https://media.giphy.com/media/3o7aD2nuqkS9aYxjWU/giphy.gif)

The **Typewriter** component is a fun and engaging way to display dynamic messages on your website. It simulates the effect of a typewriter, gradually typing out sentences and then backspacing to create a captivating animation.

## Features

- Smoothly transitions between different messages.
- Customizable typing speed and pause duration.
- Supports an array of motivational messages (or any other content you'd like to display).

## Installation

To use the **Typewriter** component in your React project, follow these steps:

1. Install the package:

   ```bash
   npm install typewriter-component
   ```

2. Import the component in your project:

   ```javascript
   import Typewriter from 'typewriter-component';
   ```

3. Use it in your JSX:

   ```jsx
   <Typewriter />
   ```

## Usage

```jsx
import React from 'react';
import Typewriter from 'typewriter-component';

const MyComponent = () => {
  return (
    <div className="my-container">
      <Typewriter />
    </div>
  );
};

export default MyComponent;
```

## Props

The **Typewriter** component accepts the following props:

- `messages`: An array of strings representing the messages you want to display. Feel free to add your own motivational quotes or personal statements!
- `typeSpeed`: The speed at which characters are typed (in milliseconds). Default: `80`.
- `deletePause`: The pause duration after a message is fully typed (before backspacing begins) in milliseconds. Default: `2000`.

## Example

```jsx
<Typewriter
  messages={[
    'I am a programmer',
    'I am a student',
    'I am a tech enthusiast',
    'I am a data analyzer',
    'I am a math lover',
    'I am a cricket lover'
  ]}
  typeSpeed={80}
  deletePause={2000}
/>
```

## Motivation

Remember, every line of code you write brings you closer to your goals! Keep typing, keep learning, and keep building amazing things. 🚀

---


