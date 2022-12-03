<template>
  <div class="project">
    <el-row type="flex" justify="center">
      <el-col :span="8" :xs="{span:24}">
        <el-card :body-style="{ padding: '0px' }" class="project_card" shadow="hover">
          <div class="scale-img">
            <img src="../assets/drug_disease.png" class="image"/>
          </div>
          <div style="padding: 14px;text-align:center;">
            <span>Detecting Drug-Disease Association</span>
            <div class="bottom clearfix">
              <p class="time">2022-12-3</p>
              <el-button type="primary" round class="button" @click="pushDrug">Select</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" :xs="{span:24}">
        <el-card :body-style="{ padding: '0px' }" class="project_card" shadow="hover">
          <div class="scale-img">
            <img src="../assets/ncRNA_disease.png" class="image"/>
          </div>
          <div style="padding: 14px;text-align:center;">
            <span>Detecting Non-coding RNAs-Disease Association</span>
            <div class="bottom clearfix">
              <p class="time">2022-12-3</p>
              <el-button type="primary" round class="button" @click="pushRNA">Select</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    pushDrug () {
      this.$router.push('/index/Drug')
    },
    pushRNA () {
      this.$router.push('/index/RNA')
    }
  }
}
</script>

<style scoped>
.project_card {
  box-sizing: border-box;
  margin: 20px;
}

.image {
  width: 100%;
  height: 225px;
  display: block;
  transition: transform 0.5s;
}

.image :hover {
  transform: scale(1.1);
}

.scale-img {
  overflow: hidden;
}

.scale-img img {
  width: 100%;
  -webkit-object-fit: cover;
  object-fit: cover;
  transition: .5s all linear;
  -ms-transition: .5s all linear; /* IE 9 */
  -moz-transition: .5s all linear; /* Firefox */
  -webkit-transition: .5s all linear; /* Safari 和 Chrome */
  -o-transition: .5s all linear; /* Opera */
}

.scale-img:hover img {
  transform: scale3d(1.1, 1.1, 1.1);
  -ms-transform: scale3d(1.1, 1.1, 1.1);
  -moz-transform: scale3d(1.1, 1.1, 1.1);
  -webkit-transform: scale3d(1.1, 1.1, 1.1);
  -o-transform: scale3d(1.1, 1.1, 1.1);
}
</style>
