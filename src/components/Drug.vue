<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="12" :xs="{span:24}">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight:bold">Detecting Drug-Disease Association</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="pushApp">Back</el-button>
          </div>
          <div>
            <h4>Description: </h4>
            <p style="text-indent: 20px; line-height: 22px">In recent years, the identification of drug-related diseases
              has become a research hotspot. In order to accelerate the progress of research on the potential
              association of drug diseases, we develop a new low-rank matrix decomposition method based on multi-graph
              regularization. First, we calculate the similarity matrix of drugs and diseases by some feature extraction
              methods and then use these similarity matrices to construct regular terms of multiple graphs, combining
              the L2 regularized low-rank matrix decomposition method is used to solve the feature matrix of drugs and
              diseases, and finally predict the association between drugs and diseases.</p>
            <el-descriptions title="Input parameters: " :column="1" border>
              <el-descriptions-item label="Dataset">There are three datasets used, named Cdataset, Fdataset and
                LRSSL_dataset.
              </el-descriptions-item>
              <el-descriptions-item label="Drug or disease">It indicates whether to perform association prediction on
                drugs or diseases. Two inputs can be selected: drug or disease.
              </el-descriptions-item>
              <el-descriptions-item label="Name">The name of a specific drug or disease. It is related with "Dataset"
                and
                "Drug or disease" options.
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
                         filterable clearable @change="handleSelectChange">
                <el-option v-for="(item, index) in dataName" :key="index" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="Drug or disease" prop="drugOrDisease" required>
              <el-select v-model="ruleForm.drugOrDisease" placeholder="Please select drug or disease"
                         style="display: block;" @change="handleSelectChange" clearable>
                <el-option v-for="(item, index) in drugOrDisease" :key="index" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="Name" prop="num" required>
              <el-select v-model="ruleForm.num" placeholder="Please select num" style="display: block;" filterable
                         clearable>
                <el-option v-for="(item, index) in num" :key="index" :label="item" :value="item"></el-option>
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
          <div>
            <el-table :data="tableData" stripe style="width: 100%" v-loading="isLoading"
                      element-loading-text="Please wait while predicting">
              <el-table-column prop="index" label="Index"></el-table-column>
              <el-table-column prop="name" label="Name"></el-table-column>
              <template slot="empty">
                <el-empty description="No data"></el-empty>
              </template>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { drugDiseasePredict } from '@/utils/api'
import {
  CdatasetDiseaseNum,
  CdatasetDrugNum,
  drugDataName,
  FdatasetDiseaseNum,
  FdatasetDrugNum,
  LRSSLdatasetDiseaseNum,
  LRSSLdatasetDrugNum
} from '@/config/dict'

export default {
  name: 'Drug',
  data () {
    return {
      isLoading: false,
      tableData: [],
      ruleForm: {
        dataName: '',
        drugOrDisease: '',
        num: ''
      },
      rules: {
        dataName: [
          {
            required: true,
            message: 'Please select data name',
            trigger: 'change'
          }
        ],
        drugOrDisease: [
          {
            required: true,
            message: 'Please select drug or disease',
            trigger: 'change'
          }
        ],
        num: [
          {
            required: true,
            message: 'Please select num',
            trigger: 'change'
          }
        ]
      },
      dataName: [],
      drugOrDisease: ['drug', 'disease'],
      num: []
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$confirm('This option will submit request, continue?', {
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }).then(() => {
            this.isLoading = true
            drugDiseasePredict(this.ruleForm).then(res => {
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
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: 'Cancel submit'
            })
            this.isLoading = false
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
      const drugOrDisease = this.ruleForm.drugOrDisease
      if (dataName === 'Cdataset') {
        if (drugOrDisease === 'disease') {
          this.num = CdatasetDiseaseNum
        } else if (drugOrDisease === 'drug') {
          this.num = CdatasetDrugNum
        }
      } else if (dataName === 'Fdataset') {
        if (drugOrDisease === 'disease') {
          this.num = FdatasetDiseaseNum
        } else if (drugOrDisease === 'drug') {
          this.num = FdatasetDrugNum
        }
      } else if (dataName === 'LRSSL_dataset') {
        if (drugOrDisease === 'disease') {
          this.num = LRSSLdatasetDiseaseNum
        } else if (drugOrDisease === 'drug') {
          this.num = LRSSLdatasetDrugNum
        }
      }
    }
  },
  created () {
    this.dataName = drugDataName
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
  justify-content: center;
}
</style>
