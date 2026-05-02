function formatLikes(n: number): string {
  if (n >= 10000) return (n / 10000).toFixed(1) + '万'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(n)
}

const ALL_NEWS = [
  {
    id: 1,
    title: 'OpenAI 发布全新大模型，推理能力较上代提升300%，多项测试超越人类水平',
    category: '科技', categoryKey: 'tech',
    image: 'https://picsum.photos/seed/t001/400/280',
    source: '科技日报', likesText: formatLikes(3421),
  },
  {
    id: 2,
    title: 'A股三大指数全线强势上涨，沪指重新站上3500点整数关口',
    category: '财经', categoryKey: 'finance',
    image: 'https://picsum.photos/seed/f002/400/500',
    source: '财经早报', likesText: formatLikes(12034),
  },
  {
    id: 3,
    title: '知名歌手宣布年底开全国巡回演唱会，首站上海门票一秒售罄',
    category: '娱乐', categoryKey: 'ent',
    image: 'https://picsum.photos/seed/e003/400/300',
    source: '娱乐头条', likesText: formatLikes(8956),
  },
  {
    id: 4,
    title: '多地持续高温突破历史极值，气象部门发布最高级别红色预警',
    category: '热点', categoryKey: 'hot',
    image: 'https://picsum.photos/seed/h004/400/450',
    source: '新华社', likesText: formatLikes(5678),
  },
  {
    id: 5,
    title: '特斯拉发布全新 Model 3，续航提升20%同时价格下调至21万元',
    category: '科技', categoryKey: 'tech',
    image: 'https://picsum.photos/seed/t005/400/360',
    source: '汽车之家', likesText: formatLikes(2109),
  },
  {
    id: 6,
    title: '央行宣布降准0.25个百分点，释放长期流动性约5000亿元',
    category: '财经', categoryKey: 'finance',
    image: 'https://picsum.photos/seed/f006/400/290',
    source: '经济参考报', likesText: formatLikes(987),
  },
  {
    id: 7,
    title: '大热综艺《声生不息》开播首日，收视率创近两年同类节目新高',
    category: '娱乐', categoryKey: 'ent',
    image: 'https://picsum.photos/seed/e007/400/520',
    source: '综艺周刊', likesText: formatLikes(12043),
  },
  {
    id: 8,
    title: '强台风登陆福建沿海，多省启动防汛二级应急响应',
    category: '热点', categoryKey: 'hot',
    image: 'https://picsum.photos/seed/h008/400/310',
    source: '人民日报', likesText: formatLikes(4521),
  },
  {
    id: 9,
    title: '苹果发布 iOS 20 正式版，全面引入 Apple Intelligence AI 功能',
    category: '科技', categoryKey: 'tech',
    image: 'https://picsum.photos/seed/t009/400/400',
    source: '苹果圈', likesText: formatLikes(6789),
  },
  {
    id: 10,
    title: '一线城市房地产市场加速回暖，北京二手房成交量环比上升28%',
    category: '财经', categoryKey: 'finance',
    image: 'https://picsum.photos/seed/f010/400/350',
    source: '房产周刊', likesText: formatLikes(1456),
  },
  {
    id: 11,
    title: '顶流爱豆突然宣布结婚，粉丝连夜刷屏震惊整个互联网',
    category: '娱乐', categoryKey: 'ent',
    image: 'https://picsum.photos/seed/e011/400/460',
    source: '明星情报站', likesText: formatLikes(23891),
  },
  {
    id: 12,
    title: '全球多国爆发大规模抗议示威活动，国际局势持续升温',
    category: '国际', categoryKey: 'intl',
    image: 'https://picsum.photos/seed/i012/400/320',
    source: '国际观察', likesText: formatLikes(3204),
  },
  {
    id: 13,
    title: '中国男足引进世界级主帅，球迷期待2026世界杯出线希望大增',
    category: '体育', categoryKey: 'sport',
    image: 'https://picsum.photos/seed/s013/400/380',
    source: '体育频道', likesText: formatLikes(9087),
  },
  {
    id: 14,
    title: '外卖骑手权益保障新规出台，平台须依法为骑手缴纳社保',
    category: '社会', categoryKey: 'society',
    image: 'https://picsum.photos/seed/so014/400/340',
    source: '工人日报', likesText: formatLikes(2341),
  },
  {
    id: 15,
    title: '华为 Mate 70 旗舰系列正式发布，搭载自研麒麟 9100 处理器',
    category: '科技', categoryKey: 'tech',
    image: 'https://picsum.photos/seed/t015/400/420',
    source: '手机中国', likesText: formatLikes(15023),
  },
  {
    id: 16,
    title: '美联储宣布降息50个基点，为2020年以来最大幅度单次降息',
    category: '财经', categoryKey: 'finance',
    image: 'https://picsum.photos/seed/f016/400/300',
    source: '华尔街日报中文', likesText: formatLikes(7823),
  },
]

Page({
  data: {
    categories: ['全部', '热点', '科技', '财经', '娱乐', '体育', '社会', '国际'],
    currentCategory: '全部',
    leftColumn: [] as any[],
    rightColumn: [] as any[],
    refreshing: false,
    noMore: false,
  },

  onLoad() {
    this.loadNews()
  },

  loadNews() {
    const { currentCategory } = this.data
    const filtered = currentCategory === '全部'
      ? ALL_NEWS
      : ALL_NEWS.filter(n => n.category === currentCategory)

    const left: any[] = []
    const right: any[] = []
    filtered.forEach((item, i) => {
      if (i % 2 === 0) left.push(item)
      else right.push(item)
    })

    this.setData({ leftColumn: left, rightColumn: right, noMore: true })
  },

  onCategoryTap(e: any) {
    const category = e.currentTarget.dataset.category as string
    if (category === this.data.currentCategory) return
    this.setData({ currentCategory: category })
    this.loadNews()
  },

  onRefresh() {
    this.setData({ refreshing: true })
    setTimeout(() => {
      this.loadNews()
      this.setData({ refreshing: false })
    }, 800)
  },

  onLoadMore() {},

  onNewsTap() {
    wx.showToast({ title: '新闻详情开发中', icon: 'none' })
  },
})
