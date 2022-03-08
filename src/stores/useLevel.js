import { defineStore } from "pinia";
import { ELEVATOR_Chill, ELEVATOR_SPEED } from "../ElevatorConfig";

export const useLevelStore = defineStore("level", {
  state: () => ({
    elevatorMoving: false,
    elevatorChill: false,
    elevatorLevel: 1,
    elevatorCallArray: [],
  }),
  getters: {},
  actions: {
    elevatorCall(level) {
      this.elevatorCallArray.push(level);
    },
  },
});
