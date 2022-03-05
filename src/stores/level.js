import { defineStore } from "pinia";

export const useLevelStore = defineStore({
  id: "level",
  state: () => ({
    currentLevel: 0,
    elevatorMoving: false,
    elevatorCall: [],
  }),
  getters: {
    currentLevel: (state) => state.currentLevel,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
