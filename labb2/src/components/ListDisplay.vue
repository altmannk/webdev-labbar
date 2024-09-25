<script setup>
import { ref, computed } from 'vue'
import image from '../assets/img/nothingHereImg.png' // image to show when list is empty

const items = ref([
  { id: 1, label: "Milk", done: false },
  { id: 2, label: "Egg", done: false },
  { id: 3, label: "Bread", done: false }
])
const newItem = ref('')

// computed property to check if the list is empty
const isListEmpty = computed(() => items.value.length === 0)

// function to add an item to the list
const addItem = () => {
  if (newItem.value.trim()) {
    items.value.push({
      id: items.value.length + 1,
      label: newItem.value.charAt(0).toUpperCase() + newItem.value.slice(1),
      done: false
    });
    newItem.value = '';
  }
}

// function to remove an item from the list
const removeItem = (index) => {
  items.value.splice(index, 1);
}
</script>


<template>
  <!-- Add item form -->
  <form @submit.prevent="addItem">
    <input type="text" v-model="newItem" required placeholder="Add item" @keyup.enter="addItem"/>
    <button type="submit"> + </button>
  </form>

  <!-- List of items with checkbox -->
  <ul class="list">
    <li v-for="(item, index) in items" :key="item.id" :class="{ 'done': item.done }"> <!-- Add done class when item is done -->
      <input type="checkbox" v-model="item.done" />
      <span>{{ item.label }}</span>
      <button type="button" @click="removeItem(index)"> 🇽 </button>
    </li>
  </ul>

  <!-- Empty list message when list is empty -->
  <img class="empty-img" v-if="isListEmpty" :src="image" alt="Nothing here: List is empty" />
</template>


<style scoped>
form {
  display: flex;
  margin-bottom: 20px;
}

form input[type="text"] {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 7px;
  margin-right: 10px;
  font-size: 16px;
}

form button {
  background-color: orange;
  border: none;
  padding: 10px 20px;
  color: white;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;
}

/* on hover and focus */
form button:hover {
  background-color: #4CAF50;
 
}

::placeholder {
  color: rgba(86, 57, 0, 0.44);
}

form input[type="text"]:focus {
  outline: none;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1);
}

/* list of items */
.list {
  width: auto;
  display: flex;
  flex-direction: column;
  padding-left: 0;
}

.list li {
  display: flex;
  align-items: center;
  background-color: rgb(246, 189, 84);
  text-align: start;
  padding-left: 10px;
  padding-bottom: 2px;
  position: relative;
  color: #fff;
  font-size: 18px;
  line-height: 38px;
  margin-top: 1px;
  list-style: none;
  position: relative;
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

.list li span {
  white-space: normal;
  word-break: break-word;
  margin-right: 50px;
  flex: 1;
}

.list li button {
  width: 44px;
  font-size: 32px;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 38px;
  background-color: transparent;
  border: none;
  transition: all .2s linear;
  cursor: pointer;
  margin-left: 10px;
  height: 100%; 
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}

.list li button:hover {
  background-color: rgb(247, 82, 56);
  border-radius: inherit;
} 

/* Style checkbox */
.list li input[type="checkbox"] {
  width: 24px;
  height: 24px;
  appearance: none;
  background-color: #fff; 
  border: 2px solid #fff; 
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
  position: relative;
  transition: background-color 0.3s, border-color 0.3s;
}

/* Style checkbox when checked */
.list li input[type="checkbox"]:checked {
  background-color: rgb(112, 208, 114); 
  border-color: rgb(112, 208, 114); 
}

/* Costom checkmark */
.list li input[type="checkbox"]:checked::after {
  content: '✓';
  color: #fff;
  font-size: 26px;
  position: absolute;
  top: 40%; 
  left: 50%; 
  width: 15px; 
  height: 12px;
  transform: translate(-60%, -110%) rotate(10deg); 
}

.list li.done {
  background-color: rgba(0, 0, 0, 0.2); 
  text-decoration: line-through; 
}

/* Empty list image */
.empty-img {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 350px;
  height: auto;
}
</style>