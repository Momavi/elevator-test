<script setup>
  import { ELEVATOR_MAX_LEVELS } from "../ElevatorConfig";
</script>

<template>
  <div class="wrapper" v-for="level in ELEVATOR_MAX_LEVELS" :key="level.id">
    <div class="level">
      <span v-show="currentLevel">Кабина</span>
      <div class="level_wrapper">
        <span class="level__number">{{ level }}</span>
        <span class="level__btn"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    margin: 0 auto;
    padding: 1px;
    color: black;
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

  .level_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
  }
  .level__number {
    border: 1px solid;
    border-color: transparent;
    border-radius: 30px;
    font-size: 16px;
    padding: 10px 5px;
    margin: 5px 5px;
  }
  .level__btn {
    border: 2px solid rgba(78, 226, 9, 0.842);
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
  .level__btn:hover {
    border: 2px solid rgba(237, 253, 5, 0.952);
    background-color: #c3d618cc;
    color: rgb(0, 0, 0);
  }
</style>
