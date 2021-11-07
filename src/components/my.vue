<template>
  <div>
    <nut-row>
      <nut-col :span="20" :offset="2">
        <nut-row>
          <center>
            <nut-avatar icon="my" size="large" />
          </center>
        </nut-row>
        <nut-row>
          <center>
            <div>用户名</div>
          </center>
        </nut-row>
        <nut-row>
          <nut-col style="margin-top:30px">
            <nut-noticebar
              background="rgb(251, 248, 220)"
              color="rgb(217, 80, 11)"
              :closeMode="true"
              text="我是救援组织，完善我的资料卡"
            ></nut-noticebar>
          </nut-col>
        </nut-row>
        <nut-cell title="个人基本信息" is-link></nut-cell>
        <nut-cell title="身份认证" is-link></nut-cell>
        <nut-cell title="救援记录" is-link></nut-cell>
        <nut-cell title="投保服务" is-link></nut-cell>
        <nut-cell title="守护积分" is-link></nut-cell>
        <nut-cell title="联系客服" is-link></nut-cell>
        <center>
          用户协议 | 关于我们 | 争分夺秒建言管理平台
        </center>
      </nut-col>
    </nut-row>
  </div>
</template>
<script>
export default {
  name: "index",
};
</script>
<style scoped>
.nut-button {
  margin-top: 30px;
}
</style>
