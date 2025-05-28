"use client";
import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { SocketContext, SocketIoContextProps } from "./context";

export const SocketIoProvider = ({ children }: SocketIoContextProps) => {
  const [socket, setSocket] = useState<Socket | undefined>();

  useEffect(() => {
    if (!socket) {
      const connectAsync = async () => {
        try {
          const token = localStorage.getItem("accessToken");
          if (token) {
            const _socket = io(process.env.NEXT_PUBLIC_BASE_URL, {
              transports: ["websocket", "polling"],
              auth: {
                token,
              },
              withCredentials: true,
            });
            setSocket(_socket);
          }
        } catch (error) {
          console.error(error);
        }
      };
      connectAsync();
    }
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
