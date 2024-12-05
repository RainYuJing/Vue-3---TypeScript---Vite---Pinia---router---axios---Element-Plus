<script setup lang="ts">
import { ref } from 'vue'
import {Plus} from '@element-plus/icons-vue';

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <el-button type="primary" size="default" :icon='Plus'>新增</el-button>
</template>

<style scoped lang="scss">
</style>
