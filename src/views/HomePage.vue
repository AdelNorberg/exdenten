<template>
  <el-row>
    <user-card />
    <el-row type="flex">
      <product-card :v-for="(item, key) in productsCardData"/>
      <el-card shadow="never">ффыв</el-card>
    </el-row>
  </el-row>
</template>

<script>
import UserCard from '../components/UserCard';
import ProductCard from '../components/ProductCard';

export default {
  components: { UserCard, ProductCard }
};
</script>
