<template>
  <el-card shadow="never">
    <el-row type="flex">   

      <el-row>
        <el-tabs tab-position="left" style="height: 600px;">
        <el-tab-pane label="Base Settings">
          <el-row justify="start">
            <el-row>
              <el-col :sm="24" :md="16" :lg="13" :xl="13">
                <h3>Base Settings</h3>
              </el-col>
            </el-row>

            <el-row :gutter="24"> 
              <el-col :xs="24" :sm="12" :md="8" :lg="7" :xl="7" class="avatar-container">
                <div class="cont-upload">
                  <input type="file"
                        class="avatar-uploader"
                        @change="beforeAvatarUpload"/>
                  <img v-if="avatarUrl" :src="avatarUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </div>
                <div class="input-span">Changes avatar</div>
                <div class="avatar-name input-span">{{ avatarName }}</div>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="7" :xl="7" class="form-container">
                <el-row>
                  <el-col class="input-form">
                    <span class="input-span">Nickname</span>
                    <el-input v-model="form.nickname" />
                  </el-col>
                  <el-col class="input-form">
                    <span class="input-span">Name</span>
                    <el-input v-model="form.name" />
                  </el-col>
                  <el-col class="input-form" >
                    <span class="input-span">Surname</span>
                    <el-input v-model="form.surname" />
                  </el-col>
                  <el-col class="input-form">
                    <span class="input-span">Personal profile</span>
                    <el-input type="textarea" v-model="form.description" />
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

            <el-row>
              <el-col :sm="24" :md="16" :lg="13" :xl="13">
                <el-button type="primary" class="update-button" size="medium" @click="submitForm">
                  Update Information
                </el-button>
              </el-col>
            </el-row>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="Security Settings">Config</el-tab-pane>
        <el-tab-pane label="Account Binding">Role</el-tab-pane>
        <el-tab-pane label="Notification">Task</el-tab-pane>
      </el-tabs>
      </el-row>

    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nickname: '',
        name: '',
        surname: '',
        description: ''
      },
      avatarUrl: '',
      avatarName: '',
      avatarFile: false,
      errorImg: false
    }
  },
  methods: {
    beforeAvatarUpload(e) {
      let reader = new FileReader();
      let file = e.target.files[0];

      const isJPG = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (isJPG) {
        this.$message.error('Avatar picture must be JPG format!');
        this.errorImg = true;
        return
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!');
        this.errorImg = true;
        return
      }

      this.avatarName = file.name;
      this.avatarFile = file;
      this.errorImg = false;

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.avatarUrl = reader.result;
      }
    },
    submitForm() {
      const { nickname, name, surname, description } = this.$store.state.userData.profile;

      let newProfile = [
        this.form.nickname || nickname,
        this.form.name || name,
        this.form.surname || surname,
        this.form.description || description
      ]

      this.$store.dispatch('UPDATE_PROFILE', {
        newProfile: newProfile,
        avatarFile: this.avatarFile
      })
    }
  }
}
</script>

<style scoped>
.cont-upload {
  position: relative;
  top: 2rem;
  right: 5.5rem;
}

.avatar-container {
  margin-top: 1rem;
  height: 15rem;
}

.avatar-uploader {
  position: absolute;
  overflow: hidden;
  border-radius: 100px;
  width: 178px;
  height: 178px;
  cursor: pointer;
  z-index: 200;
  opacity: 0;
}

.avatar-uploader-icon {
  border: 1px dashed #d9d9d9;
  background-color: #fff;
  border-radius: 100px;
  position: absolute;
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
}

.avatar {
  position: absolute;
  border: 1px dashed #d9d9d9;
  border-radius: 100px;
  width: 178px;
  height: 178px;
  line-height: 178px;
}

.avatar-name {
  margin-top: 12.5rem;
}

.update-button {
  margin-top: 2rem;
}

.input-form {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.input-span {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 13px;
}

@media screen and (max-device-width: 768px) {
    .form-container {
      margin-top: 2rem;
    }
}
</style>