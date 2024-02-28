<script >
import CustomErrorHandling from '../helper/ErrorHandling'
export default {
  computed: {
    count() {
      return this.$store.getters.getCount;
    }
  },
  data() {
    return {
      ruleForm: {
        name: '',
        password: '',


      },
      rules: {
        name: [
          { required: true, message: 'Please input user name', trigger: 'blur' },
          { min: 5, max: 15, message: 'Length should be 5 to 15', trigger: 'blur' }
        ],
        password:
          [
            { required: true, message: 'Please input user password', trigger: 'blur' },
            { min: 5, max: 15, message: 'Length should be 5 to 15', trigger: 'blur' }
          ]
      }
    };
  },
  
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate((valid, fields) => {
        if (valid) {
          var payload = { 'userName': this.ruleForm.name.trim(), 'password': this.ruleForm.password.trim() }
          this.$store.dispatch('fetchMessages', payload).then(() => {
            CustomErrorHandling.showSuccess('Logged in successfully!');
            this.$router.push('/about');
          }).catch(() => {
            CustomErrorHandling.showError('Connection error');
          });
        } else {
          CustomErrorHandling.showError(`${fields.name[0].message} - ${fields.password[0].message}`);
        }
      });

    },
  }
};
</script>

<template>
  <div class="container">

    <el-card class="box-card main-box">
      <p class="title">Login </p>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" status-icon>
        <!-- User Name Input -->
        <el-form-item label="User Name" prop="name">
          <el-input class="input" v-model="ruleForm.name" placeholder="User Name" :validate-event="false" />
        </el-form-item>

        <!-- Password Input -->
        <el-form-item label="Password" prop="password">
          <el-input class="input" v-model="ruleForm.password" placeholder="Password" :validate-event="false" />
        </el-form-item>

        <!-- Login Button -->
        <el-form-item>
          <el-button @click="submitForm(ruleForm)" class="input button" type="success" round>Login</el-button>
        </el-form-item>

      </el-form>
      <div>

      </div>
    </el-card>

  </div>
</template>



<style>
.container {
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-box {
  padding: 10px;
}

.title {
  text-align: center;
  font-size: 20px;
}

.input {
  margin: 10px 0 0 0;
}

.button {
  float: right;
}
</style>