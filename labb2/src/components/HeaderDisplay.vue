<script setup>
import { ref, computed } from 'vue'

const icon = ref('✎ᝰ')
let title = ref('Shopping List')
let newTitle = ref('')
const editingMode = ref(false)

// computed property to change button text based on editing mode
const buttonText = computed(() => {
  return editingMode.value ? 'Save' : 'Edit'
})

// function to enable editing mode
const enableEditing = () => {
  newTitle.value = title.value 
  editingMode.value = true
}

// function to save the new title
const saveTitle = () => {
  if (newTitle.value.trim()) {
    title.value = newTitle.value
    newTitle.value = '' 
    editingMode.value = false
  }
}

// function to toggle between editing and saving
const toggleEditingMode = () => {
  (editingMode.value) ? saveTitle() : enableEditing()
}
</script>


<template>
  <div class="container-title">
    <div v-if="editingMode"> 
      <!-- input field when editing -->
      <input v-model="newTitle" type="text"/>
    </div>
    <div v-else> 
      <!-- title when not editing -->
      <h1>{{ icon }} {{ title }}</h1>
    </div>
    
    <!-- toggle between edit and save -->
    <button class="edit-button" @click="toggleEditingMode">
      {{ buttonText }}
    </button>
  </div>
</template>


<style scoped>
.container-title {
  display: flex;
  align-items: baseline;
  justify-content: center;
  position: relative;
}

.container-title h1 {
  text-align: center;
  font-size: 28px;
  color: #8aa078;
  letter-spacing: 1px;
}

.container-title input {
  text-align: center;
  font-size: 24px;
  letter-spacing: 1px;
  margin: 22px 0;
  font-family: inherit;
  border: none;
  outline: none;
  background: none;
  color: inherit;
  border-bottom: 2px solid #4CAF50;
}

.edit-button {
  background: none;
  border: none;
  color: #4CAF50;
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;
  padding: 0;
  text-decoration: underline;
}

.edit-button:hover {
  color: #45a049; 
  text-decoration: none; 
}
</style>