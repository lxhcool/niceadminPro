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
      <el-col :span="14" :lg="14" :md="24">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>访问量</span>
            </div>
            <div id="panel"></div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="10" :lg="10" :md="24">
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
    <el-row :gutter="20" class="mt15">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>任务列表</span>
            </div>
            <div class="todo">
              <el-table size="mini" stripe border :data="todos">
                <el-table-column align="center" prop="name" label="任务"></el-table-column>
                <el-table-column align="center" prop="time" label="所需时间"></el-table-column>
                <el-table-column align="center" prop="complete" label="完成情况"></el-table-column>
                <el-table-column align="center" label="操作">
                  <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="deleteRow(scope.$index, todos)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div> 
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>版本信息</span>
            </div>
            <div class="todo">
              <el-table size="mini" stripe border :data="versions">
                <el-table-column width="150" align="center" prop="name" label="名称"></el-table-column>
                <el-table-column align="center" prop="property" label="属性"></el-table-column>
              </el-table>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>留言</span>
            </div>
            <div class="message">
              <el-alert title="看什么看，有什么好看的" type="default"></el-alert>
              <el-alert title="呜哈哈哈哈哈哈" type="success"></el-alert>
              <el-alert title="嘻嘻嘻嘻嘻嘻嘻" type="info"></el-alert>
              <el-alert title="好嗨哟，感觉人生已经达到了高潮" type="warning"></el-alert>
              <el-alert title="感觉人生已经达到了巅峰" type="error"></el-alert>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          name: "吃饭",
          time: "1小时",
          complete: "已完成"
        },
        {
          name: "看电影",
          time: "2小时",
          complete: "进行中"
        },
        {
          name: "洗澡",
          time: "2小时",
          complete: "进行中"
        },
        {
          name: "看书",
          time: "2小时",
          complete: "进行中"
        },
        {
          name: "谈恋爱",
          time: "很久",
          complete: "进行中"
        }
      ],
      versions: [
        {
          name: "当前版本",
          property: "0.01",
        },
        {
          name: "使用框架",
          property: "element ul",
        },
        {
          name: "码云地址",
          property: "https://gitee.com/lxhcool/niceadminPro"
        },
        {
          name: "线上地址",
          property: "http://nicenav.cn/niceadmin"
        }
      ]
    };
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
              { value: 55, name: "百度" },
              { value: 65, name: "谷歌" },
              { value: 75, name: "新浪" },
              { value: 85, name: "淘宝" },
              { value: 95, name: "京东" },
              { value: 105, name: "网易" },
              { value: 115, name: "苹果" },
              { value: 125, name: "天猫" }
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
              { value: 55, name: "百度" },
              { value: 65, name: "谷歌" },
              { value: 75, name: "新浪" },
              { value: 85, name: "淘宝" },
              { value: 95, name: "京东" },
              { value: 105, name: "网易" },
              { value: 115, name: "苹果" },
              { value: 125, name: "天猫" }
            ]
          }
        ]
      };
      website.setOption(option, true);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
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
.todo {
  // height: 260px;
  .todo-list {
    .item {
      width: 100%;
      padding: 10px;
      border-radius: 4px;
      margin-top: 10px;
    }
  }
}
.message .el-alert {
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>