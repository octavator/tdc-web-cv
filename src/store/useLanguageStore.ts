import { create } from "zustand";

type LanguageState = {
  isFrench: boolean;
  toggleLanguage: () => void;
};

export const useLanguageStore = create<LanguageState>((set) => ({
  isFrench: false,
  toggleLanguage: () => set((state) => ({ isFrench: !state.isFrench })),
}));
