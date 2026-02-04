# Chatbot Backend

Node.js Express server with Socket.IO integration for real-time chatbot communication.

## Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=5000
NODE_ENV=development
AI_API_KEY=your_api_key_here
```

### Running the Server

Development mode:
```bash
npm start
```

Watch mode (auto-restart on file changes):
```bash
npm run dev
```

## Project Structure

```
BACKEND/
├── src/
│   ├── app.js           # Express app configuration
│   └── service/
│       └── ai.service.js    # AI service logic
├── server.js            # Server entry point
└── package.json         # Dependencies and scripts
```

## API Endpoints

- `POST /api/chat` - Send a message to the chatbot
- `GET /api/health` - Health check endpoint

## Socket.IO Events

- `message` - Receive chat messages
- `response` - Send chatbot responses
- `disconnect` - Handle connection disconnection

## Dependencies

- **express** - Web framework
- **socket.io** - Real-time communication
- **cors** - Cross-Origin Resource Sharing middleware
- Additional dependencies listed in `package.json`

## License

MIT
