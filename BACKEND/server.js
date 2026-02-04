const app = require('./src/app');
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer , {
  cors: {
    origin: "http://localhost:5173 ",
  }
});
const { generateResponse } = require('./src/service/ai.service');

const memory = new Map(); // socket.id -> chatHistory[]

io.on("connection", (socket) => {
  console.log("a user connected");

  memory.set(socket.id, []);// initialise memory for this user

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("message",async (prompt)=>{

    const chatHistory = memory.get(socket.id);

    chatHistory.push({ role: "user", parts: [{ text: prompt }] });

    console.log("Prompt received: ", chatHistory);
    const response = await generateResponse(chatHistory);
    console.log("Received response : " , response);

    chatHistory.push({ role: "model", parts: [{ text: response }] });
    socket.emit("message-response",response);
    
  })
});

httpServer.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});