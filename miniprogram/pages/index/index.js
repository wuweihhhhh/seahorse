//index.js
const app = getApp()

Page({
  data: {
    slideImageUrl1: 'https://6261-battery-1g031de166842789-1305054869.tcb.qcloud.la/main_background1.jpg?sign=77ce3e54f8d4ccda29521019b77d36aa&t=1617531575',
    slideImageUrl2: 'https://6261-battery-1g031de166842789-1305054869.tcb.qcloud.la/bg2_1.jpg?sign=f75223b59211bc31ae1b893e8ada2372&t=1617532306',
    slideImageUrl3: 'https://6261-battery-1g031de166842789-1305054869.tcb.qcloud.la/bg3_1.png?sign=f10a1b460d3786de5f0925a58657e961&t=1617532741',
    slideImageUrl4: 'https://6261-battery-1g031de166842789-1305054869.tcb.qcloud.la/bg4_1.png?sign=186f7ef0fd25a5278aa94478ba036aa0&t=1617532861',
    slideImageUrl5: 'https://6261-battery-1g031de166842789-1305054869.tcb.qcloud.la/bg5_2.png?sign=6632216a68fd01a516f2c04ae2366987&t=1617533099',

  },

  onLoad: function() {
    
    
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        console.log("open-id获取成功");
        
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        
      }
    })

  }

  
  
 

 

})
