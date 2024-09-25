<script setup>
import ListDisplay from './components/ListDisplay.vue'
import HeaderDisplay from './components/HeaderDisplay.vue'
</script>


<template>
  <header>
    <HeaderDisplay />
  </header>
  <main>
    <ListDisplay />
  </main>
</template>


<style>
#app {
  position: absolute;
  left: 50%;
  top: 5%;
  transform: translateX(-50%);
  padding: 6px 14px;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  width: 600px;
  border-radius: 10px;
  margin-top: 5px;
}
</style>
