<template>
  <center><h2>全国各地市灾情报道</h2></center>
  <div ref="chart" style="width: 100%; height: 500px"></div>
  <nut-tabs v-model="this.tab11value" direction="vertical" title-scroll>
    <nut-tabpane title="全国"> 
        <nut-cell>新闻1</nut-cell>
        <nut-cell>新闻2</nut-cell>
        <nut-cell>新闻3</nut-cell>
        <nut-cell>新闻4</nut-cell>
        <nut-cell>新闻5</nut-cell>
        <nut-cell>新闻6</nut-cell>
        <nut-cell>新闻7</nut-cell>
        <nut-cell>新闻8</nut-cell>
        <nut-cell>新闻9</nut-cell>
        <nut-cell>新闻10</nut-cell>
    </nut-tabpane>
    <nut-tabpane title="河南"> 
        <nut-cell>河南新闻1</nut-cell>
        <nut-cell>河南新闻2</nut-cell>
        <nut-cell>河南新闻3</nut-cell>
        <nut-cell>河南新闻4</nut-cell>
        <nut-cell>河南新闻5</nut-cell>
    </nut-tabpane>
    <nut-tabpane title="河北"> 
        <nut-cell>河北新闻1</nut-cell>
        <nut-cell>河北新闻2</nut-cell>
        <nut-cell>河北新闻3</nut-cell>
        <nut-cell>河北新闻4</nut-cell>
        <nut-cell>河北新闻5</nut-cell>
    </nut-tabpane>
    <nut-tabpane title="广东"> 
        <nut-cell>广东新闻1</nut-cell>
        <nut-cell>广东新闻2</nut-cell>
        <nut-cell>广东新闻3</nut-cell>
        <nut-cell>广东新闻4</nut-cell>
        <nut-cell>广东新闻5</nut-cell>
    </nut-tabpane>
  </nut-tabs>
</template>
  
<script>
// 导入图表
import echarts from "echarts";
// 导入中国地图
import "echarts/map/js/china";
import { reactive, ref, onMounted } from "vue";

export default {
  data() {
    return {
      tab11value: "",
    };
  },
  setup() {
    const state = reactive({
      chart: ref(),
    });

    const init = () => {
      if (state.chart) {
        // 图表的初始化
        let mycat = echarts.init(state.chart);
        const option = {
          title: {
            text: "",
            x: "center",
            textStyle: {
              color: "#9c0505",
            },
          },
          // 数据和类型
          series: [
            {
              type: "map",
              map: "china",
              label: {
                show: true,
                color: "red",
                fontSize: 10,
              },
              // 地图大小倍数
              zoom: 1.2,
              data: [
                { name: "北京", value: 40000 },
                { name: "山西", value: 30000 },
                { name: "内蒙古", value: 5000 },
                { name: "青海", value: 7000 },
                { name: "河北", value: 25000 },
                { name: "广东", value: 10000 },
                { name: "黑龙江", value: 40000 },
                { name: "南海诸岛", value: 20000 },
              ],
            },
          ],
          visualMap: {
            min: 800,
            max: 50000,
            text: ["High", "Low"],
            realtime: false,
            calculable: true,
            inRange: {
              color: ["lightskyblue", "yellow", "orangered"],
            },
          },
        };
        // 指定数据项和数据显示
        mycat.setOption(option);
      }
    };

    onMounted(() => {
      init();
    });

    return state;
  },
};
</script>