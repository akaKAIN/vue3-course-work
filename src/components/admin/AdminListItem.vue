<template>
  <ul class="list">
    <li class="list-item">
      <div class="item-field">{{ id }}</div>
      <div class="item-field">{{ title }}</div>
      <div class="item-field">{{ type }}</div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AdminListItem',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.list-item {
  justify-content: start;
}
</style>
