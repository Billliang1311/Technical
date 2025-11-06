const mainMenuItems = document.querySelectorAll('#main-menu li');
const subMenu = document.querySelector('#sub-menu ul');
const detailContent = document.getElementById('detail-content');
const heading = document.querySelector('#sub-menu h2');
const heading2 = document.querySelector('#details h2');

// 主菜单与子菜单映射
const subItems = {
  '系统': ['显示', '声音', '通知','电源和电池','储存','故障排查','恢复','关于'],
  '蓝牙': ['开关与连接','鼠标','触摸板'],
  '网络': ['Wi-Fi', '以太网'],
  '个性化': ['颜色', '字体'],
  '应用': ['应用和功能','默认应用','开机启动'],
  '账户':['登录选项'],
  '语言':['语言和区域'],
  '辅助':['字体大小','鼠标指针'],
  '隐私':['应用权限']
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
            <li>常见请求：设置分屏</li>
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
          <li>重点内容: 如何进入安全模式</li>
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
  img: `img/About.heic`
  }, 
  '开关与连接': {
  text: `
      <ul style="list-style-type: none;">
          <li>重点内容: 1.从哪开关蓝牙 2.怎么添加设备</li>
          <li>常见故障：蓝牙设备无法使用</li>
          <li>解决思路：按信号传输的路径查找问题：电脑-蓝牙设备</li>
      </ul>
  `,
  img: `img/Bluetooth.png`
  }, 
  '鼠标': {
  text: `
      <ul style="list-style-type: none;">
          <li>重点内容: 知道在哪开启或关闭</li>
          <li>常见请求: 1.更换鼠标主键 2.更改鼠标速度</li>
          <li>常见故障：鼠标无法使用</li>
          <li>解决思路：同蓝牙设备</li>
      </ul>
  `,
  img: `img/Mouse.png`
  }, 
  '触摸板': {
    text: `
        <ul style="list-style-type: none;">
            <li>重点内容: 知道在哪开启或关闭</li>
            <li>常见故障: 触摸屏没反应</li>
            <li>解决思路：开启触摸屏</li>
        </ul>
    `,
    img: `img/Touchpad.png`
  }, 
  'Wi-Fi': {
    text: `
        <ul style="list-style-type: none;">
            <li>重点内容: 知道在哪开启或关闭</li>
        </ul>
    `,
    img: `img/Wi-Fi.png`
  },     
  '以太网': {
    text: `
        <ul style="list-style-type: none;">
            <li>重点内容: 查看网络信息</li>
        </ul>
    `,
    img: `img/IPconfig.png`
  },
  '颜色': {
    text: `
        <ul style="list-style-type: none;">
            <li>重点内容: 深色/浅色</li>
        </ul>
    `,
    img: `img/Color.png`
  }, 
  '字体': {
    text: `
        <ul style="list-style-type: none;">
            <li>重点内容: 安装字体</li>
        </ul>
    `,
    img: `img/Font.png`
  }, 
  '应用和功能': {
    text: `
        <ul style="list-style-type: none;">
            <li>重点内容: 卸载和修复</li>
        </ul>
    `,
    img: `img/Installedapp.png`
  }, 
  '默认应用': {
    text: `
        <ul style="list-style-type: none;">
            <li>重点内容: 如何调整默认应用
              <ol>
                <li>通过“设置”调整</li>
                <li>通过“文件-右键-打开方式”调整</li>
              </ol>
            </li>
        </ul>
    `,
    imgs: [
      'img/defaultapp.png',
      'img/defaultapp1.png',
    ]
  },
  '开机启动': {
    text: `
        <ul style="list-style-type: none;">
            <li>重点内容: 开启和关闭</li>
        </ul>
    `,
    img: `img/startup.png`
  }, 
  '登录选项': {
    text: `
        <ul style="list-style-type: none;">
            <li>重点内容: 登录方式设置
              <ol>
                <li>密码</li>
                <li>PIN码</li>
                <li>指纹</li>
                <li>人面识别</li>
              </ol>
            </li>
        </ul>
    `,
    img: `img/Signin.png`
  }, 
  '语言和区域': {
    text: `
        <ol style="list-style-type: none;">
            <li>重点内容:1.语言 2.输入法</li>
            <li>常见请求:1.添加删减语言种类 2.添加删减输入法</li>
            <li>常见故障:中文乱码</li>
            <li>解决方法:将区域和区域格式设置为中国</li>
        </ol>
    `,
    imgs: [
      'img/language1.png',
      'img/language2.png',
      'img/codeerror.png',
    ]
  }, 
  '字体大小': {
    text: `
        <ul style="list-style-type: none;">
            <li>重点内容: 字体大小</li>
            <li>常见请求：调节字体大小</li>
        </ul>
    `,
    img: `img/Textsize.png`
  }, 
  '鼠标指针': {
    text: `
        <ul style="list-style-type: none;">
            <li>重点内容: 鼠标大小和样式</li>
            <li>常见请求：调节鼠标指针大小和样式</li>
        </ul>
    `,
    img: `img/mousestyle.png`
  }, 
  '应用权限': {
    text: `
        <ul style="list-style-type: none;">
            <li>重点内容:打开或关闭相关设备，如定位，摄像头，麦克风</li>
            <li>常见故障:Teams会议摄像头，麦克风无法使用</li>
            <li>解决方法:1.在“隐私”打开对应该设备 2.Troubleshooting</li>
        </ul>
    `,
    img: `img/Privacy.png`
  }, 
};


mainMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      mainMenuItems.forEach(i => i.style.backgroundColor = '');
      item.style.backgroundColor = 'grey';
      const category = item.getAttribute('data-category');

      heading.textContent = item.textContent;
      heading2.textContent = "详细内容"
      subMenu.innerHTML = '';
      detailContent.innerHTML = '请选择子菜单项。';
  
      if (subItems[category]) {
        subItems[category].forEach(sub => {
          const li = document.createElement('li');
          li.textContent = sub;
          li.addEventListener('click', () => {
            heading2.textContent = li.textContent;
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
  