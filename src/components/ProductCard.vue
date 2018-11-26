<template>
    <div class="container">
      <div class="header" :style="color">
        <h1>{{ data.name }}</h1>
      </div>
      <div class="statistic">
        <div class="item" v-for="(item, key) in data.items" :key="key">
          {{ item }}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    data: Object,
    color: Object
  }
}
</script>

<style scoped>

.container {
  color: white;
  height: 20rem;
  width: 20rem;
}

.header {
  background-color: #1d39c4;
  height: 4rem;
}

.statistic {
  background-color: #2f54eb;
  height: 16rem;
}

</style>
