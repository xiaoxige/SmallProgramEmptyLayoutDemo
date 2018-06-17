
var EmptyConstant = require("../empty/constant/EmptyConstant.js");

Component({

  properties: {
    emptyType: {
      type: Number,
      value: EmptyConstant.content
    },
    loadingTransparent: {
      type: Boolean,
      value: true
    }
  },
  data: {
    error: EmptyConstant.error,
    empty: EmptyConstant.empty,
    loading: EmptyConstant.loading,
    content: EmptyConstant.content,

    errorLayoutData: {
      emptyType: EmptyConstant.error,
      src: "../empty/res/image/icon_empty_error.png",
      prompt: "加载出错了...",
      btnPrompt: "重新加载"
    },
    emptyLayoutData: {
      emptyType: EmptyConstant.empty,
      src: "../empty/res/image/icon_empty_empty.png",
      prompt: "数据为空...",
      btnPrompt: "重新加载"
    },
    loadingLayoutData: {
      emptyType: EmptyConstant.loading,
      src: "../empty/res/image/icon_empty_loading.png",
      prompt: "加载中...",
      btnPrompt: null
    }
  },
  methods: {
    // 空布局中点击回调， 如点击重新加载按钮
    emptyCallback: function (event) {
      var emptyType = event.currentTarget.dataset.type;
      var emptyEventDetail = { emptyType: emptyType }
      var emptyEventOption = {}
      this.triggerEvent("emptyevent", emptyEventDetail, emptyEventOption)
    }

  }
})