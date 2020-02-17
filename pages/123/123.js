// pages/123/123.js
Page({
  _handlerAutoLogin:function(evt){
    console.log(evt)
    if(evt.detail.value.length >0){
      this.setData({
        rememberpwd:true
      })

    }
  },
  _handlerrememberpwd:function(evt){
    console.log(evt)
    if(evt.detail.value.length=0){

this.setData({
  autoLogin:false
})
    }
  },
_handlerpwdinput:function(evt){
  let passwordv=evt.detail.value;
  console.log()
  this.setData({
    passwordv:passwordv
  })
  this.setData({
    canLogin:passwordv.length > 0 && this.data.isgood
  })
},

 _handlersubmit: function(evt){
  console.log(evt)},
  _handleraccountinput:function(evt)
  {
    let accountv = evt.detail.value;
    this.setData({
      accountv: accountv,
      isgood: accountv.length >= 3,
      canLogin:this.data.passwordv.length> 0 && this.data.accountv.length>=3
    })
  },



  /**
   * 页面的初始数据
   */
  data : {
isgood:false,
canLogin:false,
accountv: "",
passwordv :"",
autoLogin: false,
rememberpwd:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})