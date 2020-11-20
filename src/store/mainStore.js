import create from "zustand";

export const MainStore = create((set) => ({
  isLogin: false,
   
  setIsLogin: (isLogin) => set({ isLogin })
}));
