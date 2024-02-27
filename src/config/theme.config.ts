/**
 * @name: 主题配置
 * @author: zhangxiaoxi
 * @date: 2024-02-27 10:27
 * @description：导出主题配置
 * @update: 2024-02-27 10:27
 */
export const themeConfig: ThemeType = {
  //布局支持：分栏布局column、纵向布局vertical、横向布局horizontal
  layout: 'column',
  //主题支持：默认default、简洁plain、科技technology
  themeName: 'default',
  //菜单宽度，仅支持px，建议大小：266px、277px、288px，其余尺寸会影响美观
  menuWidth: '266px',
  //分栏风格：横向风格horizontal、纵向风格vertical、卡片风格card、箭头风格arrow、半圆风格semicircle
  columnStyle: 'card',
  //颜色
  color: '#4e88f3',
  //菜单背景跟随配色
  isFollow: false,
  //是否固定头部固定
  fixedHeader: true,
  //是否开启顶部进度条
  showProgressBar: true,
  //是否开启页脚
  showFooter: true,
  //是否开启标签页
  showTabs: true,
  //显示标签页时标签页样式：卡片风格card、灵动风格smart、圆滑风格smooth、矩形风格rect
  tabsBarStyle: 'card',
  //是否显示标签页图标
  showTabsIcon: true,
  //是否开启语言选择组件
  showLanguage: true,
  //是否开启刷新组件
  showRefresh: true,
  //是否开启搜索组件
  showSearch: true,
  //是否开启主题组件
  showTheme: true,
  //是否开启通知组件
  showNotice: true,
  //是否开启全屏组件
  showFullScreen: true,
  //是否开启右侧悬浮窗
  showThemeSetting: true,
  //是否开启暗黑组件
  showDark: true,
  //否默认收起左侧菜单
  foldSidebar: false,
  //是否开启页面动画  value为空：无动画、el-fade-in-linear、el-fade-in、el-zoom-in-center、el-zoom-in-top、el-zoom-in-bottom。
  pageTransition: '',
  // 圆角（单位px，类型必须为数字）
  radius: 5,
  // 是否开启锁屏
  showLock: true,
  // 是否开启颜色选择器组件
  showColorPicker: true,
  // 色弱
  colorWeakness: false,
}