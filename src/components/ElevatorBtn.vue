<script setup>
  import { mapActions, storeToRefs } from "pinia";
  import { useLevelStore } from "../stores/useLevel.js";

  const main = useLevelStore();
  const { elevatorCallArray, elevatorMoveToLevel } = storeToRefs(main);
  const { elevatorCall } = mapActions(useLevelStore, ["elevatorCall"]);
  const props = defineProps(["level"]);
</script>

<template>
  <span class="level__number">{{ props.level }}</span>
  <span v-if="elevatorCallArray.every((e) => e !== props.level)">
    <span class="level__btn" @click="elevatorCall(props.level)"></span>
  </span>
  <span v-else>
    <span
      v-if="elevatorMoveToLevel.level === props.level"
      class="level__btn level__btn-move-to-you"
    ></span>
    <span v-else class="level__btn level__btn-offline"></span>
  </span>
</template>

<style scoped>
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
    border: 2px solid rgba(236, 33, 6, 0.884);
    cursor: auto;
  }
  .level__btn-move-to-you {
    border: 2px solid rgba(221, 236, 6, 0.884);
    cursor: auto;
  }
  .level__btn:hover {
    border: 2px solid rgba(237, 253, 5, 0.952);
    background-color: #c3d618cc;
    color: rgb(0, 0, 0);
  }
</style>
