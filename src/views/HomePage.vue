<template>
  <el-row>
    <user-card />
    <el-row type="flex">
      <product-card :v-for="(item, key) in productsCardData"></product-card>
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
        'sadad',
        'asd',
        'dasdasd'
      ]
    }
  },
  components: { UserCard, ProductCard }
};
</script>
