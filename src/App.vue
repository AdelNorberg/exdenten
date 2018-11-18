<template>
  <el-container> 

    <el-header class="el-header-app">
      <el-row type="flex">
        <el-col :span="2">
          Extended
        </el-col>
        <el-col :span="1" v-for="(item, key) in paths" :key="key">
          <router-link :to="item.path">
            <div class="router-link">
              {{ item.name }}
            </div> 
          </router-link>
        </el-col>
        <el-col v-if="isUserAuthenticated" :span="2" :offset="17">
          icon
        </el-col>
        <el-col v-if="isUserAuthenticated" :span="2" >
          <el-button type="button" @click="signout">
            Выйти
          </el-button>
        </el-col>
        <el-col v-else :span="2" :offset="17">
          <router-link to="/sign">
            <el-button type="button">
              Sign in
            </el-button>
          </router-link>
        </el-col>
      </el-row>
    </el-header>

    <el-main class="el-main-app">
      <el-alert
        class="alert"
        title="warning alert"
        type="warning"
        :description="' '" 
        show-icon /> 
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </el-main>

    <el-footer class="el-footer-app">
      2018 @AdelNorberg
    </el-footer> 

  </el-container>
</template>

<script>
export default {
  data () {
    return {
      paths: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contacts', path: '/contacts' }
      ]
    }
  },
  methods: {
    signout() {
      this.$confirm('Do you really want to go out?', 'Confirm', {
          distinguishCancelAndClose: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        })
          .then(() => {
            this.$store.dispatch('SIGNOUT')
            this.$message({
              type: 'success',
              message: 'You have successfully logged out..'
            });
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? 'Changes rejected. You stayed in the account.'
                : 'Stay in the current route'
          })
      });
    }
  },
  computed: {
    error() { 
      return this.$store.getters.getError
    },
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated
    }
  }
}
</script>


<style lang="scss" scoped>
@import './assets/vars.scss';

.el-header-app {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 64px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 100;
}

.el-footer-app {
  background-color: #f0f2f5;
  color: #333;
  text-align: center;
  line-height: 64px;
}

.el-main-app {
  background-color: #f0f2f5;
  color: #333;
  text-align: center;
  position: relative;
}

body > .el-container {
  min-height: 100vh;
}

.active {
  color: $blue;
  border-bottom: 2px solid $blue;
}

.router-link {
  border-bottom: 2px solid white;
  line-height: 52px;
  margin-top: 6px;
  color: black;
}

.router-link:hover {
  color: $blue;
  border-bottom: 2px solid $blue;
}

.alert {
  position: absolute; 
  max-width: 25rem;
  min-height: 2rem;
}
</style>
