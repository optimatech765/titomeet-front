/* eslint-disable @typescript-eslint/no-explicit-any */

import { messagesSevices } from "@/services/messages/messages.services";
import { create } from "zustand";


interface ChatStoreDto{
    chats: any[];
    messages: any[];
    currentChat: any;
    currentMessage: any;
    isLoading: boolean;
    isError: boolean;
    fetchChatList : () => void;
    fetchMessages: (chatId: string) => void;
    sendMessage: (chatId: string, message: string) => void;
    setCurrentChat: (chat: any) => void;
    chatMembers: any[];
    fetchChatMembers: (chatId: string) => void;
}

export const ChatStore = create<ChatStoreDto>((set) => ({
    chats: [],
    messages: [],
    currentChat: null,
    currentMessage: null,
    isLoading: true,
    isError: false,
    fetchChatList: () => {
        try {
            messagesSevices.getChats().then((response) => {
                set(() => ({
                    chats: response.data,
                    isLoading: false,
                }));
            },
            ).catch((error) => {
                console.log(error);
                set(() => ({
                    isLoading: false,
                    isError: true,
                    error: error.response.data.message,
                }));
            });
             
        } catch (error) {
            console.log(error);
             set(() => ({
            isLoading: false,
        }));
        }
       
    },
    fetchMessages: (chatId:string) => {
        messagesSevices.getMessages(chatId).then((response) => {
            set((state:ChatStoreDto) => ({
                ...state,
                messages: response.data,
                isLoading: false,
            }));
        }).catch((error) => {
            console.log(error);
            set(() => ({
                isLoading: false,
                isError: true,
                error: error.response.data.message,
            }));
        });
    },
    sendMessage: (chatId: string, message: string) => {
        messagesSevices.createMessage({ chatId, message }).then((response) => {
            set((state: ChatStoreDto) => ({
                messages: [...state.messages, response.data],
            }));
        }).catch((error) => {
            console.log(error);
            set(() => ({
                isError: true,
                error: error.response.data.message,
            }));
        });
    },
    setCurrentChat: (chat: any) => {
        set(() => ({
            currentChat: chat,
        }));
    },
    chatMembers: [],
    fetchChatMembers: (chatId: string) => {
        messagesSevices.getChatMembers(chatId).then((response) => {
            set(() => ({
                chatMembers: response.data,
            }));
        }).catch((error) => {
            console.log(error);
            set(() => ({
                isError: true,
                error: error.response.data.message,
            }));
        });
    },
}))