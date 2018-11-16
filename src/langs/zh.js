export default {
  login: {
    title: 'VAVA 系统登录',
    username: '用户名',
    password: '密码 (符合规则的任意字符串)',
    remember: `7天内自动登录`,
    login: '登 录',
    list: '关于账户？',
    listHint: '基于 "mock.js" 模拟的数据， 随便选一个去登录吧！'
  },
  router: {
    home: '首页',
    dashboard: '仪表盘',
    report: '报表',
    table: '表格',
    inlineEdit: '行内编辑',
    sortable: '排序',
    draggable: '拖拽排序',
    fullFeature: '综合使用',
    iconViewer: '图标',
    excel: 'Excel',
    excelExport: '导出',
    excelImport: '导入',
    settings: '配置',
    others: '其它',
    // hidden in side bar
    notification: '通知中心'
  },
  header: {
    search: '全局搜索...',
    refresh: '刷新',
    screenFull: '全屏',
    screenResize: '退出全屏',
    theme: '主题换肤',
    notificationHas: '你有新的未读信息',
    notificationNo: '你没有未读信息',
    profile: '个人中心',
    settings: '个人设置',
    logout: {
      title: '退出系统',
      confirm: '确定退出当前登录的账户吗？',
      button: '确定'
    }
  },
  tabBar: {
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  options: {
    confirm: {
      title: '操作确认',
      sure: '确定'
    }
  },
  theme: {
    default: '默认主题',
    light: '亮色主题',
    dark: '暗色主题'
  },
  // About pages
  notification: {
    title: '通知中心',
    mark: '标记为已读',
    markAll: '标记所有为已读',
    confirm: '确定将所有未读消息标记为已读吗？',
    button: '确定'
  },
  icons: {
    usage: '使用方法',
    content: '使用 <strong>va-icon</strong> 组件来使用内置图标, 例如： &lt;va-icon icon="dashboard"/&gt;.',
    list: '图标列表<small class="text-muted hidden-sm-and-down">点击任意一个直接复制.</small>'
  },
  excelExport: {
    filename: '文件名',
    fileType: '文件类型',
    autoWidth: '自动列宽',
    execute: '导出',
    currentPage: '当前页',
    allPages: '所有页'
  },
  excelImport: {
    browse: '浏览',
    browseNotDrag: '浏览并选择一个excel文件......',
    drag: '拖拽一个文件到这，或者',
    selected: '已选择',
    change: '点击修改',
    errorSize: 'Excel导入最大仅支持 {allowSizeMax}m 以内的文件。',
    errorExcess: '只能导入一个文件',
    errorTypes: '只能支持导入 .xlsx, .xls, .csv 后缀的文件',
    emptyHint: '请先上传一个excel文件。',
    exitHint: '你有一个已经导入的excel文件. 确定离开当前页面吗？'
  }
}
