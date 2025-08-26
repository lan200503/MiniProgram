const util = require("../../utils/util");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ["福建省", "宁德市", "福安市"],
    temp: 0,
    weather: "",
    icon: 100,
    humidity: 0,
    pressure: 0,
    visibility: 0,
    windDir: "",
    windSpeed: 0,
    windScale: 0,
  },

  regionChange: function (e) {
    this.setData({
      region: e.detail.value
    });
    this.getWeather();
  },

  getWeather: function () {
    var that = this;
    wx.request({
      url: "https://ne6x87xpdj.re.qweatherapi.com/v7/weather/now",
      data: {
        // location: that.data.region[1],
        location: util.getLocationID(that.data.region[1]),
        key: "47487dc7effd496cb898289383278c60"
      },
      success: function (res) {
        // console.log(res.data);
        that.setData({
          temp: res.data.now.temp,
          weather: res.data.now.text,
          icon: res.data.now.icon,
          humidity: res.data.now.humidity,
          pressure: res.data.now.pressure,
          visibility: res.data.now.vis,
          windDir: res.data.now.windDir,
          windSpeed: res.data.now.windSpeed,
          windScale: res.data.now.windScale,
        });
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
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