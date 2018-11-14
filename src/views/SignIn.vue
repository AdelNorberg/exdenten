<template>
  <el-row type="flex" justify="center">
    <el-col :span="6">
      <el-card class="box-card" shadow="none">
        <div class="name">Exdenten</div>
        <el-tabs class="tabs-cont" :value="activeName">
          <el-tab-pane label="Sign in" name="first">
            <el-form ref="form" :model="ruleForm" :rules="rules">
              <el-form-item class="form-item" label="Login" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item class="form-item" label="Password" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm">Sign in</el-button>
                <router-link to="/">
                  <el-button class="btn-canel">Cancel</el-button>
                </router-link>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="Sign up" name="second">
            <el-form ref="form" :model="ruleForm" :rules="rules">
              <el-form-item class="form-item" label="Login" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item class="form-item" label="Password" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item class="form-item" label="Confirm" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm">Sign up</el-button>
                <router-link to="/">
                  <el-button class="btn-canel">Cancel</el-button>
                </router-link>
              </el-form-item>
            </el-form>  
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          password: '',
          checkPass: ''
        },
        rules: {
          name: [
            { message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 20, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        activeName: 'first'
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
.box-card {
  border-radius: 2px;
  margin-top: 10vh;
}

.btn-canel {
  margin-left: 0.8rem;
}

.form-item {
  margin-top: -1rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.form-item:first-child {
  margin-top: 0.1rem;
}

.name {
  line-height: 55px;
}
</style>

