<template>
  <div class="weather">
    <div id="allmap" class="hide"></div>
    <div class="header clearfix">
      <h2 class="fl">{{location}}、中国</h2>
    </div>
    <div class="content">

    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'weather',
    data () {
      return {
        location: ''
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
          console.log(res)
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