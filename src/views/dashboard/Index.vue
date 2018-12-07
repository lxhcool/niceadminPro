<template>
  <div class="dashboard container">
    <div class="nice-item">
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
    </div>
    <div class="nice-item">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-card class="nice-card">
              <div slot="header" class="clearfix">
                <span>信息</span>
              </div>
              <div class="userinfo con">
                <div class="avatar">
                  <img src="../../assets/default-avatar.png" alt="">
                </div>
                <p class="name">niceadmin Pro</p>
                <p class="nickname">lxhcool</p>
                <p class="description">我见证过无数的奇迹与灾祸！时空的诞生与崩塌！” “我走的道路，孤注一掷，不！” “我只想继续走下去......” “这个我......是最完美的一个。” “......但你们永远不会记得</p>
                <ul class="contact">
		              <li>
                    <el-tooltip class="item" effect="dark" content="1138659665@qq.com" placement="top">
                      <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=1138659665@qq.com" target="_blank">
                        <img src="../../assets/contact/mail.png">
                      </a>
                    </el-tooltip>
                  </li>
                  <li>
                    <el-tooltip class="item" effect="dark" content="1138659665" placement="top">
                      <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1138659665&amp;site=qq&amp;menu=yes" target="_blank">
                        <img src="../../assets/contact/qq.png">
                      </a>
                    </el-tooltip>
                  </li>
                  <li>
                    <el-tooltip class="item" effect="dark" content="18668161482" placement="top">
                      <a href="javascript:;">
                        <img src="../../assets/contact/wexin.png">
                      </a>
                    </el-tooltip>
                  </li>
                  <li>
                    <a href="https://gitee.com/lxhcool" target="_blank">
                      <img src="../../assets/contact/github.png">
                    </a>
                  </li>
                  <li>
                    <a href="https://music.163.com/#/user/home?id=119832090" target="_blank">
                      <img src="../../assets/contact/music.png">
                    </a>
                  </li>
                </ul>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-card class="nice-card">
              <div slot="header" class="clearfix">
                <span>访问量</span>
              </div>
              <div id="panel"></div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-card class="nice-card">
              <div slot="header" class="clearfix">
                <span>日历</span>
              </div>
              <div class="calendar">
                <full-calendar ref="calendar" :event-sources="eventSources" @event-selected="eventSelected" @event-created="eventCreated" :config="config"></full-calendar>
              </div>              
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="20" class="mt15" style="display:none">
      <el-col :span="14" :lg="14" :md="24">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>访问量</span>
            </div>
            <div id="panel" class="panel"></div>
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
    <el-row :gutter="20" class="mt15" style="display:none">
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
import moment from 'moment';
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
      ],
      events: [{
          id: 1,
          title: 'event1',
          start: moment().hours(12).minutes(0),
        },
        {
          id: 2,
          title: 'event2',
          start: moment().add(-1, 'days'),
          end: moment().add(1, 'days'),
          allDay: true,
        },
        {
          id: 3,
          title: 'event3',
          start: moment().add(2, 'days'),
          end: moment().add(2, 'days').add(6, 'hours'),
          allDay: false,
        },
      ],

      config: {
        header: {
          left: 'prev',
          center: 'title, today',
          right: 'next'
        },
        defaultView: 'month',
        eventClick: (event) => {
          this.selected = event;
        },
        titleFormat: 'YYYY MMMM',
        monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        dayNamesShort: ['日', '一', '二', '三', '四', '五', '六']
      },

      selected: {},
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
                color: "#92f0e6"
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
                color: "#b8d7ff"
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
@import "index.less";
</style>