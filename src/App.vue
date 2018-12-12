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

        <el-col v-if="isUserAuthenticated" :xs="15" :sm="10" :md="7" :lg="6" :xl="4">
          <el-row type="flex">
            <el-col :span="2" style="margin-top: 1px">
              <el-popover
                placement="bottom"
                trigger="click">
                <div v-for="(item, key) in notifications" :key="key" class="text item">
                  <notif-list :item="item" />
                </div>
                <antd-icon slot="reference" class="el-icon-bell" type="bell-o"/>
              </el-popover>
            </el-col>
            <el-col :span="12" class="cont-profile">
              <el-row type="flex">
                <img v-if="getProfileAvatar" :src="getProfileAvatar" class="avatar">
                <antd-icon type="user-o" class="no-avatar" />
                <div :span="8" class="nickname">
                  {{ getProfile.nickname }}
                </div>
              </el-row>
            </el-col>
            <el-col :span="7">
              <el-button type="button" @click="signout">
                Выйти
              </el-button>
            </el-col>
          </el-row>
        </el-col>

        <el-col v-else :xs="6" :sm="3" :md="3" :lg="2" :xl="1">
          <router-link to="/sign">
            <el-button type="button" class="signin">
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
import NavMenu from "./layouts/NavMenu";
import NotifList from "./components/NotifList";
import { mapGetters } from "vuex";

export default {
  components: {
    NavMenu,
    NotifList
  },
  data() {
    return {
      isCollapse: false,
      paths: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contacts", path: "/contacts" }
      ],
      notifications: [
        {
          icon: "mail-o",
          description: "Congratulations on your new day...",
          time: "a year ago"
        },
        {
          icon: "star-o",
          description: "Today there will be a group chat for...",
          time: "a year ago"
        },
        {
          icon: "mail-o",
          description: "Now you can remove the goods in...",
          time: "a year ago"
        },
        {
          icon: "plus-o",
          description: "We added a new feature to the...",
          time: "a year ago"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["isUserAuthenticated", "getProfileAvatar", "getProfile"])
  },
  methods: {
    signout() {
      this.$confirm("Do you really want to go out?", "Confirm", {
        distinguishCancelAndClose: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No"
      })
        .then(() => {
          this.$store.dispatch("SIGNOUT");
          this.$message({
            type: "success",
            message: "You have successfully logged out.."
          });
        })
        .catch(action => {
          this.$message({
            type: "info",
            message:
              action === "cancel"
                ? "Changes rejected. You stayed in the account."
                : "Stay in the current route"
          });
        });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "./assets/vars.scss";

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

.cont-profile {
  cursor: pointer;
}

.nickname {
  font-size: 14px;
  margin-left: 0.5rem;
}

.avatar {
  border-radius: 20px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  margin-top: 1.1rem;
  margin-left: 0.5rem;
}

.no-avatar {
  margin-top: 1.45rem;
  margin-left: 0.5rem;
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
  transform: rotate(180deg);
}

.el-icon-bell {
  cursor: pointer;
}

.item {
  margin-bottom: 18px;
}

.item:first-child {
  margin-top: 10px;
}

.signin {
  margin-left: -3rem;
}
</style>
