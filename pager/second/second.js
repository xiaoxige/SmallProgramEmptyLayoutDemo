// pager/second/second.js
var Empty = require("../../empty/constant/EmptyConstant.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    emptyType: Empty.error
  },
  emptyCallback: function(event) {

    this.setData({
      emptyType: Empty.loading
    });

    var that = this;
    var emptyType = event.detail.emptyType;
    if (emptyType == Empty.error) {
      setTimeout(function() {
        that.setData({
          emptyType: Empty.empty
        });
      }, 2000);
    } else if (emptyType == Empty.empty) {
      setTimeout(function() {
        that.setData({
          emptyType: Empty.content
        });
      }, 2000);
    }
  }
})