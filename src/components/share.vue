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
      <div v-for="(item, index) in refreshList" :key="index" class="card">
        <nut-cell>
          <nut-avatar size="small" icon="my"></nut-avatar>
          <nut-cell-title> {{ "热心市民" + String(Math.random()).substring(3, 8) }}</nut-cell-title>
           
        </nut-cell>
        <nut-cell>
          <nut-text>{{ item }}</nut-text>
        </nut-cell>
      </div>
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
      text: [
        "#暴雨互助#今天z市的雨也下得太大了吧!!又要开启“看海模式”了。今天公司提前下班，雨下的贼大，路上都没啥打伞蹚水的行人。趁着等红绿灯的空档，我打开“云端方舟”，想着或许附近有没有需要帮助的人。正巧，一点开“提供帮助”，就发现附近一个地铁站，站外的积水已经半人高，一位妈妈带着四岁的宝宝，蹚水也不是往回走也不是。我赶紧掉头，在平台上接单后锁定母子俩的位置，成功找到他俩，将母子俩安全送回了家。真是有惊无险!!",
        "#暴雨互助#又又又又又下大雨了!!大家一定尽量待在家里，注意人身安全。作为一名社区工作人员，秉承为人民服务的理念，我必须时时刻刻注意社区居民的动态以免在极端天气发生意外。前阵子，社区居民都用上了“云端方舟”，这不，刚一点开就能看到社区居民们的动态，我们也没有想到，社区居民们的动态就是这样的。",
      ],
    });
    const refreshLoadMore = (done) => {
      setTimeout(() => {
        const curLen = data.refreshList.length;
        for (let i = curLen; i < curLen + 4; i++) {
          data.refreshList.push(data.text[i % data.text.length]);
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
      for (let i = 0; i < 4; i++) {
        data.refreshList.push(data.text[i % data.text.length]);
      }
    };
    onMounted(() => {
      init();
    });
    return { refreshLoadMore, refreshHasMore, refresh, ...toRefs(data) };
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 90%;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

.container {
  padding: 2px 16px;
}

div {
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
}
</style>