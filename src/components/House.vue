<script setup>
  import Elevator from "./Elevator.vue";
</script>

<template>
  <div class="page">
    <Elevator />
  </div>
</template>

<style>
  .page {
    background: rgba(75, 73, 73, 0.466);
    border: 2px solid transparent;
    border-radius: 2rem;
    width: 200px;
    color: white;
    display: flex;
    flex-direction: column-reverse;
  }
</style>
