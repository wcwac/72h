<template>
  <h2>为了您和家人的安全</h2>
  <h2 style="float: right">请选购您的专属应急包</h2>
  <nut-tabs v-model="this.tab11value" direction="vertical" title-scroll>
    <nut-tabpane title="医疗用品">
      <nut-row type="flex" wrap="wrap">
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-1.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品1</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-2.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品2</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-3.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品3</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-4.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品4</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-5.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品5</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-6.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品6</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
      </nut-row>
    </nut-tabpane>
    <nut-tabpane title="生活用品">
      <nut-row type="flex" wrap="wrap">
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-1.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品1</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-2.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品2</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-3.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品3</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-4.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品4</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-5.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品5</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-6.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品6</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
      </nut-row>
    </nut-tabpane>
    <nut-tabpane title="应急设备">
      <nut-row type="flex" wrap="wrap">
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-1.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品1</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-2.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品2</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-3.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品3</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-4.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品4</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-5.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品5</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-6.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品6</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
      </nut-row>
    </nut-tabpane>
    <nut-tabpane title="防灾工具">
      <nut-row type="flex" wrap="wrap">
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-1.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品1</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-2.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品2</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-3.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品3</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-4.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品4</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-5.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品5</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
        <nut-col :span="12">
          <nut-cell class="flex-content">
            <nut-col>
              <nut-row
                ><img
                  src="https://img.yzcdn.cn/vant/apple-6.jpg"
                  style="width: 100px; height: 100px"
              /></nut-row>
              <nut-row><div>商品6</div></nut-row>
            </nut-col>
          </nut-cell>
        </nut-col>
      </nut-row>
    </nut-tabpane>
  </nut-tabs>

  <nut-icon name="retweet" color="#fff"> </nut-icon>
  <span class="text">{{ myActive ? "自定义开" : "自定义关" }}</span>
</template>
  
<script>
export default {
  data() {
    return {
      tab11value: "",
    };
  },
  setup() {
    return {
      //
    };
  },
};
</script>