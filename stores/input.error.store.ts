/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'

interface InputErrorStore {
    errorField: {
        field: string,
        message: string,
        state: string,
        position: number
    }
    setMessageError: (errorMessage: any) => void
}
export const InputErrorStore = create<InputErrorStore>()((set) => ({
    errorField: {
        field: '',
        message: '',
        state: '',
        position: 0
    },
    setMessageError: (errorMessage: any) => set(() => ({
        errorField: { ...errorMessage }
    })),
}))