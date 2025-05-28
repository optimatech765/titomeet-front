/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSocketIo } from "@/context/socket/utils";
import { useEffect } from "react";
export const useSocketIoListener = (
  eventName: string,
  callback: (...args: any[]) => void,
) => {
  const socket = useSocketIo();
  useEffect(() => {
    socket?.on(eventName, callback);
    return () => {
      socket?.off(eventName);
    };
  }, [eventName, socket, callback]);
  return null;
};
