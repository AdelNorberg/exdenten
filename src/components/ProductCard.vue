<template>
    <el-card shadow="never">
      <div class="header" :style="color">
        <h1>{{ data.name }}</h1>
      </div>
      <div class="statistic">
        <div v-for="(item, key) in data.items" :key="key" class="item">
          {{ item }}
        </div>
      </div>
    </el-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => "no data"
    }
  }
};
</script>
