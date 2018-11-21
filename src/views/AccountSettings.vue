<template>
  <el-card shadow="never">
    <el-row type="flex">   

      <el-row>
        <el-tabs tab-position="left" style="height: 600px;">
        <el-tab-pane label="Base Settings">
          <el-row justify="start">
            <el-row>
              <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="10">
                <h1>Base Settings</h1>
              </el-col>
            </el-row>

            <el-row :gutter="24"> 
              <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="5" class="avatar-container">
                <div class="cont-upload">
                  <input type="file"
                        class="avatar-uploader"
                        @change="beforeAvatarUpload"/>
                  <img v-if="avatarUrl" :src="avatarUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </div>
                <div>Changes avatar</div>
                <div class="avatar-name">{{ avatarName }}</div>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="5" class="form-container">
                <el-row>
                  <el-col>
                    <span class="demonstration">Name</span>
                    <el-input placeholder="Please input" class="input-form" v-model="nickname" />
                  </el-col>
                  <el-col>
                    <span>Personal profile</span>
                    <el-input type="textarea"
                              placeholder="Please input"
                              class="input-form"
                              v-model="textarea2"
                              autosize />
                  </el-col>
                  <el-col>
                    <span>Name</span>
                    <el-input label="asdasd"
                              class="input-form" 
                              placeholder="Please input" 
                              v-model="nickname" />
                  </el-col>
                  <el-col>
                    <span>Name</span>
                    <el-input placeholder="Please input" class="input-form" />
                  </el-col>
                  <el-col>
                    <span>Name</span>
                    <el-input placeholder="Please input" class="input-form" />
                  </el-col>
                  <el-col>
                    <span>Name</span>
                    <el-input placeholder="Please input" class="input-form" />
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

            <el-row>
              <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="10">
                <el-button type="primary" class="update-button" size="medium">Update Information</el-button>
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
      nickname: null,
      textarea: null,
      textarea2: null,
      avatarUrl: '',
      avatarName: '',
      uploadStyleAfter: {}
    }
  },
  methods: {
    beforeAvatarUpload(e) {

      let reader = new FileReader();
      let file = e.target.files[0];

      this.avatarName = file.name;

      const isJPG = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (isJPG) {
        this.$message.error('Avatar picture must be JPG format!');
        return
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!');
        return
      }

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        this.avatarUrl = reader.result;
      }
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

.input-form {
  height: 3rem;
}

.update-button {
  margin-top: 2rem;
}

@media screen and (max-device-width: 768px) {
    .form-container {
      margin-top: 2rem;
    }
}
</style>