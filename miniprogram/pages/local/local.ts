const LOCAL_NEWS = [
  {
    id: 101,
    title: '北京发布新一轮暴雨橙色预警，城区多条道路出现严重积水',
    source: '北京日报', time: '10分钟前', reads: '5.2万',
    image: 'https://picsum.photos/seed/loc001/400/300',
  },
  {
    id: 102,
    title: '北京地铁16号线南延段今日正式开通，沿途居民出行更便利',
    source: '北京晚报', time: '32分钟前', reads: '3.1万',
    image: 'https://picsum.photos/seed/loc002/400/300',
  },
  {
    id: 103,
    title: '朝阳区举办社区文化节，数百名居民参与互动演出活动',
    source: '朝阳发布', time: '1小时前', reads: '1.8万',
    image: 'https://picsum.photos/seed/loc003/400/300',
  },
  {
    id: 104,
    title: '北京首批自动驾驶出租车正式运营，市民可免费扫码体验',
    source: '北京商报', time: '2小时前', reads: '12.4万',
    image: 'https://picsum.photos/seed/loc004/400/300',
  },
  {
    id: 105,
    title: '北京今夏首个高温日气温突破38℃，防暑降温提示正式发布',
    source: '北京气象', time: '3小时前', reads: '6.7万',
    image: 'https://picsum.photos/seed/loc005/400/300',
  },
  {
    id: 106,
    title: '丰台区新建大型滨水公园正式开放，市民周末好去处再添新选择',
    source: '丰台发布', time: '4小时前', reads: '2.3万',
    image: 'https://picsum.photos/seed/loc006/400/300',
  },
  {
    id: 107,
    title: '中关村科学城新建项目将获专项政策补贴，总额逾10亿元',
    source: '海淀新闻', time: '5小时前', reads: '4.5万',
    image: 'https://picsum.photos/seed/loc007/400/300',
  },
  {
    id: 108,
    title: '首钢园沉浸式数字艺术大展开幕，周末打卡人潮排队超两小时',
    source: '石景山发布', time: '昨天', reads: '8.1万',
    image: 'https://picsum.photos/seed/loc008/400/300',
  },
  {
    id: 109,
    title: '北京推出"一刻钟便民生活圈"升级计划，覆盖全市100个社区',
    source: '北京发布', time: '昨天', reads: '3.6万',
    image: 'https://picsum.photos/seed/loc009/400/300',
  },
]

Page({
  data: {
    tabs: ['头条', '本地', '附近'],
    activeTab: '头条',
    newsList: LOCAL_NEWS,
    refreshing: false,
  },

  onTabTap(e: any) {
    this.setData({ activeTab: e.currentTarget.dataset.tab })
  },

  onRefresh() {
    this.setData({ refreshing: true })
    setTimeout(() => {
      this.setData({ refreshing: false })
    }, 800)
  },

  onNewsTap() {
    wx.showToast({ title: '新闻详情开发中', icon: 'none' })
  },
})
