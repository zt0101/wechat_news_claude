function formatLikes(n: number): string {
  if (n >= 10000) return (n / 10000).toFixed(1) + '万'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(n)
}

const PEEK1 = 50  // card1 在 card0 底部露出的像素
const PEEK2 = 30  // card2 在 card1 底部露出的像素

const NEWS_LIST = [
  {
    id: 1, title: 'OpenAI 发布全新大模型，推理能力较上代提升300%，多项测试超越人类水平',
    category: '科技', categoryKey: 'tech', source: '科技日报',
    images: ['https://picsum.photos/seed/t001a/600/900', 'https://picsum.photos/seed/t001b/600/900', 'https://picsum.photos/seed/t001c/600/900'],
    imgIndex: 0, likes: 3421, likesText: formatLikes(3421), liked: false,
    comments: 892, commentsText: formatLikes(892), shares: 234, sharesText: formatLikes(234),
  },
  {
    id: 2, title: 'A股三大指数全线强势上涨，沪指重新站上3500点整数关口',
    category: '财经', categoryKey: 'finance', source: '财经早报',
    images: ['https://picsum.photos/seed/f002a/600/900', 'https://picsum.photos/seed/f002b/600/900'],
    imgIndex: 0, likes: 12034, likesText: formatLikes(12034), liked: false,
    comments: 3201, commentsText: formatLikes(3201), shares: 876, sharesText: formatLikes(876),
  },
  {
    id: 3, title: '知名歌手宣布年底开全国巡回演唱会，首站上海门票一秒售罄',
    category: '娱乐', categoryKey: 'ent', source: '娱乐头条',
    images: ['https://picsum.photos/seed/e003a/600/900', 'https://picsum.photos/seed/e003b/600/900', 'https://picsum.photos/seed/e003c/600/900', 'https://picsum.photos/seed/e003d/600/900'],
    imgIndex: 0, likes: 8956, likesText: formatLikes(8956), liked: false,
    comments: 4320, commentsText: formatLikes(4320), shares: 1203, sharesText: formatLikes(1203),
  },
  {
    id: 4, title: '多地持续高温突破历史极值，气象部门发布最高级别红色预警',
    category: '热点', categoryKey: 'hot', source: '新华社',
    images: ['https://picsum.photos/seed/h004a/600/900', 'https://picsum.photos/seed/h004b/600/900', 'https://picsum.photos/seed/h004c/600/900'],
    imgIndex: 0, likes: 5678, likesText: formatLikes(5678), liked: false,
    comments: 1432, commentsText: formatLikes(1432), shares: 567, sharesText: formatLikes(567),
  },
  {
    id: 5, title: '特斯拉发布全新 Model 3，续航提升20%同时价格下调至21万元',
    category: '科技', categoryKey: 'tech', source: '汽车之家',
    images: ['https://picsum.photos/seed/t005a/600/900', 'https://picsum.photos/seed/t005b/600/900'],
    imgIndex: 0, likes: 2109, likesText: formatLikes(2109), liked: false,
    comments: 654, commentsText: formatLikes(654), shares: 189, sharesText: formatLikes(189),
  },
  {
    id: 6, title: '央行宣布降准0.25个百分点，释放长期流动性约5000亿元',
    category: '财经', categoryKey: 'finance', source: '经济参考报',
    images: ['https://picsum.photos/seed/f006a/600/900', 'https://picsum.photos/seed/f006b/600/900'],
    imgIndex: 0, likes: 987, likesText: formatLikes(987), liked: false,
    comments: 342, commentsText: formatLikes(342), shares: 98, sharesText: formatLikes(98),
  },
  {
    id: 7, title: '大热综艺《声生不息》开播首日，收视率创近两年同类节目新高',
    category: '娱乐', categoryKey: 'ent', source: '综艺周刊',
    images: ['https://picsum.photos/seed/e007a/600/900', 'https://picsum.photos/seed/e007b/600/900', 'https://picsum.photos/seed/e007c/600/900'],
    imgIndex: 0, likes: 12043, likesText: formatLikes(12043), liked: false,
    comments: 5678, commentsText: formatLikes(5678), shares: 2341, sharesText: formatLikes(2341),
  },
  {
    id: 8, title: '强台风登陆福建沿海，多省启动防汛二级应急响应',
    category: '热点', categoryKey: 'hot', source: '人民日报',
    images: ['https://picsum.photos/seed/h008a/600/900', 'https://picsum.photos/seed/h008b/600/900'],
    imgIndex: 0, likes: 4521, likesText: formatLikes(4521), liked: false,
    comments: 1098, commentsText: formatLikes(1098), shares: 432, sharesText: formatLikes(432),
  },
  {
    id: 9, title: '苹果发布 iOS 20 正式版，全面引入 Apple Intelligence AI 功能',
    category: '科技', categoryKey: 'tech', source: '苹果圈',
    images: ['https://picsum.photos/seed/t009a/600/900', 'https://picsum.photos/seed/t009b/600/900', 'https://picsum.photos/seed/t009c/600/900'],
    imgIndex: 0, likes: 6789, likesText: formatLikes(6789), liked: false,
    comments: 2134, commentsText: formatLikes(2134), shares: 876, sharesText: formatLikes(876),
  },
  {
    id: 10, title: '一线城市房地产市场加速回暖，北京二手房成交量环比上升28%',
    category: '财经', categoryKey: 'finance', source: '房产周刊',
    images: ['https://picsum.photos/seed/f010a/600/900', 'https://picsum.photos/seed/f010b/600/900'],
    imgIndex: 0, likes: 1456, likesText: formatLikes(1456), liked: false,
    comments: 567, commentsText: formatLikes(567), shares: 123, sharesText: formatLikes(123),
  },
  {
    id: 11, title: '顶流爱豆突然宣布结婚，粉丝连夜刷屏震惊整个互联网',
    category: '娱乐', categoryKey: 'ent', source: '明星情报站',
    images: ['https://picsum.photos/seed/e011a/600/900', 'https://picsum.photos/seed/e011b/600/900', 'https://picsum.photos/seed/e011c/600/900'],
    imgIndex: 0, likes: 23891, likesText: formatLikes(23891), liked: false,
    comments: 15043, commentsText: formatLikes(15043), shares: 6789, sharesText: formatLikes(6789),
  },
  {
    id: 12, title: '全球多国爆发大规模抗议示威活动，国际局势持续升温',
    category: '国际', categoryKey: 'intl', source: '国际观察',
    images: ['https://picsum.photos/seed/i012a/600/900', 'https://picsum.photos/seed/i012b/600/900'],
    imgIndex: 0, likes: 3204, likesText: formatLikes(3204), liked: false,
    comments: 987, commentsText: formatLikes(987), shares: 345, sharesText: formatLikes(345),
  },
  {
    id: 13, title: '中国男足引进世界级主帅，球迷期待2026世界杯出线希望大增',
    category: '体育', categoryKey: 'sport', source: '体育频道',
    images: ['https://picsum.photos/seed/s013a/600/900', 'https://picsum.photos/seed/s013b/600/900'],
    imgIndex: 0, likes: 9087, likesText: formatLikes(9087), liked: false,
    comments: 4321, commentsText: formatLikes(4321), shares: 1234, sharesText: formatLikes(1234),
  },
  {
    id: 14, title: '外卖骑手权益保障新规出台，平台须依法为骑手缴纳社保',
    category: '社会', categoryKey: 'society', source: '工人日报',
    images: ['https://picsum.photos/seed/so014a/600/900', 'https://picsum.photos/seed/so014b/600/900'],
    imgIndex: 0, likes: 2341, likesText: formatLikes(2341), liked: false,
    comments: 876, commentsText: formatLikes(876), shares: 234, sharesText: formatLikes(234),
  },
  {
    id: 15, title: '华为 Mate 70 旗舰系列正式发布，搭载自研麒麟 9100 处理器',
    category: '科技', categoryKey: 'tech', source: '手机中国',
    images: ['https://picsum.photos/seed/t015a/600/900', 'https://picsum.photos/seed/t015b/600/900', 'https://picsum.photos/seed/t015c/600/900'],
    imgIndex: 0, likes: 15023, likesText: formatLikes(15023), liked: false,
    comments: 6789, commentsText: formatLikes(6789), shares: 2341, sharesText: formatLikes(2341),
  },
  {
    id: 16, title: '美联储宣布降息50个基点，为2020年以来最大幅度单次降息',
    category: '财经', categoryKey: 'finance', source: '华尔街日报中文',
    images: ['https://picsum.photos/seed/f016a/600/900', 'https://picsum.photos/seed/f016b/600/900'],
    imgIndex: 0, likes: 7823, likesText: formatLikes(7823), liked: false,
    comments: 3012, commentsText: formatLikes(3012), shares: 987, sharesText: formatLikes(987),
  },
]

Page({
  data: {
    newsList: NEWS_LIST,
    currentIndex: 0,
    capsuleBottom: 74,
    cardHeight: 0,

    c0: null as any,
    c1: null as any,
    c2: null as any,

    c0Style: '',
    c1Style: '',
    c2Style: '',
  },

  _wh: 0,
  _cardH: 0,
  _c1InitTop: 0,
  _c2InitTop: 0,
  _startY: 0,
  _dragging: false,
  _animating: false,

  onLoad() {
    const capsule = wx.getMenuButtonBoundingClientRect()
    const { windowHeight } = wx.getSystemInfoSync()

    this._wh = windowHeight
    this._cardH = windowHeight - PEEK1 - PEEK2
    this._c1InitTop = windowHeight - PEEK1
    this._c2InitTop = windowHeight - PEEK1 - PEEK2

    this.setData({
      capsuleBottom: capsule.bottom,
      cardHeight: this._cardH,
    })

    this.refreshCards()
    this.applyStyles(0)
  },

  refreshCards() {
    const { newsList, currentIndex } = this.data
    this.setData({
      c0: newsList[currentIndex] || null,
      c1: newsList[currentIndex + 1] || null,
      c2: newsList[currentIndex + 2] || null,
    })
  },

  // 根据拖拽距离计算三张卡片的位置
  applyStyles(dragY: number, useTransition = false) {
    const cardH = this._cardH
    const progress = Math.max(0, Math.min(1, -dragY / cardH))
    const tr = useTransition ? 'transition: top 0.32s cubic-bezier(0.25,0.46,0.45,0.94);' : ''

    // card0 随手指上移
    const c0Top = dragY
    // card1 从底部升起：progress=0 时在 _c1InitTop，progress=1 时到达 0
    const c1Top = this._c1InitTop * (1 - progress)
    // card2 跟随 card1，保持 PEEK2 偏移
    const c2Top = this._c2InitTop - PEEK2 * progress

    this.setData({
      c0Style: `top: ${c0Top}px; ${tr}`,
      c1Style: `top: ${c1Top}px; ${tr}`,
      c2Style: `top: ${c2Top}px; ${tr}`,
    })
  },

  onTouchStart(e: any) {
    if (this._animating) return
    this._startY = e.touches[0].clientY
    this._dragging = true
  },

  onTouchMove(e: any) {
    if (!this._dragging || this._animating) return
    const dy = e.touches[0].clientY - this._startY
    if (dy > 0) return  // 只允许向上滑
    this.applyStyles(dy, false)
  },

  onTouchEnd(e: any) {
    if (!this._dragging || this._animating) return
    this._dragging = false
    const dy = e.changedTouches[0].clientY - this._startY

    if (dy < 0 && -dy > this._cardH * 0.28) {
      this.completeSwipe()
    } else {
      this.snapBack()
    }
  },

  completeSwipe() {
    if (!this.data.c1) {
      this.snapBack()
      return
    }
    this._animating = true
    const tr = 'transition: top 0.32s ease;'

    // card0 飞出屏幕，card1 升至顶部，card2 升至 card1 原位
    this.setData({
      c0Style: `top: -${this._cardH}px; ${tr}`,
      c1Style: `top: 0px; ${tr}`,
      c2Style: `top: ${this._c1InitTop}px; ${tr}`,
    })

    setTimeout(() => {
      const newIndex = this.data.currentIndex + 1
      const nl = this.data.newsList
      // 一次性更新：数据 + 位置（无过渡），视觉无闪烁
      this.setData({
        currentIndex: newIndex,
        c0: nl[newIndex] || null,
        c1: nl[newIndex + 1] || null,
        c2: nl[newIndex + 2] || null,
        c0Style: 'top: 0px;',
        c1Style: `top: ${this._c1InitTop}px;`,
        c2Style: `top: ${this._c2InitTop}px;`,
      })
      this._animating = false
    }, 340)
  },

  snapBack() {
    this._animating = true
    this.applyStyles(0, true)
    setTimeout(() => { this._animating = false }, 360)
  },

  onImgSwiperChange(e: any) {
    const imgIndex = e.detail.current as number
    this.setData({
      'c0.imgIndex': imgIndex,
      [`newsList[${this.data.currentIndex}].imgIndex`]: imgIndex,
    })
  },

  onLike() {
    const idx = this.data.currentIndex
    const item = this.data.c0
    if (!item) return
    const liked = !item.liked
    const likes = liked ? item.likes + 1 : item.likes - 1
    this.setData({
      'c0.liked': liked,
      'c0.likes': likes,
      'c0.likesText': formatLikes(likes),
      [`newsList[${idx}].liked`]: liked,
      [`newsList[${idx}].likes`]: likes,
      [`newsList[${idx}].likesText`]: formatLikes(likes),
    })
  },

  onComment() {
    wx.showToast({ title: '评论功能开发中', icon: 'none' })
  },

  onShare() {
    wx.showToast({ title: '转发功能开发中', icon: 'none' })
  },

  onDetail() {
    wx.showToast({ title: '详情页开发中', icon: 'none' })
  },
})
