# PopX

A clean, mobile-first React web application for the PopX platform.

## Tech Stack

- React 18
- Bootstrap 5
- CSS Modules (per-component stylesheets)
- Google Fonts (Sora + Inter)

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm start
```

### Build for production

```bash
npm run build
```

## Project Structure

```
popx-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LandingScreen.js
│   │   ├── LandingScreen.css
│   │   ├── LoginScreen.js
│   │   ├── LoginScreen.css
│   │   ├── SignupScreen.js
│   │   ├── SignupScreen.css
│   │   ├── ProfileScreen.js
│   │   └── ProfileScreen.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Screens

1. **Landing** — Welcome screen with Create Account and Login options
2. **Login** — Email + Password sign-in with dynamic button activation
3. **Sign Up** — Registration form with agency radio selection
4. **Profile** — User profile view after authentication
