<template>
  <div class="ak-pagination">
    <span
      class="ak-pagination__item ak-pagination__prev"
      :class="{ 'ak-pagination--disabled': currentPage <= 1 }"
      @click="handlePageChange(currentPage - 1)"
    >&lsaquo;</span>
    <template v-for="page in displayedPages" :key="page">
      <span
        v-if="page === '...'"
        class="ak-pagination__ellipsis"
      >...</span>
      <span
        v-else
        class="ak-pagination__item"
        :class="{ 'ak-pagination--active': page === currentPage }"
        @click="handlePageChange(page as number)"
      >{{ page }}</span>
    </template>
    <span
      class="ak-pagination__item ak-pagination__next"
      :class="{ 'ak-pagination--disabled': currentPage >= totalPages }"
      @click="handlePageChange(currentPage + 1)"
    >&rsaquo;</span>
  </div>
</template>

<script lang="ts">
export default { name: 'AkPagination' }
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { sizeClassMap, type SizeType } from '../../../utils/props'

export interface PaginationProps {
  total: number
  pageSize?: number
  currentPage?: number
  size?: SizeType
}

const props = withDefaults(defineProps<PaginationProps>(), {
  total: 0,
  pageSize: 10,
  currentPage: 1,
  size: 'md',
})

const emit = defineEmits<{
  'update:currentPage': [page: number]
  change: [page: number]
}>()

const totalPages = computed(() => Math.ceil(props.total / props.pageSize))

const displayedPages = computed<(number | string)[]>(() => {
  const pages: (number | string)[] = []
  const total = totalPages.value
  const current = props.currentPage

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i)
    return pages
  }

  pages.push(1)

  if (current > 3) {
    pages.push('...')
  }

  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  if (current < total - 2) {
    pages.push('...')
  }

  pages.push(total)
  return pages
})

function handlePageChange(page: number) {
  if (page < 1 || page > totalPages.value) return
  emit('update:currentPage', page)
  emit('change', page)
}
</script>

<style scoped>
.ak-pagination {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0;
  user-select: none;
}

.ak-pagination__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  margin-right: 10px;
  font-family: var(--ak-font-family-bold);
  font-size: var(--ak-font-size-base);
  font-weight: bold;
  color: var(--ak-text-primary);
  border: 1px solid var(--ak-primary);
  background: transparent;
  cursor: pointer;
  transition: all var(--ak-transition-fast);
}

.ak-pagination__item:last-child {
  margin-right: 0;
}

.ak-pagination__item:hover {
  color: #000;
  background-color: var(--ak-primary);
}

.ak-pagination--active {
  color: #000;
  background-color: var(--ak-primary);
}

.ak-pagination--disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

.ak-pagination__ellipsis {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  margin-right: 10px;
  font-family: var(--ak-font-family-bold);
  font-size: var(--ak-font-size-base);
  color: var(--ak-text-secondary);
}

.ak-pagination__prev,
.ak-pagination__next {
  font-size: 16px;
  line-height: 1;
}
</style>
