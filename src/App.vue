<template>
<nut-navbar  @on-click-back="this.$router.go(-1)" @on-click-send="this.$router.push('/index')" icon="home"></nut-navbar>
  <router-view />
  <nut-tabbar :bottom="true">
    <nut-tabbar-item
      tab-title="互助救援"
      icon="home"
      to="/index"
    ></nut-tabbar-item>
    <nut-tabbar-item
      tab-title="数据共享"
      icon="find"
      to="/data"
    ></nut-tabbar-item>
    <nut-tabbar-item
      tab-title="应急配套"
      icon="cart"
      to="/shop"
    ></nut-tabbar-item>
    <nut-tabbar-item
      tab-title="经验分享"
      icon="category"
      to="/share"
    ></nut-tabbar-item>
    <nut-tabbar-item
      tab-title="个人中心"
      icon="my"
      to="/my"
    ></nut-tabbar-item>
  </nut-tabbar>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app,router-view{
  height: 100%;
}

</style>
