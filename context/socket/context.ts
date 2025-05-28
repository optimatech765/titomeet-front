"use client";
import { createContext } from "react";
import { Socket } from "socket.io-client";

export interface SocketIoContextProps {
  children: React.ReactNode;
}

export const SocketContext = createContext<Socket | undefined>(undefined);
