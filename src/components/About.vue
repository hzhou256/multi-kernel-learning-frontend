<template>
  <div>
    <el-row class="frist_show" style="margin-top: 10px">
      <div class="overlay"></div>
      <!--头像-->
      <el-row>
        <el-col :span="24">
          <div class="head_img_div">
            <img
              class="head_img"
              src="../assets/Avatar.jpg"
              alt="天津大学"
            />
          </div>
        </el-col>
      </el-row>
      <el-row >
        <el-col :span="24">
          <div class="head_text">
            <h1>你好，我是孙泽宇</h1>
            <p>
              这是我的个人网站，我会在这里写一写在学习开发过程中遇到的问题和解决方案，或者其他的随笔
            </p>
            <p>
              也许未来会有那一天<br/>
              当你闭上双眼 恍然又回到了 那段华年<br/>
              那时梦仍遥远你我仍少年<br/>
              以为踮踮脚就能触到天
            </p>
          </div>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.frist_show {
  background-image: url("../assets/bg_1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}

.overlay {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.7;
  background: #fff;
  z-index: 0;
}

.head_img_div {
  margin: 65px auto;
}

.head_img {
  border-radius: 50%;
  height: 180px;
  margin: 0 auto;
  display: block;
}

.head_text {
  text-align: center;
}

.links_card {
  margin: 5%;
  text-align: center;
}
</style>
