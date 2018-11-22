<template>
  <el-container> 
    <nav-menu :is-collapse="isCollapse"/> 

    <el-container>
      <el-header class="el-header-app">
      <el-row type="flex" justify="space-between">
        <el-col :xs="6" :sm="1" :xl="1">
          <antd-icon type="menu-unfold-o"
                     class="caret-icon-custom" 
                     :class="{'caret-icon-custom-active': isCollapse}"
                     @click="isCollapse = !isCollapse" />
        </el-col>

        <el-col v-if="isUserAuthenticated" :xs="8" :sm="5" :md="4" :lg="3" :xl="2">
          <el-row type="flex">
            <el-col>
              <el-popover
                placement="bottom"
                trigger="click">
                <div class="text item" v-for="(item, key) in notifications" :key="key">
                  <el-row type="flex">
                    <el-col :span="6">{{ item.type }}</el-col>
                    <el-col :span="18">
                      <el-row>
                        <el-col class="description">{{ item.description }}</el-col>
                        <el-col>{{ item.time }}</el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
                <antd-icon class="el-icon-bell icon-bell-custom" slot="reference" type="bell-o"/>
              </el-popover>
            </el-col>
            <el-col>
              <el-button type="button" @click="signout">
                Выйти
              </el-button>
            </el-col>
          </el-row>
        </el-col>

        <el-col v-else :xs="6" :sm="3" :md="3" :lg="2" :xl="2">
          <router-link to="/sign">
            <el-button type="button">
              Sign in
            </el-button>
          </router-link>
        </el-col>
      </el-row>
    </el-header>

    <el-main class="el-main-app">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </el-main>

    <el-footer class="el-footer-app">
      2018 @AdelNorberg
    </el-footer> 
    </el-container>

  </el-container>
</template>

<script>
import NavMenu from './layouts/NavMenu'

export default {
  components: {
    NavMenu
  },
  data () {
    return {
      isCollapse: false,
      paths: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contacts', path: '/contacts' }
      ],
      notifications: [
        { type: 'meesage', description: 'Congratulations on your new day...', time: 'a year ago' },
        { type: 'event', description: 'Today there will be a group chat for...', time: 'a year ago' },
        { type: 'message', description: 'Now you can remove the goods in...', time: 'a year ago' },
        { type: 'Constructor', description: 'We added a new feature to the...', time: 'a year ago' }
      ]
    }
  },
  computed: {
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated
    }
  },
  watch: {
    error() {
      let textError = this.$store.getters.getError
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

.router-link-active {
  color: $blue;
  border-bottom: 2px solid $blue;
}

.alert {
  position: absolute; 
  max-width: 25rem;
  min-height: 2rem;
}

.caret-icon-custom {
  cursor: pointer;
}

.caret-icon-custom-active {
  transform: rotate(180deg)
}

.icon-bell-custom {
  color: hsl(0, 0%, 55%);
}

.item {
  margin-bottom: 18px;
}

.item:first-child {
  margin-top: 10px;
}

.description {
  margin-bottom: 7px;
}
</style>
