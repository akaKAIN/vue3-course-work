<template>
  <div class="container card">
    <ul class="pagination">
      <button
        type="button"
        class="pagination-item"
        :disabled="activePageNum === 1"
        @click="$emit('update:modelValue', activePageNum - 1)"
      >
        &#8678;
      </button>
      <li
        :class="['pagination-item', { active: pageNum === activePageNum }]"
        v-for="(pageNum, ind) in pages"
        :key="ind"
        @click="$emit('update:modelValue', pageNum)"
      >
        {{ pageNum }}
      </li>
      <button
        type="button"
        class="pagination-item"
        :disabled="activePageNum === pages"
        @click="$emit('update:modelValue', activePageNum + 1)"
      >
        &#8680;
      </button>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'ThePagination',
  props: {
    size: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    modelValue: {
      type: Number
    }
  },
  setup(props) {
    const route = useRoute()
    const pages = ref<number>(Math.ceil(props.count / props.size))
    const activePageNum = computed<number>(() =>
      route.query.page ? +route.query.page : 1
    )

    return { pages, activePageNum }
  }
})
</script>

<style scoped>
.pagination {
  display: flex;
}

.pagination-item {
  list-style: none;
  padding: 0.3rem 1rem;
  background-color: #f3f3f3;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin-left: 1rem;
}

.pagination-item:first-child {
  margin-left: 0;
}

.pagination-item.active {
  background-color: #3eaf7c;
  color: #ffffff;
}

.pagination-item:hover {
  cursor: pointer;
  background-color: #3eaf7c;
}

.pagination-item:disabled:hover {
  cursor: no-drop;
  background-color: #ffffff;
}
</style>
