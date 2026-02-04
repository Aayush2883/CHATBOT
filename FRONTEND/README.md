# Chatbot Frontend

A modern React-based frontend for an AI chatbot application built with Vite and Socket.IO.

## Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Build

Create an optimized production build:

```bash
npm run build
```

## Preview

Preview the production build locally:

```bash
npm run preview
```

## Lint

Check code quality with ESLint:

```bash
npm run lint
```

## Project Structure

```
FRONTEND/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   ├── App.css          # Styles
│   ├── index.css        # Global styles
│   └── assets/          # Static assets
├── public/              # Public assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## Features

- Real-time chat with Socket.IO
- Modern React hooks for state management
- Responsive UI design
- ESLint configured for code quality

## Dependencies

- **react** - UI library
- **react-dom** - React DOM rendering
- **socket.io-client** - Real-time communication client
- **vite** - Frontend build tool
- **eslint** - Code quality tool

## Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_URL=http://localhost:5000
```

## License

MIT
