import{ io } from "socket.io-client";

const socket = io("http://localhost:5000", {
    withCredentials: true,
    //transports: ["websocket"],
});

socket.on("connect", ()=>{
    console.log("Connected to the socket server:", socket.id);
});

socket.on("disconnect", ()=>{
    console.log("Disconnected from socket server");
});
export default socket;