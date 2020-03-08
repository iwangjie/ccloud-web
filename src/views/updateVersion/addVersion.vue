<template>
    <a-card>
      <a-form :form="form" @submit="addVersionHandleSubmit">
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="选择APP"
      >
        <a-select
          v-decorator="['appId', { rules: [{ required: true, message: '请选择应用' }] }]"
          name="appId"
          style="width: 120px"
          @change="appIdHandleChange">

          <a-select-option v-for="item in appIds" v-bind:key="item.id" :value="item.id">{{item.appName}}
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="版本内部ID（例 103040）"
      >
        <a-input
          v-decorator="[
          'versionId',
          { rules: [{ required: true, message: 'Please input your versionId' }] },
        ]"
          placeholder="Please input your nickname"
        />
      </a-form-item>

      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="版本号（例 1.3.4）"
      >
        <a-input
          v-decorator="[
          'versionCode',
          { rules: [{ required: true, message: 'Please input your versionCode' }] },
        ]"
          placeholder="Please input your versionCode"
        />
      </a-form-item>

      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="更新标题"
      >
        <a-input
          v-decorator="[
          'updateTitle',
          { rules: [{ required: true, message: 'Please input your updateTitle' }] },
        ]"
          placeholder="Please input your updateTitle"
        />
      </a-form-item>

      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="更新说明"
      >
        <a-textarea
          v-decorator="[
          'updateInfo',
          { rules: [{ required: true, message: 'Please input your updateInfo' }] },
        ]"
          placeholder="Please input your updateInfo"
          :autosize="{ minRows: 6, maxRows: 10 }"
        />
      </a-form-item>

      <a-form-item :label-col="formItemLayout.labelCol"
                   :wrapper-col="formItemLayout.wrapperCol"
                   label="强制更新？">
        <a-radio-group v-decorator="['radio-group',
          { rules: [{ required: true, message: 'Please input your updateForced' }] }]">
          <a-radio value="1">
            是
          </a-radio>
          <a-radio value="0">
            否
          </a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
        <a-button type="primary" html-type="submit" ref="submit">
          发布
        </a-button>
      </a-form-item>
  </a-form>
  </a-card>
</template>
<script type="text/javascript">
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
}
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
}

export default {
  data () {
    return {
      appIds: [],
      formData: {
        appId: 0,
        startDate: null,
        endDate: null,
        pageNum: 1,
        pageSize: 12
      },
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: 'dynamic_rule' })
    }
  },
  mounted () {
    this.$api.getAppIds().then(resp => {
      if (resp.data) {
        this.appIds = resp.data
      }
    }).catch(e => {

    })
  },
  methods: {
    check () {
      this.form.validateFields(err => {
        if (!err) {
          console.info('success')
        }
      })
    },
    handleChange (e) {
      this.checkNick = e.target.checked
      this.$nextTick(() => {
        this.form.validateFields(['nickname'], { force: true })
      })
    },
    appIdHandleChange: function (value) {
      this.formData.appId = value.key
      console.log(value)
    },
    addVersionHandleSubmit (e) {
      e.preventDefault()
      this.data = []
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loading = true
          console.log(values)
          this.$api.saveUpdateVersion(values).then((resp) => {
            console.log(resp)
            alert('发布成功')
            this.form.resetFields()
          }).catch((e) => {
            console.log(e)
          })
        }
      })
    }
  }
}

</script>
<style type="text/css"></style>
