<!--
 * @Description:
 * @Author: kcz
 * @Date: 2020-02-28 20:31:55
 * @LastEditors: kcz
 * @LastEditTime: 2020-02-29 21:30:52
 -->
<template>

  <div>
    <a-card>
      <a-form layout="inline" :form="form" @submit="handleSubmit">
        <a-form-item class="form_item">
          <label>选择应用</label>

          <a-select
            v-decorator="['appId', { rules: [{ required: true, message: '请选择应用' }] }]"
            name="appId"
            labelInValue
            style="width: 120px"
            @change="handleChange">

            <a-select-option v-for="item in appIds" v-bind:key="item.id" :value="item.id">{{item.appName}}</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item class="form_item">
          <label>选择日期</label>
          <a-range-picker @change="dateOnChange"/>
        </a-form-item>

        <a-form-item class="form_item">
          <a-button type="primary" html-type="submit" ref="submit">
            查询
          </a-button>
        </a-form-item>

      </a-form>
    </a-card>

    <a-card style="margin-top: 10px" :loading="loading">
      <a-list class="data_list" :grid="{ gutter: 16, column: 4 }" :dataSource="data">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a-card :title="item.noticeTitle"><span v-html="item.noticeInfo">{{index}}</span></a-card>
        </a-list-item>

        <a-pagination @change="pageChange" style="float: right" size="small" :total="page.total" :current="page.current"
                      :pageSize="page.size"
                      :showTotal="total => `Total ${total} items`"/>
      </a-list>

    </a-card>
  </div>

</template>

<script>

const data = []
export default {
  name: 'home',
  data () {
    return {
      data,
      appIds: [],
      formData: {
        appId: 0,
        startDate: null,
        endDate: null,
        pageNum: 1,
        pageSize: 12
      },
      page: {},
      form: this.$form.createForm(this, { name: 'param_form' }),
      loading: false

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
    handleSubmit (e) {
      e.preventDefault()
      const self = this
      this.data = []
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loading = true
          console.log(values)
          this.$api.getAnnouncementList(this.formData).then((resp) => {
            console.log(resp)
            const respData = resp.data
            if (respData) {
              const { records, ...pageData } = respData
              self.page = pageData
              self.data = records
            }

            this.loading = false
          }).catch((e) => {
            console.log(e)
          })
        }
      })
    },
    handleChange: function (value) {
      this.formData.appId = value.key
      console.log(value)
    },
    dateOnChange (date, dateString) {
      console.log(date, dateString)
      this.formData.startDate = dateString[0]
      this.formData.endDate = dateString[1]
    },
    pageChange (pageNum, pageSize) {
      this.formData.pageNum = pageNum
      this.formData.pageSize = pageSize
      // 执行查询
      this.$refs.submit.$el.click()
    }
  }
}
</script>
<style type="text/css">
  .data_list {
    margin-top: 50px;
  }

  .form_item {
    padding: 0px 20px 0px 20px;
  }

  .form_item label {
    padding-right: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
</style>
