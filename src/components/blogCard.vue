<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="12" :xs="{span:24}">
        <span>
          <h1>Detecting Drug/RNA-Disease Association</h1>
        </span>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="12" :xs="{span:24}">
        <el-carousel indicator-position="outside" height="400px">
          <el-carousel-item>
            <el-row type="flex" justify="center" style="height: 100%">
              <img src="../assets/drug_disease.png" style="height: 100%"/>
            </el-row>
          </el-carousel-item>
          <el-carousel-item>
            <el-row type="flex" justify="center" style="height: 100%">
              <img src="../assets/ncRNA_disease.png" style="height: 100%"/>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="12" :xs="{span:24}">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><h3>Introduction</h3></span>
          </div>
          <div>
            <h4>Low Rank Matrix Factorization Algorithm Based
              on Multi-Graph Regularization for Detecting
              Drug-Disease Association</h4>
            <p style="text-indent: 20px; line-height: 22px">In recent years, the identification of drug-related diseases has become a
              research hotspot. In order to
              accelerate the progress of research on the potential association of drug diseases, we develop a new
              low-rank matrix decomposition method based on multi-graph regularization. First, we calculate the
              similarity matrix of drugs and diseases by some feature extraction methods and then use these similarity
              matrices to construct regular terms of multiple graphs, combining the L2 regularized low-rank matrix
              decomposition method is used to solve the feature matrix of drugs and diseases, and finally predict the
              association between drugs and diseases.</p>
            <p style="line-height: 22px"><span style="font-weight:bold">Keywords: </span>Drug-disease association, Low-rank matrix factorization,
              Multi-graph regularization, Laplacian</p>
<!--            <p style="line-height: 22px"><span style="font-weight:bold">Authors: </span>Chengwei Ai, Hongpeng Yang, Yijie Ding*, Jijun Tang, Fei-->
<!--              Guo*</p>-->
          </div>
          <el-divider></el-divider>
          <div>
            <h4>A multi-layer multi-kernel neural network for determining associations
              between non-coding RNAs and diseases</h4>
            <p style="text-indent: 20px; line-height: 22px">Recognizing the association between non-coding RNA (ncRNA) and diseases plays
              an important role in
              pathogenesis research and is also a research hotspot in recent years. However, traditional methods are
              time-consuming in detecting the association between non-coding RNA and diseases. We propose a new deep
              multi-kernel learning method, which is called Multi Layer Multi Kernel Deep Neural Network (MLMKDNN).
              First, several similarity feature matrices of non-coding RNA and diseases are constructed by some feature
              calculation methods. Then these similarity feature matrices are mapped to the kernel space and fused by
              the deep kernel neural network. Finally, the feature matrix of non-coding RNA and disease fusion is sent
              into MLMKDNN to get the predicted association value. In the training process, the least square method is
              used to optimize the parameters of the network, and finally, the prediction results of the ncRNA-disease
              association are obtained.</p>
            <p style="line-height: 22px"><span style="font-weight:bold">Keywords: </span>Non-coding RNAs, Diseases, Deep multiple kernel learning
            </p>
<!--            <p style="line-height: 22px"><span style="font-weight:bold">Authors: </span>Chengwei Ai, Hongpeng Yang, Yijie Ding*, Jijun Tang, Fei-->
<!--              Guo*</p>-->
<!--            <p style="line-height: 22px"><span style="font-weight:bold">Citation: </span>Ai, Chengwei & Yang, Hongpeng & Ding, Yijie & Tang, Jijun-->
<!--              & Guo, Fei. (2022). A multi-layer multi-kernel-->
<!--              neural network for determining associations between non-coding RNAs and diseases. Neurocomputing. 493.-->
<!--              <el-link href="https://doi.org/10.1016/j.neucom.2022.04.068">-->
<!--                10.1016/j.neucom.2022.04.068-->
<!--              </el-link>-->
<!--            </p>-->
<!--            <p style="line-height: 22px"><span style="font-weight:bold">Codes and datasets: </span>The datasets, codes and corresponding materials-->
<!--              are available at-->
<!--              <el-link href="https://github.com/guofei-tju/MLMKDNN">-->
<!--                https://github.com/guofei-tju/MLMKDNN-->
<!--              </el-link>-->
<!--            </p>-->
          </div>
        </el-card>
      </el-col>
    </el-row>

<!--    <el-row type="flex" justify="center">-->
<!--      <el-col :span="12" :xs="{span:24}">-->
<!--        <el-card class="box-card">-->
<!--          <div slot="header" class="clearfix">-->
<!--            <span><h3>Contact</h3></span>-->
<!--          </div>-->
<!--          <el-descriptions title="Dr. Fei Guo">-->
<!--            <el-descriptions-item label="Email">guofeieileen@163.com</el-descriptions-item>-->
<!--            <el-descriptions-item label="Address">School of Computer Science and Engineering, Central South University.,-->
<!--              Quzhou, Changsha, 410083, P.R.China.-->
<!--            </el-descriptions-item>-->
<!--          </el-descriptions>-->
<!--          <el-descriptions title="Dr. Jijun Tang">-->
<!--            <el-descriptions-item label="Email">jj.tang@siat.ac.cn</el-descriptions-item>-->
<!--            <el-descriptions-item label="Address">Yangtze Delta Region Institute (Quzhou), University of-->
<!--              Electronic Science and Technology of China, Quzhou, 324000, P.R.China.-->
<!--            </el-descriptions-item>-->
<!--          </el-descriptions>-->
<!--          <el-descriptions title="Dr. Yijie Ding">-->
<!--            <el-descriptions-item label="Email">wuxi_dyj@163.com</el-descriptions-item>-->
<!--            <el-descriptions-item label="Address">-->
<!--              Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences, Shenzhen, 518055, P.R.China.-->
<!--            </el-descriptions-item>-->
<!--          </el-descriptions>-->
<!--          <el-descriptions title="Dr. Hongpeng Yang">-->
<!--            <el-descriptions-item label="Email">hpyang6107@163.com</el-descriptions-item>-->
<!--            <el-descriptions-item label="Address">-->
<!--              Department of Computer Science and Engineering, University of South Carolina, South Carolina, United-->
<!--              States.-->
<!--            </el-descriptions-item>-->
<!--          </el-descriptions>-->
<!--          <el-descriptions title="Dr. Chengwei Ai">-->
<!--            <el-descriptions-item label="Email">ai_chery@163.com</el-descriptions-item>-->
<!--            <el-descriptions-item label="Address">-->
<!--              School of Computer Science and Technology,-->
<!--              College of Intelligence and Computing, Tianjin University, Tianjin, 300072, P.R.China.-->
<!--            </el-descriptions-item>-->
<!--          </el-descriptions>-->
<!--        </el-card>-->
<!--      </el-col>-->
<!--    </el-row>-->
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.blog_card {
  box-sizing: border-box;
  margin: 3vh;
}

.el-row {
  margin-bottom: 20px;
}

.el-row.last-child {
  margin-bottom: 0;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
  margin: auto;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
