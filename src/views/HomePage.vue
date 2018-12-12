<template>
  <el-row>
    <user-card />
    <el-row :gutter="24">
      <el-col v-for="(item, key) in productsCardData" :md="8" :lg="5" :key="key">
        <product-card :data="item"/>
      </el-col>
    </el-row>
  </el-row> 
</template>

<script>
import UserCard from '../components/UserCard';
import ProductCard from '../components/ProductCard';

export default {
  data() {
    return {
      productsCardData: [
        {
          name: 'На рассмотрении',
          items: [
            52,
            215,
            123
          ]
        },
        {
          name: 'Отправка',
          items: [
            521,
            25,
            12
          ]
        },
        {
          name: 'Удачные',
          items: [
            92,
            285,
            13
          ]
        }
      ]
    }
  },
  components: { UserCard, ProductCard }
};
</script>
