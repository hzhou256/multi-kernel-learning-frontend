<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="12" :xs="{span:24}">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight:bold">Detecting Non-coding RNAs-Disease Association</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="pushApp">Back</el-button>
          </div>
          <div>
            <h4>Description: </h4>
            <p style="text-indent: 20px; line-height: 22px">Recognizing the association between non-coding RNA (ncRNA)
              and diseases plays an important role in pathogenesis research and is also a research hotspot in recent
              years. However, traditional methods are time-consuming in detecting the association between non-coding RNA
              and diseases. We propose a new deep multi-kernel learning method, which is called Multi Layer Multi Kernel
              Deep Neural Network (MLMKDNN). First, several similarity feature matrices of non-coding RNA and diseases
              are constructed by some feature calculation methods. Then these similarity feature matrices are mapped to
              the kernel space and fused by the deep kernel neural network. Finally, the feature matrix of non-coding
              RNA and disease fusion is sent into MLMKDNN to get the predicted association value. In the training
              process, the least square method is used to optimize the parameters of the network, and finally, the
              prediction results of the ncRNA-disease association are obtained.</p>
            <el-descriptions title="Input parameters: " :column="1" border>
              <el-descriptions-item label="Dataset">There are four datasets used, named circRNA-disease (denoted as
                circRNA), lncRNA1-disease (denoted as lncRNA1), lncRNA-disease (denoted as lncRNA2) and miRNA-disease
                (denoted as miRNA).
              </el-descriptions-item>
              <el-descriptions-item label="NcRNA or disease">It indicates whether to perform association prediction on
                ncRNAs or diseases. Two inputs can be selected: ncRNA or disease.
              </el-descriptions-item>
              <el-descriptions-item label="Name">The name of selected ncRNA or disease to be predicted. Please select
                "Dataset" and "NcRNA or disease" options first.
              </el-descriptions-item>
              <el-descriptions-item label="Number of model layers">Parameters of the model, representing the number of
                layers of the model. There are two optional inputs, 1 or 2.
              </el-descriptions-item>
              <el-descriptions-item label="Number of model layer’s nodes">Parameters of the model, representing the
                number of nodes in each layer of the model. There are four optional inputs, 1 or 2 or 3 or 4.
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="12" :xs="{span:24}">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Prediction</span>
          </div>

          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
            <el-form-item label="Dataset" prop="dataName" required>
              <el-select v-model="ruleForm.dataName" placeholder="Please select data name" style="display: block;"
                         filterable @change="handleSelectChange" clearable>
                <el-option v-for="(item, index) in dataName" :key="index" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="NcRNA or disease" prop="ncRNAorDisease" required>
              <el-select v-model="ruleForm.ncRNAorDisease" placeholder="Please select ncRNA or disease"
                         style="display: block;" @change="handleSelectChange" clearable>
                <el-option v-for="(item, index) in ncRNAorDisease" :key="index" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="Name" prop="num" required>
              <el-select v-model="ruleForm.num" placeholder="Please select num" style="display: block;" filterable
                         clearable>
                <el-option v-for="(item, index) in num" :key="index" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="Number of model layers" prop="numLayer" required>
              <el-select v-model="ruleForm.numLayer" placeholder="Please select numLayer" style="display: block;"
                         clearable>
                <el-option v-for="(item, index) in numLayer" :key="index" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="Number of model layer’s nodes" prop="numNode" required>
              <el-select v-model="ruleForm.numNode" placeholder="Please select numNode" style="display: block;"
                         clearable>
                <el-option v-for="(item, index) in numNode" :key="index" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">Predict</el-button>
              <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="12" :xs="{span:24}">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Result</span>
          </div>
          <el-table :data="tableData" stripe style="width: 100%" v-loading="isLoading"
                    element-loading-text="Please wait while predicting">
            <el-table-column prop="index" label="index"></el-table-column>
            <el-table-column prop="name" label="name"></el-table-column>
            <template slot="empty">
              <el-empty description="No data"></el-empty>
            </template>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { rnaDiseasePredict } from '@/utils/api'
import {
  CircRNADiseaseNum,
  CircRNANcRNANum,
  LncRNA1DiseaseNum,
  LncRNA1NcRNANum,
  LncRNA2DiseaseNum,
  LncRNA2NcRNANum,
  MiRNADiseaseNum,
  MiRNANcRNANum,
  rnaDataName
} from '@/config/dict'

export default {
  name: 'RNA',
  data () {
    return {
      isLoading: false,
      tableData: [],
      ruleForm: {
        dataName: '',
        ncRNAorDisease: '',
        num: '',
        numLayer: '',
        numNode: ''
      },
      rules: {
        dataName: [
          {
            required: true,
            message: 'Please select data name',
            trigger: 'change'
          }
        ],
        ncRNAorDisease: [
          {
            required: true,
            message: 'Please select ncRNA or disease',
            trigger: 'change'
          }
        ],
        num: [
          {
            required: true,
            message: 'Please select num',
            trigger: 'change'
          }
        ],
        numLayer: [
          {
            required: true,
            message: 'Please select num',
            trigger: 'change'
          }
        ],
        numNode: [
          {
            required: true,
            message: 'Please select num',
            trigger: 'change'
          }
        ]
      },
      dataName: [],
      ncRNAorDisease: ['ncRNA', 'disease'],
      num: [],
      numLayer: ['1', '2'],
      numNode: ['1', '2', '3', '4']
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$confirm('This operation will submit request, continue?', {
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }).then(() => {
            this.isLoading = true
            rnaDiseasePredict(this.ruleForm).then(res => {
              console.log(JSON.stringify(res))
              var code = res.data.code
              var msg = res.data.msg
              if (code === '200') {
                var list = res.data.result.list
                var data = []
                for (let i = 0; i < list.length; i++) {
                  data.push({
                    index: i + 1,
                    name: list[i]
                  })
                }
                this.tableData = data
                this.isLoading = false
                this.$message({
                  type: 'success',
                  message: 'Predict successful!!'
                })
              } else {
                this.$message({
                  type: 'error',
                  message: msg
                })
                this.isLoading = false
              }
            }).catch(e => {
              this.isLoading = false
              this.$message({
                type: 'error',
                message: 'Server error'
              })
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: 'Cancel prediction'
            })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    pushApp () {
      this.$router.push('/index/App')
    },
    handleSelectChange () {
      const dataName = this.ruleForm.dataName
      const ncRNAorDisease = this.ruleForm.ncRNAorDisease
      if (dataName === 'circRNA') {
        if (ncRNAorDisease === 'disease') {
          this.num = CircRNADiseaseNum
        } else if (ncRNAorDisease === 'ncRNA') {
          this.num = CircRNANcRNANum
        }
      } else if (dataName === 'lncRNA1') {
        if (ncRNAorDisease === 'disease') {
          this.num = LncRNA1DiseaseNum
        } else if (ncRNAorDisease === 'ncRNA') {
          this.num = LncRNA1NcRNANum
        }
      } else if (dataName === 'lncRNA2') {
        if (ncRNAorDisease === 'disease') {
          this.num = LncRNA2DiseaseNum
        } else if (ncRNAorDisease === 'ncRNA') {
          this.num = LncRNA2NcRNANum
        }
      } else if (dataName === 'miRNA') {
        if (ncRNAorDisease === 'disease') {
          this.num = MiRNADiseaseNum
        } else if (ncRNAorDisease === 'ncRNA') {
          this.num = MiRNANcRNANum
        }
      }
    }
  },
  created () {
    this.dataName = rnaDataName
  }
}
</script>

<style scoped>
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
</style>
