<template>
  <div class="dashboard container">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>访问量</span>
            </div>
            <h2 class="num">9,999,666</h2>
            <p class="title">总计访问量<span class="fr"><i class="iconfont nice-icon-fangwenliang"></i></span></p>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>留言</span>
            </div>
            <h2 class="num">81212</h2>
            <p class="title">总计留言数<span class="fr"><i class="iconfont nice-icon-liuyan"></i></span></p>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>收入</span>
            </div>
            <h2 class="num">88888888</h2>
            <p class="title">总收入<span class="fr"><i class="iconfont nice-icon-shouru"></i></span></p>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>商品</span>
            </div>
            <h2 class="num">120</h2>
            <p class="title">商品总数量<span class="fr"><i class="iconfont nice-icon-shangpin"></i></span></p>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="mt15">
      <el-col :span="14">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>访问量</span>
            </div>
            <div id="panel"></div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>网站</span>
            </div>
            <div id="website"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getLine() {
      let panel = this.$echarts.init(document.getElementById("panel"));
      let option = {
        title: {
          text: "今日流量趋势",
          left: "42%",
          top: "0%",
          textStyle: {
            color: "#666",
            fontWeight: "200",
            fontSize: "13",
            align: "center"
          }
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "0%",
          top: "14%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "PV",
            type: "line",
            smooth: true,
            stack: "总量",
            areaStyle: { normal: {} },
            itemStyle: {
              normal: {
                color: "rgba(64, 158, 255, 0.8)"
              }
            },
            data: [
              11,
              33,
              55,
              333,
              5555,
              3533,
              666,
              2666,
              5666,
              3999,
              1777,
              966,
              333,
              222,
              588,
              166,
              11
            ]
          },
          {
            name: "UV",
            type: "line",
            smooth: true,
            stack: "总量",
            areaStyle: { normal: {} },
            itemStyle: {
              normal: {
                color: "rgba(0, 179, 138, 0.8)"
              }
            },
            data: [
              111,
              333,
              555,
              3333,
              35555,
              35333,
              6666,
              16666,
              46666,
              29999,
              17777,
              9666,
              3333,
              2222,
              5888,
              1666,
              111
            ]
          }
        ]
      };
      panel.setOption(option, true);
    },
    getWebsite() {
      let website = this.$echarts.init(document.getElementById("website"));
      let option = {
        title: {
          text: "玫瑰图",
          subtext: "纯属虚构",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x: "center",
          y: "bottom",
          data: ["百度", "谷歌", "新浪", "淘宝", "京东", "网易", "苹果", "天猫"]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"]
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: "半径模式",
            type: "pie",
            radius: [20, 110],
            center: ["25%", "50%"],
            roseType: "radius",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#37a1db",
                    "#32c5e9",
                    "#9fe6b8",
                    "#ffdb5c",
                    "#ff9f7f",
                    "#fb7293",
                    "#e8bcf3",
                    "#8277ea"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            },
            data: [
              { value: 10, name: "百度" },
              { value: 5, name: "谷歌" },
              { value: 15, name: "新浪" },
              { value: 25, name: "淘宝" },
              { value: 20, name: "京东" },
              { value: 35, name: "网易" },
              { value: 30, name: "苹果" },
              { value: 40, name: "天猫" }
            ]
          },
          {
            name: "面积模式",
            type: "pie",
            radius: [30, 110],
            center: ["75%", "50%"],
            roseType: "area",
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#37a1db",
                    "#32c5e9",
                    "#9fe6b8",
                    "#ffdb5c",
                    "#ff9f7f",
                    "#fb7293",
                    "#e8bcf3",
                    "#8277ea"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            },
            data: [
              { value: 10, name: "百度" },
              { value: 5, name: "谷歌" },
              { value: 15, name: "新浪" },
              { value: 25, name: "淘宝" },
              { value: 20, name: "京东" },
              { value: 35, name: "网易" },
              { value: 30, name: "苹果" },
              { value: 40, name: "天猫" }
            ]
          }
        ]
      };
      website.setOption(option, true);
    }
  },
  mounted() {
    this.getLine();
    this.getWebsite();
  }
};
</script>

<style lang="less" scoped>
.num {
  font-size: 36px;
  color: #666;
  line-height: 36px;
  padding: 5px 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
}
.title {
  span {
    vertical-align: middle;
  }
}
#panel,
#website {
  width: 100%;
  height: 320px;
}
</style>