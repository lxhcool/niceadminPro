<template>
  <div class="weather">
    <div id="allmap" class="hide"></div>
    <div class="header clearfix">
      <h2 class="fl">{{location}}、中国</h2>
    </div>
    <div class="content">
      <h2><img :src="getWeatherImg"></h2>
      <div class="status clearfix">
        <p>最低 {{todayWeather.low}}°C - 最高 {{todayWeather.high}}°C</p>
        <p>{{todayWeather.text_day}}</p>
      </div>
    </div>
    <div class="footer">
      <div class="item" v-for="item of threeWeather" :key="item.date">
        <h2><img :src="require('./images/' + item.code_day + '.png')"></h2>
        <div class="status clearfix">
          <p>{{item.date}}</p>
          <p>{{item.low}}°C - {{item.high}}°C</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import util from 'utils/util'
  export default {
    name: 'weather',
    data () {
      return {
        location: '',
        todayWeather: {},
        threeWeather: []
      }
    },
    computed: {
      getWeatherImg () {
        if(this.todayWeather.code_day) {
          return require("./images/"+this.todayWeather.code_day+".png")
        }
      }
    },
    methods: {
      map () {
        let that = this
        let map = new BMap.Map("allmap")
        function getLocation(result) {
          var cityName = result.name
          map.setCenter(cityName)
          window.localStorage.setItem("cityName", cityName)
          that.location = cityName
        }
        var myCity = new BMap.LocalCity()
        myCity.get(getLocation)
      },
      getWeather () {
        let location = window.localStorage.getItem("cityName")
        this.$http.get('https://api.th580.com/customer/api/xinzhiWeather?location=' + location).then (res => {
          let weather = res.data.data.results[0]
          if (weather) {
            weather.daily.forEach(element => {
              element.date = util.getWeek(element.date)
            });
            this.todayWeather = weather.daily[0]
          }
          this.threeWeather = weather.daily
        })
      }
    },
    created () {
      this.getWeather()
    },
    mounted () {
      this.map()
    }
  }
</script>

<style lang="less">
@import "./css/weather.less";
</style>