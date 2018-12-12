<template>
    <el-card shadow="never">
      <div class="header" :style="color">
        <h1>{{ data.name }}</h1>
      </div>
      <div class="statistic">
        <div class="item" v-for="(item, key) in data.items" :key="key">
          {{ item }}
        </div>
      </div>
    </el-card>
</template>

<script>
export default {
  props: {
    data: Object,
    color: Object
  }
}
</script>
