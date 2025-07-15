import { create } from "zustand";

type CensoredState = {
  isCensored: boolean;
  toggleCensored: () => void;
};

export const useCensoredStore = create<CensoredState>((set) => ({
  isCensored: false,
  toggleCensored: () => set((state) => ({ isCensored: !state.isCensored })),
}));
