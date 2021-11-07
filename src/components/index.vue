<template>
  <div>
    <nut-row>
      <nut-col :span="16" :offset="4">
        <h1>云端方舟</h1>
        <i style="float:right">民间应急互助救援平台</i>
      </nut-col>
    </nut-row>
    <nut-row>
      <nut-col :span="12" :offset="6">
        <nut-button size="large" type="info" @click="this.$router.push('/submit')">我要求助</nut-button>
      </nut-col>
    </nut-row>
    <nut-row>
      <nut-col :span="12" :offset="6">
        <nut-button size="large" type="info" @click="this.$router.push('/submit')">提供帮助</nut-button>
      </nut-col>
    </nut-row>
  </div>
  
</template>
<script>
</script>
<style scoped>
.nut-button {
  margin-top: 100px;
}
</style>