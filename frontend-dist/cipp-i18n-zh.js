/**
 * CIPP 中文翻译注入脚本
 * 使用 MutationObserver 实时翻译 UI 文本
 * 用户可通过 localStorage('cipp_lang') 切换语言
 */
(function() {
  'use strict';

  const LANG_KEY = 'cipp_lang';
  const currentLang = localStorage.getItem(LANG_KEY) || 'en';

  // ═══════════════════════════════════════════
  // 翻译字典
  // ═══════════════════════════════════════════
  const translations = {
    // 侧边栏 - 顶级菜单
    'Dashboard': '仪表盘',
    'Identity Management': '身份管理',
    'Tenant Administration': '租户管理',
    'Security & Compliance': '安全与合规',
    'Intune': 'Intune 终端管理',
    'Teams & Exchange': 'Teams 与 Exchange',
    'Reports': '报告',

    // 侧边栏 - Identity Management
    'Administration': '管理',
    'Users': '用户',
    'Risky Users': '风险用户',
    'Groups': '组',
    'Group Templates': '组模板',
    'Devices': '设备',
    'Deleted Items': '已删除项',
    'Roles': '角色',
    'JIT Admin': 'JIT 管理员',
    'JIT Admin Templates': 'JIT 管理员模板',
    'Vacation Mode': '休假模式',
    'Offboarding Wizard': '离职向导',
    'MFA Report': 'MFA 报告',
    'Inactive Users': '不活跃用户',
    'Sign-in Report': '登录报告',
    'AAD Connect Report': 'AAD Connect 报告',
    'Risk Detections': '风险检测',

    // 侧边栏 - Tenant Administration
    'Tenants': '租户',
    'Alert Configuration': '告警配置',
    'Audit Logs': '审计日志',
    'Applications': '应用程序',
    'Secure Score': '安全评分',
    'App Consent Requests': '应用同意请求',
    'Authentication Methods': '认证方式',
    'Partner Relationships': '合作伙伴关系',
    'Domains': '域名',
    'GDAP Management': 'GDAP 管理',
    'Standards & Drift': '标准与偏差',
    'Standards Management': '标准管理',
    'Best Practice Analyser': '最佳实践分析',
    'Domains Analyser': '域名分析',
    'Conditional Access': '条件访问',
    'CA Policies': 'CA 策略',
    'CA Vacation Mode': 'CA 休假模式',
    'CA Templates': 'CA 模板',
    'Named Locations': '命名位置',
    'Licence Report': '许可证报告',
    'Sherweb Licence Report': 'Sherweb 许可证报告',
    'Consented Applications': '已同意应用',
    'Graph / Office Reports': 'Graph / Office 报告',
    'Manage Tenant': '管理租户',

    // 侧边栏 - Security & Compliance
    'Incidents & Alerts': '事件与告警',
    'Incidents': '事件',
    'Alerts': '告警',
    'MDO Alerts': 'MDO 告警',
    'Check Alerts': '检查告警',
    'Defender': 'Defender',
    'Defender Status': 'Defender 状态',
    'Defender Deployment': 'Defender 部署',
    'Vulnerabilities': '漏洞',
    'Device Compliance': '设备合规',
    'MDE Onboarding': 'MDE 入驻',
    'Safe Links': '安全链接',
    'Safe Links Policies': '安全链接策略',
    'Safe Links Templates': '安全链接模板',

    // 侧边栏 - Intune
    'Application Queue': '应用队列',
    'Application Templates': '应用模板',
    'Autopilot': 'Autopilot',
    'Autopilot Devices': 'Autopilot 设备',
    'Add Autopilot Device': '添加 Autopilot 设备',
    'Profiles': '配置文件',
    'Status Pages': '状态页',
    'Device Management': '设备管理',
    'Configuration Policies': '配置策略',
    'Compliance Policies': '合规策略',
    'App Policies': '应用策略',
    'Policy Templates': '策略模板',
    'Reusable Settings': '可重用设置',
    'Reusable Settings Templates': '可重用设置模板',
    'Assignment Filters': '分配过滤器',
    'Assignment Filter Templates': '分配过滤器模板',

    // 侧边栏 - Teams & Exchange
    'Mailboxes': '邮箱',
    'Mailbox Rules': '邮箱规则',
    'Contacts': '联系人',
    'Distribution Lists': '通讯组',
    'Shared Mailboxes': '共享邮箱',
    'Resource Mailboxes': '资源邮箱',
    'Quarantine': '隔离',
    'Spam Filter': '垃圾邮件过滤',
    'Connectors': '连接器',
    'Transport Rules': '传输规则',
    'Accepted Domains': '接受域',
    'Retention Policies': '保留策略',
    'Teams': 'Teams',
    'Teams Policies': 'Teams 策略',
    'SharePoint': 'SharePoint',
    'Site List': '站点列表',
    'OneDrive': 'OneDrive',

    // 通用 UI
    'Search': '搜索',
    'Filter': '筛选',
    'Refresh': '刷新',
    'Save': '保存',
    'Cancel': '取消',
    'Delete': '删除',
    'Edit': '编辑',
    'Add': '添加',
    'Create': '创建',
    'Submit': '提交',
    'Close': '关闭',
    'Confirm': '确认',
    'Back': '返回',
    'Next': '下一步',
    'Loading': '加载中',
    'No data': '暂无数据',
    'Actions': '操作',
    'Name': '名称',
    'Type': '类型',
    'Status': '状态',
    'Date': '日期',
    'Description': '描述',
    'Enabled': '已启用',
    'Disabled': '已禁用',
    'Yes': '是',
    'No': '否',
    'Success': '成功',
    'Error': '错误',
    'Warning': '警告',
    'Info': '信息',

    // 顶栏
    'Clear Cache and Reload': '清除缓存并刷新',
    'License': '许可证',
    'Report Bug': '报告 Bug',
    'Request Feature': '功能建议',
    'Join the Discord!': '加入 Discord',
    'Check the Documentation': '查看文档',
    'Sign Out': '退出登录',
    'Account': '账户',
    'Settings': '设置',

    // 登录页
    'Login': '登录',
    'Email': '邮箱',
    'Password': '密码',
    'Remember me': '记住我',
    'Forgot password?': '忘记密码？',
    "Don't have an account?": '没有账户？',
    'Register': '注册',
    'Sign in': '登录',
    'Logging into CIPP': '正在登录 CIPP',
    'Please wait while we log you in...': '请稍候，正在登录...',
    'Registration': '注册',

    // 401 页面
    'Access Denied': '访问被拒绝',
    "You're not allowed to be here, or are logged in under the wrong account.": '您无权访问此页面，或登录了错误的账户。',
    'Return to Home': '返回首页',

    // 表格
    'Rows per page': '每页行数',
    'of': '/',
    'Selected': '已选择',
    'Export': '导出',
    'Columns': '列',

    // 常见页面标题
    'User List': '用户列表',
    'Group List': '组列表',
    'Device List': '设备列表',
    'Tenant List': '租户列表',
  };

  // ═══════════════════════════════════════════
  // 翻译引擎
  // ═══════════════════════════════════════════
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  function translateText(node) {
    if (currentLang !== 'zh') return;
    const text = node.textContent.trim();
    if (!text || text.length > 100) return;

    // 精确匹配
    if (translations[text]) {
      node.textContent = node.textContent.replace(text, translations[text]);
      return;
    }

    // 部分匹配（对于包含翻译文本的字符串）
    for (const [en, zh] of Object.entries(translations)) {
      if (text.includes(en) && text.length < en.length + 20) {
        node.textContent = node.textContent.replace(en, zh);
        return;
      }
    }
  }

  function translatePage() {
    if (currentLang !== 'zh') return;
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    let node;
    while (node = walker.nextNode()) {
      translateText(node);
    }
  }

  // ═══════════════════════════════════════════
  // 语言切换按钮
  // ═══════════════════════════════════════════
  function addLanguageToggle() {
    const btn = document.createElement('button');
    btn.id = 'cipp-lang-toggle';
    btn.innerHTML = currentLang === 'zh' ? '🌐 EN' : '🌐 中文';
    btn.style.cssText = `
      position: fixed;
      bottom: 16px;
      left: 16px;
      z-index: 9999;
      padding: 8px 16px;
      border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.2);
      background: rgba(0,0,0,0.7);
      color: white;
      cursor: pointer;
      font-size: 14px;
      backdrop-filter: blur(10px);
      transition: all 0.2s;
    `;
    btn.onmouseover = () => {
      btn.style.background = 'rgba(0,0,0,0.9)';
      btn.style.transform = 'scale(1.05)';
    };
    btn.onmouseout = () => {
      btn.style.background = 'rgba(0,0,0,0.7)';
      btn.style.transform = 'scale(1)';
    };
    btn.onclick = () => {
      const newLang = localStorage.getItem(LANG_KEY) === 'zh' ? 'en' : 'zh';
      localStorage.setItem(LANG_KEY, newLang);
      window.location.reload();
    };
    document.body.appendChild(btn);
  }

  // ═══════════════════════════════════════════
  // MutationObserver - 监听 DOM 变化
  // ═══════════════════════════════════════════
  function setupObserver() {
    if (currentLang !== 'zh') return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.TEXT_NODE) {
            translateText(node);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const walker = document.createTreeWalker(
              node,
              NodeFilter.SHOW_TEXT,
              null,
              false
            );
            let textNode;
            while (textNode = walker.nextNode()) {
              translateText(textNode);
            }
          }
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  // ═══════════════════════════════════════════
  // 初始化
  // ═══════════════════════════════════════════
  function init() {
    addLanguageToggle();
    if (currentLang === 'zh') {
      // 等待页面加载完成后翻译
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          setTimeout(translatePage, 500);
          setTimeout(translatePage, 1500);
          setTimeout(translatePage, 3000);
          setupObserver();
        });
      } else {
        setTimeout(translatePage, 500);
        setTimeout(translatePage, 1500);
        setTimeout(translatePage, 3000);
        setupObserver();
      }
    }
  }

  init();
})();
