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
    moveElevator(nextLevel) {
      this.elevatorMoving = true;
      // Проверка если нажали на том же этаже где находится лифт
      if (nextLevel === this.elevatorLevel) {
        this.elevatorCallArray.shift();
        this.elevatorMoving = false;
      }
      if (this.elevatorLevel < nextLevel && nextLevel) {
        // цикл на подьем лифта
        let j = 1;
        for (let i = this.elevatorLevel; i < nextLevel; i++) {
          j++;
          setTimeout(() => {
            this.$patch((state) => state.elevatorLevel++);
            if (this.elevatorLevel === nextLevel) {
              this.elevatorCallArray.shift();
              this.elevatorMoving = false;
            }
          }, j * ELEVATOR_SPEED);
        }
      } else {
        // цикл на опускание лифта
        let j = 1;
        for (let i = this.elevatorLevel; i > nextLevel; i--) {
          j++;
          setTimeout(() => {
            this.$patch((state) => state.elevatorLevel--);
            if (this.elevatorLevel === nextLevel) {
              this.elevatorCallArray.shift();
              this.elevatorMoving = false;
            }
          }, j * ELEVATOR_SPEED);
        }
      }
    },
  },
});
