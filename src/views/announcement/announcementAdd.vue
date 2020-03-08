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

      <a-button type="primary" @click="showModal">
        点按发布公告
      </a-button>
      <collection-create-form
        ref="collectionForm"
        :visible="visible"
        @cancel="handleCancel"
        @create="handleCreate"
      />
    </a-card>
  </div>

</template>

<script>

const data = []

const CollectionCreateForm = {
  props: ['visible'],
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'form_in_modal' })
  },
  data () {
    return {
      appIdList: []
    }
  },
  mounted () {
    this.$api.getAppIds().then(resp => {
      if (resp.data) {
        this.appIdList = resp.data
      }
    }).catch(e => {
    })
  },
  template: `
    <a-modal
      :visible="visible"
      title='发布一条新公告'
      okText='发布'
      cancelText="取消"
      @cancel="() => { $emit('cancel') }"
      @ok="() => { $emit('create') }"
    >
      <a-form layout='vertical' :form="form">
          <a-form-item label="选择应用">
            <a-select
            v-decorator="['appId', { rules: [{ required: true, message: '请选择应用' }] }]"
            name="appId"

            style="width: 120px"
            @change="()=> $emit('handleChange')">
            <a-select-option v-for="item in appIdList" v-bind:key="item.id" :value="item.id">{{item.appName}}</a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item label='公告标题'>
          <a-input
            v-decorator="[
              'noticeTitle',
              {
                rules: [{ required: true, message: '请输入公告标题!' }],
              }
            ]"
          />
        </a-form-item>
        <a-form-item label='公告内容(支持富文本)'>
          <a-input
            type='textarea'
            v-decorator="['noticeInfo']"
          />
        </a-form-item>
        <a-form-item class='collection-create-form_last-form-item'>
          <a-radio-group
            v-decorator="[
              'status',
              {
                initialValue: '0',
              }
            ]"
          >
              <a-radio value='0'>生效</a-radio>
              <a-radio value='1'>不生效</a-radio>
            </a-radio-group>
        </a-form-item>
      </a-form>
    </a-modal>
  `
}
export default {
  name: 'home',
  components: { CollectionCreateForm },
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
      visible: false

    }
  },
  mounted () {

  },
  methods: {
    initAppIds () {

    },
    handleChange: function (value) {
      this.formData.appId = value.key
      console.log(value)
    },
    showModal () {
      this.visible = true
      this.initAppIds()
    },
    handleCancel () {
      this.visible = false
    },
    handleCreate () {
      const form = this.$refs.collectionForm.form
      form.validateFields((err, values) => {
        if (err) {
          return
        }
        console.log('Received values of form: ', values)
        // 发布
        this.$api.saveAnnouncement(values).then(() => {
          alert('发布成功')
        }).catch((e) => {

        })

        form.resetFields()
        this.visible = false
      })
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
