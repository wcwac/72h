<template>
  <nut-tabs v-model="this.now" type="smile">
    <nut-tabpane title="我要求助">
      <nut-cell-group title="上报所在位置">
        <nut-cell
          title="选择地址"
          :desc="text"
          is-link
          @click="showAddress"
        ></nut-cell>
        <nut-input
          placeholder="请输入文本"
          v-model="this.value"
          label="详细"
          text-align="right"
        />
      </nut-cell-group>
      <nut-cell-group title="求救人手机号码">
        <nut-input
          placeholder="请输入手机号码"
          v-model="this.mobile"
          label="详细"
          text-align="right"
        />
      </nut-cell-group>
      <nut-cell-group title="现场情况描述">
        <nut-input
          placeholder="请输入文本"
          v-model="this.desc"
          label="描述"
          text-align="right"
        />
      </nut-cell-group>
    </nut-tabpane>
    <nut-tabpane title="提供帮助">
      <nut-cell-group title="避难场所位置">
        <nut-cell
          title="选择地址"
          :desc="text"
          is-link
          @click="showAddress"
        ></nut-cell>
        <nut-input
          placeholder="请输入文本"
          v-model="this.value"
          label="详细"
          text-align="right"
        />
      </nut-cell-group>
      <nut-cell-group title="联系电话">
        <nut-input
          placeholder="请输入手机号码"
          v-model="this.mobile"
          label="详细"
          text-align="right"
        />
      </nut-cell-group>
      <nut-cell-group title="可提供的帮助说明">
        <nut-input
          placeholder="请输入文本"
          v-model="this.desc"
          label="描述"
          text-align="right"
        />
      </nut-cell-group>
    </nut-tabpane>
  </nut-tabs>
  <nut-cell-group title="提交">
    <nut-cell title="我已阅读用户许可协议">
      <template v-slot:link>
        <nut-switch v-model="checkbox" />
      </template>
    </nut-cell>
    <nut-cell>
      <nut-button type="info"  style="margin-left:80%">提交</nut-button>
    </nut-cell>
  </nut-cell-group>
  <nut-address
    v-model:visible="showPopup"
    :province="province"
    :city="city"
    :country="country"
    :town="town"
    @change="onChange"
    @close="close"
    custom-address-title="请选择所在地区"
  ></nut-address>
</template>
<style scoped>
.nut-tabpane {
  margin: 0;
  padding: 0;
}
</style>
<script>
import { toRefs, ref, reactive } from "vue";
export default {
  name: "submit",
  data() {
    return {
      now: 0,
      value: "",
      mobile: "",
      desc: "",
      checkbox: false,
      tabs: [
        {
          title: "Tab 1",
          content: "Tab 1",
        },
        {
          title: "Tab 2",
          content: "Tab 2",
        },
      ],
    };
  },
  setup() {
    const showPopup = ref(false);
    const address = reactive({
      province: [
        { id: 1, name: "北京" },
        { id: 2, name: "广西" },
        { id: 3, name: "江西" },
        { id: 4, name: "四川" },
      ],
      city: [
        { id: 7, name: "朝阳区" },
        { id: 8, name: "崇文区" },
        { id: 9, name: "昌平区" },
        { id: 6, name: "石景山区" },
      ],
      country: [
        { id: 3, name: "八里庄街道" },
        { id: 9, name: "北苑" },
        { id: 4, name: "常营乡" },
      ],
      town: [],
    });

    const text = ref("请选择地址");

    const showAddress = () => {
      showPopup.value = !showPopup.value;
    };

    const onChange = (cal) => {
      const name = address[cal.next];
      if (name.length < 1) {
        showPopup.value = false;
      }
    };
    const close = (val) => {
      console.log(val);
      text.value = val.data.addressStr;
    };

    return {
      showPopup,
      text,
      showAddress,
      onChange,
      close,
      ...toRefs(address),
    };
  },
};
</script>