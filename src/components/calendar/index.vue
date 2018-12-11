<template>
  <div class="calendar">
    <full-calendar ref="calendar" :events="events" :config="config"></full-calendar>
  </div>
</template>

<script>
  export default {
    name: 'calendar',
    props: {
      events: {
        type: Array
      },
      config: {
        type: Object
      }
    }
  }
</script>

<style lang="less">
  @import "~fullcalendar/dist/fullcalendar.css";
  @import "./css/calendar.less";
</style>