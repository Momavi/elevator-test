import { defineStore } from "pinia";
import { ELEVATOR_Chill, ELEVATOR_SPEED } from "../ElevatorConfig";

export const useLevelStore = defineStore("level", {
  state: () => ({
    elevatorMoving: false,
    elevatorChill: false,
    elevatorLevel: 1,
    elevatorCallArray: [],
    elevatorMoveToLevel: {
      direction: null,
      level: null,
    },
  }),
  getters: {},
  actions: {
    elevatorCall(level) {
      this.elevatorCallArray.push(level);
    },
    setElevatorMoveToLevel(direction, level) {
      this.elevatorMoveToLevel.direction = direction;
      this.elevatorMoveToLevel.level = level;
      this.elevatorMoving = true;
    },
    stopElevator(nextLevel, timeout) {
      if (this.elevatorLevel === nextLevel) {
        this.elevatorCallArray.shift();
        this.elevatorMoving = false;
        this.elevatorChill = true;
        setTimeout(() => {
          this.elevatorChill = false;
        }, timeout * ELEVATOR_SPEED + ELEVATOR_Chill - 2000);
      }
    },
    moveElevator(nextLevel) {
      // Проверка если нажали на том же этаже где находится лифт
      if (nextLevel === this.elevatorLevel) {
        this.elevatorCallArray.shift();
        this.elevatorMoving = false;
      } else {
        if (this.elevatorLevel < nextLevel && nextLevel) {
          // цикл на подьем лифта
          this.setElevatorMoveToLevel("🠕", nextLevel);
          let j = 1;
          for (let i = this.elevatorLevel; i < nextLevel; i++) {
            j++;
            setTimeout(() => {
              this.$patch((state) => state.elevatorLevel++);
              this.stopElevator(nextLevel, j);
            }, j * ELEVATOR_SPEED);
          }
        } else {
          // цикл на опускание лифта
          this.setElevatorMoveToLevel("🠗", nextLevel);
          let j = 1;
          for (let i = this.elevatorLevel; i > nextLevel; i--) {
            j++;
            setTimeout(() => {
              this.$patch((state) => state.elevatorLevel--);
              this.stopElevator(nextLevel, j);
            }, j * ELEVATOR_SPEED);
          }
        }
      }
    },
  },
});
