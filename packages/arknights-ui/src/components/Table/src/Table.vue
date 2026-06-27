<template>
  <table :class="classes">
    <thead>
      <tr>
        <th
          v-for="col in columns"
          :key="col.key"
          :style="{ width: col.width, textAlign: col.align || 'left' }"
          class="ak-table__th"
        >
          {{ col.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex" class="ak-table__row">
        <td
          v-for="col in columns"
          :key="col.key"
          :style="{ textAlign: col.align || 'left' }"
          class="ak-table__td"
        >
          <slot :name="`cell-${col.key}`" :row="row" :column="col" :index="rowIndex">
            {{ col.render ? col.render(row) : row[col.key] }}
          </slot>
        </td>
      </tr>
      <tr v-if="!data.length" class="ak-table__empty-row">
        <td :colspan="columns.length" class="ak-table__empty">
          <slot name="empty">NO DATA</slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
export default { name: 'AkTable' }
</script>

<script setup lang="ts">
import { computed } from 'vue'

export interface TableColumn {
  key: string
  title: string
  width?: string
  align?: 'left' | 'center' | 'right'
  render?: (row: Record<string, unknown>) => unknown
}

export interface TableProps {
  columns: TableColumn[]
  data: Record<string, unknown>[]
  hoverable?: boolean
  compact?: boolean
}

const props = withDefaults(defineProps<TableProps>(), {
  hoverable: true,
  compact: false,
})

const classes = computed(() => [
  'ak-table',
  {
    'ak-table--hoverable': props.hoverable,
    'ak-table--compact': props.compact,
  },
])
</script>

<style scoped>
.ak-table {
  width: 100%;
  border: 0;
  border-collapse: collapse;
  font-family: var(--ak-font-family);
  font-size: var(--ak-font-size-base);
  color: var(--ak-text-regular);
}

.ak-table__th {
  color: #000;
  background-color: #fff;
  border: #fff solid 1px;
  padding: 0 10px;
  font-weight: var(--ak-font-weight-bold);
  font-size: var(--ak-font-size-sm);
  white-space: nowrap;
  user-select: none;
}

.ak-table__td {
  padding: 0 8px;
  border: var(--ak-primary) solid 1px;
  transition: background var(--ak-transition-fast);
}

/* Hover */
.ak-table--hoverable .ak-table__row:hover .ak-table__td {
  background-color: rgba(24, 209, 255, 0.1);
}

/* Compact */
.ak-table--compact .ak-table__th {
  padding: 0 10px;
}
.ak-table--compact .ak-table__td {
  padding: 0 8px;
}

/* Empty state */
.ak-table__empty-row .ak-table__empty {
  padding: var(--ak-spacing-xxl);
  text-align: center;
  color: var(--ak-text-muted);
  letter-spacing: 2px;
}
</style>
