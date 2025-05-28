import { useContext } from "react";
import { SocketContext } from "./context";

export const useSocketIo = () => {
  const socket = useContext(SocketContext);
  /* if (socket === undefined) {
    throw new Error("useSocketIo must be used within a socketProvider");
  } */
  return socket;
};
