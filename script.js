const mainMenuItems = document.querySelectorAll('#main-menu li');
const subMenu = document.querySelector('#sub-menu ul');
const detailContent = document.getElementById('detail-content');

// 主菜单与子菜单映射
const subItems = {
  '系统': ['显示', '声音', '通知','电源和电池','储存','故障排查','恢复','关于'],
  '网络': ['Wi-Fi', '以太网', 'VPN'],
  '个性化': ['背景', '颜色', '主题']
};

// 子菜单与详细内容映射
const details = {
    '声音': {
      text: `
        <ul style="list-style-type: none;">
          <li>重点内容：选择正确的设备</li>
          <li>常见故障：听不到声音/麦克风没有声音</li>
          <li>解决思路：按声音传输的路径查找问题: 输入-连接线-输出</li>
        </ul>
      `,
      imgs: [
        'img/Sound1.png',
        'img/Sound2.png',
      ]
    },  
  '显示': {
    text: `
        <ul style="list-style-type: none;">
            <li>重点内容: 1.多屏(Win+P) 2.主屏设置</li>
            <li>常见故障：屏幕不亮。</li>
            <li>解决思路：按信号传输的路径查找问题：电脑-连接线-显示器</li>
        </ul>
    `,
    imgs: [
        'img/Display1.png',
        'img/Display2.png',
      ]
    },  
  '通知': {
    text: `
        <ul style="list-style-type: none;">
            <li>重点内容: 1. 打开通知提醒 2.专注模式关闭</li>
            <li>常见故障：不弹出提醒</li>
            <li>解决思路：将通知提醒打开并确定专注模式关闭</li>
        </ul>
    `,
    img: `img/Notification1.png`
    }, 
  '电源和电池': {
    text: `
        <ul style="list-style-type: none;">
            <li>重点内容: 1. 屏幕和睡眠 2.盒上，电源和睡眠按键控制</li>
            <li>常见需求：锁屏时间调节，盒上保持开机状态</li>
        </ul>
    `,
    imgs: [
      'img/Battery1.png',
      'img/Battery2.png',
    ]
  },  
'储存': {
  text: `
      <ul style="list-style-type: none;">
          <li>重点内容: 如何清理硬盘</li>
          <li>操作方法：
            <ol>
              <li>Storage-Cleanup recommendations. 只清理临时文件</li>
              <li>打开%temp%，删除所有文件</li>
              <li>建议用户删除个人文件，不必要的软件，旧邮件等</li>
              <li>Task Manager->Start up，删除不必要的启动项</li>
            </ol>
          </li>
      </ul>
  `,
  imgs: [
    'img/Storage1.png',
    'img/temp.png',
  ]
},  
'故障排查': {
  text: `
      <ul style="list-style-type: none;">
          <li>重点内容: 如何使用</li>
      </ul>
  `,
  img: `img/troubleshoot.png`
}, 
'恢复': {
  text: `
      <ul style="list-style-type: none;">
          <li>重点内容: 如何进入安装模式</li>
          <li>操作方法：
            <ol>
              <li>「恢复」→「高级启动」下的「立即重新启动」。‌‌</li>
              <li>重启后依次选择「疑难解答」→「高级选项」→「启动设置」→「重启」，按F4（安全模式）或F5（带网络的安全模式）。‌‌</li>
            </ol>
          </li>
      </ul>
  `,
  imgs: [
    'img/Recovery.png',
    'img/safemode.png',
  ]
}, 
'关于': {
  text: `
      <ul style="list-style-type: none;">
          <li>重点内容: 查看计算机名</li>
      </ul>
  `,
  img: `img/About.png`
}, 
};


mainMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      const category = item.getAttribute('data-category');
      subMenu.innerHTML = '';
      detailContent.innerHTML = '请选择子菜单项。';
  
      if (subItems[category]) {
        subItems[category].forEach(sub => {
          const li = document.createElement('li');
          li.textContent = sub;
          li.addEventListener('click', () => {
            const detail = details[sub];
            if (detail) {
              let imagesHTML = '';
              if (detail.imgs && Array.isArray(detail.imgs)) {
                imagesHTML = detail.imgs.map(src => `<img src="${src}" alt="${sub}" style ="display: block;">`).join('');
              } else if (detail.img) {
                imagesHTML = `<img src="${detail.img}" alt="${sub}">`;
              }
  
              detailContent.innerHTML = `
                <p>${detail.text}</p>
                ${imagesHTML}
              `;
            } else {
              detailContent.innerHTML = `<p>${sub} 的详细内容尚未添加。</p>`;
            }
          });
          subMenu.appendChild(li);
        });
      }
    });
  });
  