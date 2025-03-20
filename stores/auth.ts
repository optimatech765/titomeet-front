import { create } from "zustand";

interface AuthState {
    token: string | null;
    setToken: (token: string) => void;
    refreshToken: string | null;
    setRefreshToken: (refreshToken: string) => void;
    clearToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    refreshToken: null,
    setToken: (token) => set({ token }),
    setRefreshToken: (refreshToken) => set({ refreshToken }),
    clearToken: () => set({ token: null }),
}));


