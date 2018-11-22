<template>
  <el-row class="cont-page" :gutter="24">
    <el-col :sm="24" :md="24" :lg="12" class="cont-image">
      <el-row type="flex" justify="end">
        <el-col :sm="24" :lg="19">
          <div class="image"></div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :sm="24" :md="24" :lg="12" :style="{marginTop: '5rem'}">
      <el-row type="flex" justify="start">   
        <el-col :sm="24" :lg="19">
          <div class="number-error">404</div>
          <div class="error-description">Sorry, the page you visited does not exist</div>
          <router-link to="/">
            <el-button type="primary">Back to home</el-button>
          </router-link>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<style scoped>
.image {
  background: url("https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg") no-repeat;
  min-height: 350px;
}

.cont-page {
  margin-top: 20vh;
}

.cont-error {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left: 5rem;
}

.number-error {
  color: #434e59;
  font-size: 72px;
  font-weight: 600;
  line-height: 72px;
  margin-bottom: 24px;
}

.error-description {
  color: rgba(0,0,0,.45);
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 16px;
}
</style>
