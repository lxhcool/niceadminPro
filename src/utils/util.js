const util = {
  /**
   * 是否为Null
   * @param object
   * @returns {Boolean}
   */
  isNull(object) {
    if (object == null || typeof object == 'undefined') {
      return true
    }
    return false
  },
  /**
   * 根据日期字符串获取星期几
   * @param dateString 日期字符串（如：2016-12-29），为空时为用户电脑当前日期
   * @returns {String}
   */
  getWeek(dateString) {
    var date
    if (this.isNull(dateString)) {
      date = new Date()
    } else {
      var dateArray = dateString.split('-')
      date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2])
    }
    return '星期' + '日一二三四五六'.charAt(date.getDay())
  }
}

export default util