<script setup>
  import { storeToRefs } from "pinia";
  import { useLevelStore } from "../stores/useLevel.js";

  const main = useLevelStore();
  const { elevatorChill, elevatorMoving, elevatorMoveToLevel } = storeToRefs(main);
  const props = defineProps(["elevatorOpen"]);
</script>

<template>
  <div class="elevator__cabin" v-if="props.elevatorOpen">
    <span class="elevator__nextlevel" v-if="elevatorMoving">
      {{ elevatorMoveToLevel.direction }} {{ elevatorMoveToLevel.level }}
    </span>
    <span class="elevator-chill" v-if="elevatorChill"> 😴<br />Zzzz </span>
  </div>
  <div v-else class="elevator__cabin elevator-offline"></div>
</template>

<style scoped>
  .elevator__cabin {
    border: 2px solid rgb(233, 233, 233);
    width: 50px;
    height: 50px;
  }

  .elevator-offline {
    background-color: rgb(117, 110, 110);
  }
  .elevator-chill {
    display: flex;
    text-align: center;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-left: 2px;
    font-size: 22px;
    line-height: 22px;
  }
  .elevator__nextlevel {
    display: flex;
    text-align: center;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-top: 6px;
    font-size: 20px;
  }
</style>
