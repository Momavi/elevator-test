<script setup>
  import { storeToRefs, mapActions } from "pinia";
  import { ELEVATOR_MAX_LEVELS } from "../ElevatorConfig";
  import { useLevelStore } from "../stores/useLevel.js";

  const main = useLevelStore();

  const { elevatorLevel, elevatorCallArray } = storeToRefs(main);

  const { elevatorCall } = mapActions(useLevelStore, ["elevatorCall"]);
  main.$subscribe((_mutation, state) => {
    setInterval(() => {
      if (state.elevatorCallArray[0] && state.elevatorMoving === false) {
        main.moveElevator(state.elevatorCallArray[0]);
      }
    }, 1000);
  });
</script>

<template>
  <div class="wrapper" v-for="level in ELEVATOR_MAX_LEVELS" :key="level.id">
    <div class="level">
      <span v-if="elevatorLevel === level"><div class="elevator"></div></span>
      <span v-else span><div class="elevator elevator-offline"></div></span>
      <div class="level_wrapper">
        <span class="level__number">{{ level }}</span>
        <span v-if="elevatorCallArray.every((e) => e !== level)">
          <span class="level__btn" @click="elevatorCall(level)"></span>
        </span>
        <span v-else>
          <span class="level__btn level__btn-offline"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    margin: 0 auto;
    padding: 1px;
    border-top: 2px solid black;
  }
  .wrapper:first-child {
    border-top: 0px solid black;
  }
  .level {
    border: 1px solid;
    border-color: transparent;
    padding: 10px 10px;
    display: flex;
    align-items: center;
  }

  .elevator {
    border: 2px solid rgb(233, 233, 233);
    width: 50px;
    height: 50px;
  }

  .elevator-offline {
    background-color: rgb(117, 110, 110);
  }
  .level_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
    margin-left: 10px;
    width: 30px;
    height: 62px;
  }
  .level__number {
    border: 1px solid;
    border-color: transparent;
    border-radius: 30px;
    font-size: 16px;
  }
  .level__btn {
    border: 2px solid rgba(83, 245, 8, 0.945);
    border-radius: 20px;
    color: rgb(150, 150, 150);
    padding: 12px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.35s;
  }
  .level__btn-offline {
    border: 2px solid rgba(221, 236, 6, 0.884);
    cursor: auto;
  }
  .level__btn:hover {
    border: 2px solid rgba(237, 253, 5, 0.952);
    background-color: #c3d618cc;
    color: rgb(0, 0, 0);
  }
</style>
