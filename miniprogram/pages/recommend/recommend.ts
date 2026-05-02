function formatLikes(n: number): string {
  if (n >= 10000) return (n / 10000).toFixed(1) + '万'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(n)
}

const NEWS_LIST = [
  {
    id: 1, title: 'OpenAI 发布全新大模型，推理能力较上代提升300%，多项测试超越人类水平',
    category: '科技', categoryKey: 'tech', source: '科技日报',
    images: [
      'https://picsum.photos/seed/t001a/600/900',
      'https://picsum.photos/seed/t001b/600/900',
      'https://picsum.photos/seed/t001c/600/900',
    ],
    imgIndex: 0,
    likes: 3421, likesText: formatLikes(3421), liked: false,
    comments: 892, commentsText: formatLikes(892),
    shares: 234, sharesText: formatLikes(234),
  },
  {
    id: 2, title: 'A股三大指数全线强势上涨，沪指重新站上3500点整数关口',
    category: '财经', categoryKey: 'finance', source: '财经早报',
    images: [
      'https://picsum.photos/seed/f002a/600/900',
      'https://picsum.photos/seed/f002b/600/900',
    ],
    imgIndex: 0,
    likes: 12034, likesText: formatLikes(12034), liked: false,
    comments: 3201, commentsText: formatLikes(3201),
    shares: 876, sharesText: formatLikes(876),
  },
  {
    id: 3, title: '知名歌手宣布年底开全国巡回演唱会，首站上海门票一秒售罄',
    category: '娱乐', categoryKey: 'ent', source: '娱乐头条',
    images: [
      'https://picsum.photos/seed/e003a/600/900',
      'https://picsum.photos/seed/e003b/600/900',
      'https://picsum.photos/seed/e003c/600/900',
      'https://picsum.photos/seed/e003d/600/900',
    ],
    imgIndex: 0,
    likes: 8956, likesText: formatLikes(8956), liked: false,
    comments: 4320, commentsText: formatLikes(4320),
    shares: 1203, sharesText: formatLikes(1203),
  },
  {
    id: 4, title: '多地持续高温突破历史极值，气象部门发布最高级别红色预警',
    category: '热点', categoryKey: 'hot', source: '新华社',
    images: [
      'https://picsum.photos/seed/h004a/600/900',
      'https://picsum.photos/seed/h004b/600/900',
      'https://picsum.photos/seed/h004c/600/900',
    ],
    imgIndex: 0,
    likes: 5678, likesText: formatLikes(5678), liked: false,
    comments: 1432, commentsText: formatLikes(1432),
    shares: 567, sharesText: formatLikes(567),
  },
  {
    id: 5, title: '特斯拉发布全新 Model 3，续航提升20%同时价格下调至21万元',
    category: '科技', categoryKey: 'tech', source: '汽车之家',
    images: [
      'https://picsum.photos/seed/t005a/600/900',
      'https://picsum.photos/seed/t005b/600/900',
    ],
    imgIndex: 0,
    likes: 2109, likesText: formatLikes(2109), liked: false,
    comments: 654, commentsText: formatLikes(654),
    shares: 189, sharesText: formatLikes(189),
  },
  {
    id: 6, title: '央行宣布降准0.25个百分点，释放长期流动性约5000亿元',
    category: '财经', categoryKey: 'finance', source: '经济参考报',
    images: [
      'https://picsum.photos/seed/f006a/600/900',
      'https://picsum.photos/seed/f006b/600/900',
      'https://picsum.photos/seed/f006c/600/900',
    ],
    imgIndex: 0,
    likes: 987, likesText: formatLikes(987), liked: false,
    comments: 342, commentsText: formatLikes(342),
    shares: 98, sharesText: formatLikes(98),
  },
  {
    id: 7, title: '大热综艺《声生不息》开播首日，收视率创近两年同类节目新高',
    category: '娱乐', categoryKey: 'ent', source: '综艺周刊',
    images: [
      'https://picsum.photos/seed/e007a/600/900',
      'https://picsum.photos/seed/e007b/600/900',
      'https://picsum.photos/seed/e007c/600/900',
    ],
    imgIndex: 0,
    likes: 12043, likesText: formatLikes(12043), liked: false,
    comments: 5678, commentsText: formatLikes(5678),
    shares: 2341, sharesText: formatLikes(2341),
  },
  {
    id: 8, title: '强台风登陆福建沿海，多省启动防汛二级应急响应',
    category: '热点', categoryKey: 'hot', source: '人民日报',
    images: [
      'https://picsum.photos/seed/h008a/600/900',
      'https://picsum.photos/seed/h008b/600/900',
    ],
    imgIndex: 0,
    likes: 4521, likesText: formatLikes(4521), liked: false,
    comments: 1098, commentsText: formatLikes(1098),
    shares: 432, sharesText: formatLikes(432),
  },
  {
    id: 9, title: '苹果发布 iOS 20 正式版，全面引入 Apple Intelligence AI 功能',
    category: '科技', categoryKey: 'tech', source: '苹果圈',
    images: [
      'https://picsum.photos/seed/t009a/600/900',
      'https://picsum.photos/seed/t009b/600/900',
      'https://picsum.photos/seed/t009c/600/900',
    ],
    imgIndex: 0,
    likes: 6789, likesText: formatLikes(6789), liked: false,
    comments: 2134, commentsText: formatLikes(2134),
    shares: 876, sharesText: formatLikes(876),
  },
  {
    id: 10, title: '一线城市房地产市场加速回暖，北京二手房成交量环比上升28%',
    category: '财经', categoryKey: 'finance', source: '房产周刊',
    images: [
      'https://picsum.photos/seed/f010a/600/900',
      'https://picsum.photos/seed/f010b/600/900',
    ],
    imgIndex: 0,
    likes: 1456, likesText: formatLikes(1456), liked: false,
    comments: 567, commentsText: formatLikes(567),
    shares: 123, sharesText: formatLikes(123),
  },
  {
    id: 11, title: '顶流爱豆突然宣布结婚，粉丝连夜刷屏震惊整个互联网',
    category: '娱乐', categoryKey: 'ent', source: '明星情报站',
    images: [
      'https://picsum.photos/seed/e011a/600/900',
      'https://picsum.photos/seed/e011b/600/900',
      'https://picsum.photos/seed/e011c/600/900',
      'https://picsum.photos/seed/e011d/600/900',
    ],
    imgIndex: 0,
    likes: 23891, likesText: formatLikes(23891), liked: false,
    comments: 15043, commentsText: formatLikes(15043),
    shares: 6789, sharesText: formatLikes(6789),
  },
  {
    id: 12, title: '全球多国爆发大规模抗议示威活动，国际局势持续升温',
    category: '国际', categoryKey: 'intl', source: '国际观察',
    images: [
      'https://picsum.photos/seed/i012a/600/900',
      'https://picsum.photos/seed/i012b/600/900',
      'https://picsum.photos/seed/i012c/600/900',
    ],
    imgIndex: 0,
    likes: 3204, likesText: formatLikes(3204), liked: false,
    comments: 987, commentsText: formatLikes(987),
    shares: 345, sharesText: formatLikes(345),
  },
  {
    id: 13, title: '中国男足引进世界级主帅，球迷期待2026世界杯出线希望大增',
    category: '体育', categoryKey: 'sport', source: '体育频道',
    images: [
      'https://picsum.photos/seed/s013a/600/900',
      'https://picsum.photos/seed/s013b/600/900',
    ],
    imgIndex: 0,
    likes: 9087, likesText: formatLikes(9087), liked: false,
    comments: 4321, commentsText: formatLikes(4321),
    shares: 1234, sharesText: formatLikes(1234),
  },
  {
    id: 14, title: '外卖骑手权益保障新规出台，平台须依法为骑手缴纳社保',
    category: '社会', categoryKey: 'society', source: '工人日报',
    images: [
      'https://picsum.photos/seed/so014a/600/900',
      'https://picsum.photos/seed/so014b/600/900',
      'https://picsum.photos/seed/so014c/600/900',
    ],
    imgIndex: 0,
    likes: 2341, likesText: formatLikes(2341), liked: false,
    comments: 876, commentsText: formatLikes(876),
    shares: 234, sharesText: formatLikes(234),
  },
  {
    id: 15, title: '华为 Mate 70 旗舰系列正式发布，搭载自研麒麟 9100 处理器',
    category: '科技', categoryKey: 'tech', source: '手机中国',
    images: [
      'https://picsum.photos/seed/t015a/600/900',
      'https://picsum.photos/seed/t015b/600/900',
      'https://picsum.photos/seed/t015c/600/900',
      'https://picsum.photos/seed/t015d/600/900',
    ],
    imgIndex: 0,
    likes: 15023, likesText: formatLikes(15023), liked: false,
    comments: 6789, commentsText: formatLikes(6789),
    shares: 2341, sharesText: formatLikes(2341),
  },
  {
    id: 16, title: '美联储宣布降息50个基点，为2020年以来最大幅度单次降息',
    category: '财经', categoryKey: 'finance', source: '华尔街日报中文',
    images: [
      'https://picsum.photos/seed/f016a/600/900',
      'https://picsum.photos/seed/f016b/600/900',
    ],
    imgIndex: 0,
    likes: 7823, likesText: formatLikes(7823), liked: false,
    comments: 3012, commentsText: formatLikes(3012),
    shares: 987, sharesText: formatLikes(987),
  },
]

Page({
  data: {
    newsList: NEWS_LIST,
    currentIndex: 0,
    capsuleBottom: 74,
  },

  onLoad() {
    const capsule = wx.getMenuButtonBoundingClientRect()
    this.setData({ capsuleBottom: capsule.bottom })
  },

  // 外层：竖向新闻切换
  onSwiperChange(e: any) {
    this.setData({ currentIndex: e.detail.current })
  },

  // 内层：横向图片切换，更新对应新闻条目的 imgIndex
  onImgSwiperChange(e: any) {
    const newsIndex = e.currentTarget.dataset.newsIndex as number
    this.setData({
      [`newsList[${newsIndex}].imgIndex`]: e.detail.current,
    })
  },

  onLike(e: any) {
    const index = e.currentTarget.dataset.index as number
    const item = this.data.newsList[index]
    const liked = !item.liked
    const likes = liked ? item.likes + 1 : item.likes - 1
    this.setData({
      [`newsList[${index}].liked`]: liked,
      [`newsList[${index}].likes`]: likes,
      [`newsList[${index}].likesText`]: formatLikes(likes),
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
