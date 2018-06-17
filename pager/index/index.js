var Empty = require("../../empty/constant/EmptyConstant.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    emptyType: Empty.content,
    loadingTransparent: true
  },

  emptyCallback: function(event) {
    var emptyType = event.detail.emptyType;
    if (emptyType == Empty.error) {
      wx.showToast({
        title: '加载错误中的按钮',
        icon: 'none',
        duration: 2000
      })
    } else if (emptyType == Empty.empty) {
      wx.showToast({
        title: '数据为空中的按钮',
        icon: 'none',
        duration: 2000
      })
    }
  },
  btnNextOnClick: function() {
    wx.navigateTo({
      url: '../second/second',
    })
  },
  btnLoadingOnClick: function() {
    this.setData({
      emptyType: Empty.loading
    });
  },
  btnErrorOnClick: function() {
    this.setData({
      emptyType: Empty.error
    });
  },
  btnEmptyOnClick: function() {
    this.setData({
      emptyType: Empty.empty
    });
  },
  btnCententOnclick: function() {
    this.setData({
      emptyType: Empty.content
    });
  },
  btnChangeloadingTransparentOnClick: function() {
    this.setData({
      loadingTransparent: this.data.loadingTransparent ^= true
    });
  }

})