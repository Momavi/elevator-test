<script setup>
  import { storeToRefs } from "pinia";
  import ElevatorBtn from "../components/ElevatorBtn.vue";
  import ElevatorCabin from "../components/ElevatorCabin.vue";
  import { ELEVATOR_MAX_LEVELS } from "../ElevatorConfig";
  import { useLevelStore } from "../stores/useLevel.js";

  const main = useLevelStore();
  const { elevatorLevel } = storeToRefs(main);

  main.$subscribe((_mutation, state) => {
    setInterval(() => {
      if (
        state.elevatorCallArray[0] &&
        state.elevatorMoving === false &&
        state.elevatorChill === false
      ) {
        main.moveElevator(state.elevatorCallArray[0]);
      }
    }, 1000);
  });
</script>

<template>
  <div class="elevator" v-for="level in ELEVATOR_MAX_LEVELS" :key="level.id">
    <div class="level">
      <ElevatorCabin v-if="elevatorLevel === level" :elevatorOpen="true" />
      <ElevatorCabin v-else :elevatorOpen="false" />
      <div class="level__wrapper">
        <ElevatorBtn :level="level" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .elevator {
    margin: 0 auto;
    padding: 1px;
    border-top: 2px solid black;
  }
  .elevator:first-child {
    border-top: 2px solid black;
  }
  .elevator:last-child {
    border-top: 0px solid black;
  }
  .level {
    border: 1px solid;
    border-color: transparent;
    padding: 10px 10px;
    display: flex;
    align-items: center;
  }

  .level__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
    margin-left: 10px;
    width: 30px;
    height: 62px;
  }
</style>
