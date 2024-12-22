import { create } from "zustand";

const useSettingsStore = create((set) => ({
  settings: {
    duration: 1000,
    delay: 0,
    timingFunction: "ease",
    isEnabled: false,
  },
  updateSetting: (key, value) =>
    set((state) => ({
      settings: {
        ...state.settings,
        [key]: value,
      },
    })),
}));

export default useSettingsStore;
