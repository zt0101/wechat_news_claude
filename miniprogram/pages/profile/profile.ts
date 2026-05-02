Page({
  data: {
    stats: {
      follow: 0,
      fans: 0,
      likes: 0,
    },
    historyMenu: [
      { label: '浏览历史' },
      { label: '我的收藏' },
      { label: '我的评论' },
    ],
    settingMenu: [
      { label: '消息通知' },
      { label: '账号安全' },
      { label: '关于我们' },
      { label: '帮助与反馈' },
    ],
  },

  onStatTap(e: any) {
    wx.showToast({ title: e.currentTarget.dataset.type, icon: 'none' })
  },

  onMenuTap(e: any) {
    wx.showToast({ title: e.currentTarget.dataset.label, icon: 'none' })
  },

  onSetting() {
    wx.showToast({ title: '设置', icon: 'none' })
  },

  onLogout() {
    wx.showModal({
      title: '退出登录',
      content: '确定要退出当前账号吗？',
      confirmColor: '#fe2c55',
      success(res) {
        if (res.confirm) {
          wx.showToast({ title: '已退出', icon: 'success' })
        }
      },
    })
  },
})
