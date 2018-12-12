<template>
  <el-row type="flex" justify="center" :gutter="24">
    <el-col :xs="22" :sm="14" :md="10" :lg="6">
      <el-card class="box-card" shadow="none">
        <div class="name">Exdenten</div>
        <el-tabs class="tabs-cont" :value="activeName">

          <el-tab-pane key="1" v-loading="getProccessing" label="Sign in" name="first">
            <el-form ref="ruleForm2" :model="ruleForm2" status-icon>
              <el-form-item class="form-item" label="Email" prop="email">
                <el-input v-model="ruleForm2.email"></el-input>
              </el-form-item>
              <el-form-item class="form-item" label="Password" prop="pass">
                <el-input v-model="ruleForm2.pass" type="password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button  type="primary" 
                            :disabled="getProccessing"
                            @click="submitForm('ruleForm2')">
                            Sign in
                </el-button>
                <router-link to="/">
                  <el-button class="btn-canel">Cancel</el-button>
                </router-link>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          
          <el-tab-pane key="2" v-loading="getProccessing" label="Sign up" name="second">
            <el-form ref="ruleForm" :model="ruleForm" :rules="rules" status-icon>
              <el-form-item class="form-item" label="Email" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item class="form-item" label="Password" prop="pass">
                <el-input v-model="ruleForm.pass" type="password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item class="form-item" label="Confirm" prop="checkPass">
                <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button  type="primary" 
                            :disabled="getProccessing"
                            @click="submitForm('ruleForm')">
                            Sign up
                </el-button>
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
import { mapGetters } from "vuex";

export default {
  data() {
    //example validate in element ui docs
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm2: {
        email: "",
        pass: ""
      },
      ruleForm: {
        email: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        email: [
          { message: "Please input email address", trigger: "blur" },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"]
          }
        ],
        pass: [
          { validator: validatePass, trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "Length should be 6 to 20",
            trigger: "blur"
          }
        ],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },
      activeName: "first"
    };
  },
  computed: {
    ...mapGetters(["isUserAuthenticated", "getProccessing"])
  },
  watch: {
    isUserAuthenticated(val) {
      if (val === true) this.$router.push("/");
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          formName === "ruleForm2"
            ? this.$store.dispatch("SIGNIN", this.ruleForm2)
            : this.$store.dispatch("SIGNUP", this.ruleForm);
        } else {
          return false;
        }
      });
    }
  }
};
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
