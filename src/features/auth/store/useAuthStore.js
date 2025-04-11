import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
    //es un middleware de Zustand que permite guardar el estado en el almacenamiento del navegador 
  persist(set => ({
    user: null,
    isLoggedIn: false,
    login: userData => set({ user: userData, isLoggedIn: true }),
    logut: () => set({ user: null, isLoggedIn: false })
  }),
{
    name: 'auth-storage'
})
);
