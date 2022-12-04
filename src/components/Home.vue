<template>
  <div class="divBox background">
    <el-container class="containerBox">
      <el-header class="home_menu">
        <el-row type="flex">
          <!--        头部菜单栏-->
          <el-col :span="24" class="hidden-sm-and-down head_div">
            <el-row type="flex">
              <el-col :span="3" class="vertical">
                <el-link icon="el-icon-s-home" type="primary" @click="clickHome">Home</el-link>
              </el-col>
              <el-col :span="3" class="vertical">
                <el-link icon="el-icon-brush" type="primary" @click="clickApp">Applications</el-link>
              </el-col>
<!--              <el-col :span="3" class="vertical">-->
<!--                <el-link icon="el-icon-chat-dot-round" type="primary" @click="clickAbout">About</el-link>-->
<!--              </el-col>-->
            </el-row>
          </el-col>
          <!-- 自适应 -->
          <el-col :span="6" class="hidden-md-and-up">
            <!-- 添加按钮,点击弹出drawer -->
            <el-button @click="drawer = true" class="el-icon-s-fold movie_btn"></el-button>
          </el-col>
        </el-row>
        <el-drawer
          class="drawer"
          size="60%"
          title="菜单"
          :visible.sync="drawer"
          :with-header="false"
          :modal-append-to-body="false"
        >
          <div class="navbar">
            <div class="navbar_head">
              <a class="navbar__brand">
                <img src="../assets/Avatar.jpg" alt="头像" class="navbar_logo"/>
                <strong class="navbar__title">Tianjin University</strong>
              </a>
            </div>
            <div class="navbar_main">
              <div class="navbar_menu">
                <ul class="menu_list">
                  <li class="menu_list_item">
                    <a class="menu_link" href="/index/Home">Home</a>
                  </li>
                  <li class="menu_list_item">
                    <a class="menu_link" href="/index/App">Application</a>
                  </li>
<!--                  <li class="menu_list_item">-->
<!--                    <a class="menu_link" href="/index/About">About</a>-->
<!--                  </li>-->
                </ul>
              </div>
            </div>
          </div>
        </el-drawer>
      </el-header>
      <!-- 主界面 -->
      <el-main>
        <router-view class="animate__animated animate__fadeInDown"></router-view>
      </el-main>
      <el-footer>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="24">
            <a>
              <p style="text-align: center;color: #005187;"><!-- 北洋蓝 -->
                Copyright：School of Computer Science and Technology, Tianjin University. All Rights Reserved.</p>
            </a>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      activeIndex: '1',
      drawer: false
    }
  },
  methods: {
    clickHome () {
      this.$router.push('/index/Home')
    },
    clickApp () {
      this.$router.push('/index/App')
    }
    // clickAbout () {
    //   this.$router.push('/index/About')
    // }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.title_a:link {
  color: black;
}

.title_a:visited {
  color: black;
}

.home_menu {
  height: 100%;
  width: 100%;
  background-color: #fff;
  padding-right: 0;
  border-bottom: 1px solid #e2e2e2;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
}

.el-aside {
  box-sizing: border-box;
  padding: 50px;
  margin-top: 50px;
}

.movie_btn {
  box-sizing: border-box;
  margin: 1.5vh;
}

.el-menu {
  border-bottom: 0 !important;
}

.btn_a {
  width: 100%;
  height: 100%;
}

.vertical {
  border-right: 1px solid #e2e2e2;
  text-align: center;
}

.head_div {
  box-sizing: border-box;
  margin-top: 20px;
}

.el-main {
  margin-top: 75px;
  height: 100%;
  box-sizing: border-box;
  padding: 0;
}

.el-footer {
  background-color: white;
}

.navbar_head {
  display: flex;
  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.1);
  padding: calc(1rem * 0.5) 1rem;
}

.navbar__brand {
  align-items: center;
  display: flex;
  font-weight: 700;
  height: 2rem;
  margin-right: 1rem;
}

.navbar_logo {
  border-radius: 50%;
  height: 100%;
  margin-right: 0.5rem;
}

.navbar_main {
  padding: 0.5rem;
}

.navbar_menu {
  text-decoration: none;
  font-weight: 500;
  overflow-x: hidden;
}

.menu_list {
  list-style: none;
  margin: 0;
  padding-right: 0;
}

.menu_list_item {
  margin: 0.25rem 0;
}

.menu_link {
  color: #606770;
  line-height: 40px;
  padding: 0.375rem 1rem;
}

.menu_link:active {
  color: #007be2;
}

.rot_img {
  width: 100%;
  height: 100%;
}

.el-divider {
  margin: 0;
  padding: 0;
}

@keyframes snow {
  0% {
    top: 0;
    transform-origin: center;
    opacity: 0;
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(25px);
    transform-origin: center;
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 1;
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(50px);
    transform-origin: center;
    opacity: 0;
  }
  100% {
    top: 100%;
  }
}

.img_header {
  width: 150px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-top: 5px;
  margin-right: 5px;
}

.divBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.containerBox {
  height: 100%;
}

.background {
  background-image: url("../assets/bg_1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}

</style>
