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
        <el-col :span="6" :md="7">
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
        <el-col :span="6" :md="7">
          <div class="grid-content bg-purple">
            <el-card class="nice-card">
              <div slot="header" class="clearfix">
                <span>天气</span>
              </div>
              <weather-component></weather-component>    
            </el-card>
          </div>
        </el-col>
        <el-col :span="12" :md="10">
          <div class="grid-content bg-purple">
            <el-card class="nice-card">
              <div slot="header" class="clearfix">
                <span>访问量</span>
              </div>
              <div id="panel"></div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="20" class="mt15">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>日历</span>
            </div>
            <div class="calendar">
              <full-calendar :events="events" :config="config"></full-calendar>
            </div>              
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import fullCalendar from "@/components/calendar";
import weatherComponent from "@/components/weather"
export default {
  data() {
    return {
      events: [
        {
          title: "锻炼身体",
          start: "2018-12-10",
          end: "2018-12-11",
          className: "default",
          description: "50个下蹲，30个俯卧撑，哑铃左右手各30下..."
        },
        {
          title: "优先级低",
          start: "2018-12-11",
          className: "primary"
        },
        {
          title: "优先级一般",
          start: "2018-12-12",
          className: "success"
        },
        {
          title: "优先级中",
          start: "2018-12-13",
          className: "info"
        },
        {
          title: "优先级较高",
          start: "2018-12-14",
          className: "warning"
        },
        {
          title: "优先级高",
          start: "2018-12-15",
          className: "danger"
        }
      ],
      config: {
        header: {
          left: "prev,next,today",
          center: "title",
          right: "month, basicWeek, basicDay, list"
        },
        height: "auto",
        defaultView: "month",
        titleFormat: "MMMM YYYY",
        monthNames: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        monthNamesShort: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        eventClick: event => {
          if (event.description) {
            let startTime = event.start._i
            let endTime = event.end._i ? " 至 " + event.end._i : ''
            let info = "<div class='info'><p>时间："+startTime+endTime+"</p><p>详细："+event.description+"</p></div>";
            this.$alert(info, event.title, {
              dangerouslyUseHTMLString: true
            });
          }
        }
      }
    };
  },
  components: {
    fullCalendar,
    weatherComponent
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
    }
  },
  mounted() {
    this.getLine();
  }
};
</script>

<style lang="less">
@import "index.less";
</style>