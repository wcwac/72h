<template>
  <ul class="infiniteUl" id="refreshScroll">
    <nut-infiniteloading
      pull-icon="help"
      container-id="refreshScroll"
      :use-window="false"
      :is-open-refresh="true"
      :has-more="refreshHasMore"
      @load-more="refreshLoadMore"
      @refresh="refresh"
    >
      <nut-cell v-for="(item, index) in refreshList" :key="index">
        {{ item }}
      </nut-cell>
    </nut-infiniteloading>
  </ul>
</template>
  
<script>
import { reactive, ref, onMounted, toRefs } from "vue";
import { Toast } from "@nutui/nutui";
export default {
  setup() {
    const refreshHasMore = ref(true);
    const data = reactive({
      refreshList: [],
    });
    const refreshLoadMore = (done) => {
      setTimeout(() => {
        const curLen = data.refreshList.length;
        for (let i = curLen; i < curLen + 10; i++) {
          data.refreshList.push(`${i}`);
        }
        if (data.refreshList.length > 30) refreshHasMore.value = false;
        done();
      }, 500);
    };

    const refresh = (done) => {
      setTimeout(() => {
        refreshLoadMore();
        Toast.success("刷新成功");
        done();
      }, 1000);
    };
    const init = () => {
      for (let i = 0; i < 10; i++) {
        data.refreshList.push(`${i}`);
      }
    };
    onMounted(() => {
      init();
    });
    return { refreshLoadMore, refreshHasMore, refresh, ...toRefs(data) };
  },
};
</script>