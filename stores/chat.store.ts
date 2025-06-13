/* eslint-disable @typescript-eslint/no-explicit-any */

import { messagesSevices } from "@/services/messages/messages.services";
import { create } from "zustand";


interface ChatStoreDto {
    chats: any[];
    messages: any;
    currentChat: any;
    currentMessage: any;
    isLoading: boolean;
    isError: boolean;
    fetchChatList: () => void;
    fetchMessages: (chatId: string) => void;
    sendMessage: (chatId: string, content: string, flies: any[]) => void;
    setCurrentChat: (chat: any) => void;
    chatMembers: any;
    fetchChatMembers: (chatId: string) => void;
    addNewMessageToMessages: (chatId: string, message: any) => void;
    reorderChatList: (chatId: string) => void;

}

export const ChatStore = create<ChatStoreDto>((set) => ({
    chats: [],
    messages: {},
    currentChat: null,
    currentMessage: null,
    isLoading: true,
    isError: false,
    fetchChatList: () => {
        try {
            messagesSevices.getChats().then((response) => {

                set(() => ({
                    chats: response.data.items,
                    currentChat: response.data.items?.[0],
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
    fetchMessages: (chatId: string) => {
        messagesSevices.getMessages(chatId).then((response) => {
            set(() => ({
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
    sendMessage: (chatId: string, message: string, files: any[]) => {
        messagesSevices.createMessage({ chatId, text: message, files:files }).then((response) => {

            set((state: ChatStoreDto) => ({
                messages: {
                    ...state.messages,
                    items: [response.data, ...state.messages.items,

                    ]
                },
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
        console.log(chat);
        set(() => ({
            currentChat: chat,
        }));
    },
    chatMembers: {},
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
    addNewMessageToMessages: (chatId: string, message: any) => {
        set((state: ChatStoreDto) => {
            const isCurrentChat = chatId === state.currentChat?.id;

            return {
                messages: {
                    ...state.messages,
                    items: isCurrentChat
                        ? [ message,...state.messages.items]
                        : [...state.messages.items]
                }
            };
        });
    },
    reorderChatList: (chatId: string) => {
        set((state: ChatStoreDto) => {
            const index = state.chats.findIndex((item) => item.id === chatId);

            if (index !== -1) {
                const chats = [...state.chats];
                const [chat] = chats.splice(index, 1);
                chats.unshift(chat);

                return { chats };
            }

            // Important : toujours retourner l'état inchangé si aucune modification
            return { chats: state.chats };
        });
    }


}))